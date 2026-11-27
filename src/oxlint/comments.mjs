const lineBreak = /\r\n|[\r\n\u2028\u2029]/;

function expandStandaloneComment(comment, sourceCode) {
  const {start, end} = comment.loc;
  const line = sourceCode.lines[start.line - 1];
  const indentation = line.slice(0, start.column);

  if (indentation.trim() || line.slice(end.column).trim()) {
    return;
  }

  const content = comment.value.slice(1).trim();

  // TypeScript reads these directives from the last line of the comment.
  if (/^\**\s*@ts-(?:expect-error|ignore)/.test(comment.value)) {
    return;
  }

  const newline = sourceCode.text.match(lineBreak)?.[0] ?? '\n';
  const body = content ? `* ${content}` : '*';

  return ['/**', `${indentation} ${body}`, `${indentation} */`].join(newline);
}

const comments = {
  rules: {
    'multiline-jsdoc': {
      meta: {fixable: 'code'},
      create(context) {
        const {sourceCode} = context;

        return {
          Program() {
            for (const comment of sourceCode.getAllComments()) {
              if (comment.type !== 'Block' || !comment.value.startsWith('*')) {
                continue;
              }

              const lines = comment.value.split(lineBreak);
              const hasOwnDelimiterLines =
                lines.length >= 3 &&
                lines[0].trim() === '*' &&
                lines.at(-1).trim() === '';

              if (
                hasOwnDelimiterLines &&
                lines.slice(1, -1).every(line => /^\s*\*/.test(line))
              ) {
                continue;
              }

              const replacement =
                lines.length === 1
                  ? expandStandaloneComment(comment, sourceCode)
                  : undefined;

              context.report({
                loc: comment.loc,
                message:
                  'Use a multiline JSDoc block with delimiters on their own lines and a * on each body line.',
                fix: replacement
                  ? fixer => fixer.replaceTextRange(comment.range, replacement)
                  : undefined,
              });
            }
          },
        };
      },
    },
  },
};

export default comments;
