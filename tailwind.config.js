module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js"
    ],
    plugins: [
        require('flowbite/plugin'),
        require("daisyui")
    ],
    theme: {
        fontFamily: {
          'sans': ['Open Sans', 'sans-serif'],
          'serif': ['Merriweather', 'serif'],
          'mono': ['Inconsolata', 'monospace'],
          'anton': ['Anton', 'sans-serif'],
        },
        // ... konfigurasi lainnya
      },
}
