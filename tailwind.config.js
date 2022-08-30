/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sun": "url('https://unsplash.com/photos/bWtd1ZyEy6w/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fHdlYXRoZXJ8ZW58MHx8fHwxNjYxNTY4MTEy&force=true')"
      }
    },
  },
  plugins: [],
}
