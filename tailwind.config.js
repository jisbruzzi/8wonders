module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),],
    mode: "jit",
    purge: ["./app/**/*.{ts,tsx}"],
  }