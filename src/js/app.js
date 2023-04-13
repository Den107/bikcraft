import * as flsFunctions from './modules/functions.js'
import { sliderChoose } from './modules/slider.js'
import spoiler from './modules/spoiler.js'

flsFunctions.isWebp()
flsFunctions.burgerMenu()

try {
  sliderChoose()
} catch (error) {
  console.log(error);
}

spoiler()

console.log('dadadada');
