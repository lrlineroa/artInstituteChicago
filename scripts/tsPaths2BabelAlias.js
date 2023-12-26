const path = require('path');
const { configPaths } = require('react-app-rewire-alias');
const tsAlias = configPaths(path.resolve(__dirname, 'tsconfig.json'));
module.exports = tsAlias;