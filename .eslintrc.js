module.exports = {

	'parser': 'babel-eslint',
	'env': {
		es6: true,
		node: true,
		browser: true
	},
	'parserOptions': {
		ecmaVersion: 6,
		sourceType: 'module',
		allowImportExportEverywhere: false,
		codeFrame: false,
		ecmaFeatures: {
			jsx: true
		}
	},
	'plugins': [
		'react'
	],
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'rules': {
		//enable eslint rules
		'array-bracket-spacing': ['warn', 'never'],
		'comma-dangle': 1,
		'comma-spacing': ['warn', { before: false, after: true }],
		'eol-last': ['error', 'always'],
		'eqeqeq': 'warn',
		'indent': ['warn', 'tab'],
		'jsx-quotes': ['warn', 'prefer-double'],
		'key-spacing': ['warn', {beforeColon: false, afterColon: true}],
		'no-multi-spaces': 'error',
		'no-trailing-spaces': 'warn',
		'semi': ['warn', 'always'],
		'semi-spacing': ['warn', {before: false, after: false}],
		'semi-style': ['warn', 'last'],
		'quotes': ['warn', 'single', {allowTemplateLiterals: true}],
		'quote-props': ['warn', 'consistent-as-needed', {keywords: true, numbers: true, unnecessary: true}],
		'yoda': ['warn', 'never', { exceptRange: true }]

		//override eslint eslint:recommended

		//disable eslint eslint:recommended

		//enablereact rules

		//override react react/recommended

		//disable react react/recommended

	},
	'globals': {
		sails: true,
		User: true
	}

};
