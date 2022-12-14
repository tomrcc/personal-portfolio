module.exports = {
    content: ["./layouts/**/*.html", "./content/**/*.{md,html}", "./component-library/components/**/*.html"],
    theme: {
      extend: {
          fontFamily: {
            // Font import example
            // sans: ["Nunito","sans-serif"],
            // serif: ["Permanent Marker", "serif"]
          },
        colors: {
          'custom-dark-purple': '#191523',
          'custom-light-purple': '#6f5ed5',
          },
        },
    },
    plugins: [],
};
