module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'@vue/standard'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		'no-trailing-spaces': 'off',
		'object-curly-spacing': 'error',
		'no-return-assign': 'off',
		'indent': ['error', 2],
		'vue/script-indent': ['error', 2, { 'baseIndent': 0 }],
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaFeatures: {
			legacyDecorators: true
		}
	}
}
