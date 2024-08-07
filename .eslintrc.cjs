module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        },
        "project": [
          './tsconfig.json',
          './tsconfig.app.json'
        ]
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "react-compiler",
        "prettier"
    ],
    "rules": {
      "no-console": 0,
      "@typescript-eslint/no-explicit-any": 2,
      "class-methods-use-this": "off",
      "max-lines-per-function": ["error", 40],
      "react-compiler/react-compiler": "error",
      "prettier/prettier": ["error", { "endOfLine": "auto" }],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    },
    "settings": {
      "react": {
        "version": "detect"
    }
  }
}
