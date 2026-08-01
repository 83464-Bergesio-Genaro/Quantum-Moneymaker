import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
    },

    rules: {
      "no-unused-vars": "warn",

      "no-undef": "error",

      eqeqeq: "error",

      "react/jsx-key": "error",

      "react-hooks/rules-of-hooks": "error",

      "react-hooks/exhaustive-deps": "warn",
    },
  },
];