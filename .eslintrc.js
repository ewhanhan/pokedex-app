module.exports = {
  root: true,
  env: { node: true },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    // Usages of `{}` and `object` look fine in this repo
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
          object: false,
        },
      },
    ],

    // Already handled by typescript
    "@typescript-eslint/no-unused-vars": "off",

    // I don't like it
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // Interface/type delimiter styles, prefer comma
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
        multilineDetection: "brackets",
      },
    ],

    // Semicolon
    semi: "off",
    "@typescript-eslint/semi": ["error"],

    // Trailing comma
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
        enums: "always-multiline",
        generics: "always-multiline",
        tuples: "always-multiline",
      },
    ],

    // Quotes
    quotes: "off",
    "@typescript-eslint/quotes": ["error"],

    // Spacing around type annotations
    "@typescript-eslint/type-annotation-spacing": ["error"],

    // Curly spacing
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],

    // Spacing in template curlies
    // 'template-curly-spacing': ['error', 'always'],

    //React
    "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
  },
};
