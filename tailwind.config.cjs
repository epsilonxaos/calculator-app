/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		textColor: {
			"key": "var(--text-key)",
			"clear": "var(--text-clear)",
			"equal": "var(--text-equal)",
		},
		backgroundColor: {
			"main": "var(--bg-main-color)",
			"toggle": "var(--bg-toggle-color)",
			"screen": "var(--bg-screen-color)",
			
			"keyClear": "var(--key-bg-clear)",
			"keyClearShadow": "var(--key-bg-clear-shadow)",

			"keyEqual": "var(--key-bg-equal)",
			"keyEqualShadow": "var(--key-bg-equal-shadow)",

			"keyOperator": "var(--key-operator)",
			"keyOperatorShadow": "var(--key-operator-shadow)",

			"white": "#ffffff"
		},
		boxShadow: {
			"key": "0px 4px 0px var(--key-operator-shadow)",
			"equal": "0px 4px 0px var(--key-bg-equal-shadow)",
			"clear": "0px 4px 0px var(--key-bg-clear-shadow)"
		},
		extend: {
			fontFamily: {
				'league': ['League Spartan', "sans-serif"]
			}
		},
	},
	plugins: [],
}
