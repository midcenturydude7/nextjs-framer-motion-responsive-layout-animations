export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    animation: {
      tilt: "tilt 10s infinite linear",
    },
    keyframes: {
      tilt: {
        "0%, 50%, 100%": {
          transform: "rotate(0deg)",
        },
        "25%": {
          transform: "rotate(1.5deg)",
        },
        "75%": {
          transform: "rotate(-1.5deg)",
        },
      },
    },
  },
};
export const plugins = [];
