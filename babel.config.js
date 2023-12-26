const tsAlias = require("./scripts/tsPaths2BabelAlias");

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: tsAlias,
      },
    ]
  ]
};
