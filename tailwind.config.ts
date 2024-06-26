import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-moderate-blue": "hsl(238, 40%, 52%)",
        "primary-soft-red": "hsl(358, 79%, 66%)",
        "primary-light-grayish blue": "hsl(239, 57%, 85%)",
        "primary-pale-red": "hsl(357, 100%, 86%)",
        "netual-dark-blue": "hsl(212, 24%, 26%)",
        "netual-grayish-blue": "hsl(211, 10%, 45%)",
        "netual-light-gray": "hsl(223, 19%, 93%)",
        "netual-very-light-gray": "hsl(228, 33%, 97%)",
        "netual-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
