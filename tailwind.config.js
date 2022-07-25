/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // emiatt a beállítás miatt lehet signature-ra hivatkozni fontFamily beállításnál
    fontFamily: {
      signature: ['Great Vibes'], 
    }
  },
  plugins: [],
}
