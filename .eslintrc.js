module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react"],
    settings: {
        version: 'detect',
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
}