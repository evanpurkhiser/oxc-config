export default {
  create(context) {
    const {sourceCode} = context;

    return {
      CallExpression(node) {
        let callee = node.callee;

        while (
          callee.type === 'TSNonNullExpression' ||
          callee.type === 'TSInstantiationExpression'
        ) {
          callee = callee.expression;
        }

        if (callee.type !== 'MemberExpression') {
          return;
        }

        // The ESTree expression range excludes grouping parentheses.
        const opening = sourceCode.getTokenBefore(callee.object);
        const closing = sourceCode.getTokenAfter(callee.object);

        if (opening?.value !== '(' || closing?.value !== ')') {
          return;
        }

        context.report({
          loc: opening.loc,
          message:
            'Remove redundant parentheses or extract the method receiver into a variable.',
        });
      },
    };
  },
};
