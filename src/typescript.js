module.exports = {
  files: "**/*.ts",
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": "warn",
  },
};
