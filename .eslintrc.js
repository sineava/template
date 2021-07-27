module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'alloy', 'alloy/vue'],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'vue/max-attributes-per-line': [2, {
      'singleline': {
        'max': 3,
        'allowFirstLine': true
      },
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'eol-last': 2,
    'indent': [2, 2],
    'no-unused-vars': 2,
    'no-constant-condition': 2,
    'no-duplicate-case': 2,
    'no-else-return': 2,
    'no-empty': 2,
    'no-labels': 2,
    'no-func-assign': 2,
    'no-multiple-empty-lines': [1, {'max': 1}],
    'no-multi-spaces': 2,
    'semi': [2, 'never'],
    'no-trailing-spaces': 2,
    'multiline-comment-style': [2, 'starred-block'],
    'vue/v-on-event-hyphenation': 'off',
    'radix': 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/no-lone-template': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-deprecated-v-on-native-modifier': 'off',
    'vue/no-v-model-argument': 'off',
    'max-params': 'off',
    'no-param-reassign': 'off',
    'vue/no-deprecated-dollar-listeners-api': 'off',
    'no-unused-expressions': 'off',
    'no-new': 'off',
    'vue/no-deprecated-filter': 'off',
    'complexity': 'off',
    'vue/no-duplicate-attributes': 'off',
    'vue/no-deprecated-functional-template': 'off'
  }
}
