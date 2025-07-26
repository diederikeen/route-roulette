import { FlatCompat } from "@eslint/eslintrc";
import { default as recommendedConfig } from "@eslint/eslintrc/conf/eslint-recommended.js";

const compat = new FlatCompat({
  baseDirectory: new URL(".", import.meta.url).pathname,
  recommendedConfig,
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ),
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
      },
    },
  },
];
