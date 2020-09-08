module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'kentcdodds',
		'kentcdodds/import',
		'kentcdodds/jest',
		// 'kentcdodds/react',
		'prettier/react',
		'eslint-config-prettier',
	],
	plugins: [
		// 'babel',
		'react',
	],
	rules: {
		// https://github.com/benmosher/eslint-plugin-import/issues/1446
		'import/named': 'off',
		'valid-typeof': 'error',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
	},
	settings: { 'import/resolver': 'node' },
	overrides: [
		{
			files: ['**/src/**'],
			settings: { 'import/resolver': 'webpack' },
		},
	],
	parserOptions: {
		ecmaVersion: '2019',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
};
