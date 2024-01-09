import chalk from 'chalk';
import randomColor from 'randomcolor';

const args = process.argv.slice(2);
const hue = args[0] || 'random';
const luminosity = args[1] || 'random';
const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});
const random = chalk.hex(color);

console.log(
  random(`###############################
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################`),
);
