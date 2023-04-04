import swup from '/deps/Swup.cjs';
import SwupSlideTheme from '/deps/SwupSlideTheme.min.js';

console.log("initialising!")

const transitions = new swup({
  plugins: [new SwupSlideTheme()], 
})

setInterval(() => {
  console.log("interval!")
}, 1000)