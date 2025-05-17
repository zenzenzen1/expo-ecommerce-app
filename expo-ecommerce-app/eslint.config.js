// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
    rules: {
        //   "quotes": ["error", "single", { "avoidEscape": true }],
      // "no-trailing-spaces": "off"
      "quotes": "off",
      "comma-dangle": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "semi": "off",
      "eol-last": "off",
      "no-trailing-spaces": "off",
      "jsx-quotes": "off",
      "react/self-closing-comp": "off",
      "react-native/no-inline-styles": "off",
    }
  },
]);
