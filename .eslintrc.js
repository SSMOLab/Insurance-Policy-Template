module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  rules: {
    "no-console": 0
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: [],
  //  White list when variable check
  globals: {
    Paged: true
  }
};
