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
		'indent': ['error', 4],
		'no-mixed-spaces-and-tabs': 'off',
		'vue/script-indent': ['error', 4, { 'baseIndent': 4 }],
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaFeatures: {
			legacyDecorators: true
		}
	}
}
