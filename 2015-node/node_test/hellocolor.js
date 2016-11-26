/*node.js test*/
/*
*2015.9.15*
https://github.com/medikoo/cli-color
*/
var xcolor = require('cli-color');

function helloworld(){
	console.log(xcolor.red('Hello World!'));
	console.log(xcolor.green('Hello World!'));
	console.log(xcolor.blue('Hello World!'));
	console.log('************************************');
}
function myColor(){
	var clc = require('cli-color');

//Output colored text:
console.log(clc.red('Text in red'));
console.log('************************************');

//Styles can be mixed:
console.log(clc.red.bgWhite.underline('Underlined red text on white background.'));
console.log(clc.green.bgWhite.underline('Underlined red text on white background.'));
console.log(clc.blue.bgWhite.underline('Underlined red text on white background.'));
console.log('************************************');

console.log(clc.white.bgRed(' white text on red background.'));
console.log(clc.white.bgGreen(' white text on green background.'));
console.log(clc.white.bgBlue(' white text on blue background.'));
console.log('************************************');

//Styled text can be mixed with unstyled:
console.log(clc.red('red') + ' plain ' + clc.blue('blue'));
console.log('************************************');

//Styled text can be nested:
console.log(clc.red('red ' + clc.blue('blue') + ' red'));
console.log('************************************');

//Best way is to predefine needed stylings and then use it:
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;
console.log(error('Error!'));
console.log(warn('Warning'));
console.log(notice('Notice'));
console.log('************************************');
}
function Xterm(){
	var xcolor = require('cli-color');
	var msg = xcolor.xterm(232).bgXterm(231);
console.log(msg('black text on dark white background'));
console.log('************************************');

    var msg2 = xcolor.xterm(46).bgXterm(226);
console.log(msg2('green text on yellow background'));
console.log('************************************');

    var msg3 = xcolor.greenBright.bgMagentaBright;
console.log(msg3('***greenBright text on MagentaBright background***'));
console.log('************************************');
}

//execute
helloworld();
myColor();
Xterm();
