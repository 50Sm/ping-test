const fs = require('fs');
const path = require('path');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow .env file in repository'
    }
  },

  create(context) {
    const projectRoot = context.getCwd();
    const envPath = path.join(projectRoot, '.env');

    if (fs.existsSync(envPath)) {
      context.report({
        loc: { line: 1, column: 0 },
        message: '.env file must not exist in the repository'
      });
    }

    return {};
  }
};
