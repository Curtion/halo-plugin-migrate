/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    '@unocss'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@unocss/enforce-class-compile': 1
  }
}
