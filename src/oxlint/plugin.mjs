import comments from './comments.mjs';
import noParenthesizedMethodReceiver from './no-parenthesized-method-receiver.mjs';

export default {
  rules: {
    ...comments.rules,
    'no-parenthesized-method-receiver': noParenthesizedMethodReceiver,
  },
};
