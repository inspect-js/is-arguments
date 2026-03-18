import ljharbConfig from '@ljharb/eslint-config/flat';

export default [
	...ljharbConfig,
	{
		rules: {
			'id-length': ['error', { max: 25, min: 1 }],
		},
	},
];
