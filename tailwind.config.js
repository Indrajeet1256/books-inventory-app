import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				InterTight: ["Inter Tight", ...fontFamily.sans],
			},

			gridTemplateColumns: {
				base: "repeat(auto-fit,minmax(300px, 1fr))",
			},
			container: {
				center: true,
				padding: "2rem",
			},
		},
	},
	plugins: [],
};
