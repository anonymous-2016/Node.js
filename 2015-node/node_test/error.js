/*node.js test*/
var clc = require('cli-color');
function xerror(){
console.log(clc.green.bgWhite('*********************************'));
console.log(('*************************************************'));
var n = 3;
var b = 0;
try{
var c = n/b;
if(c==Infinity)
throw new Error('this error is caused by invalid operation 2');
}catch (err){
console.log(err);
}

console.log(('*************************************************'));
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.info('Application is running');
logger.warn('Module cannot be loaded');
logger.error('Saved data was error');
logger.fatal('Server could not process');
logger.debug("Some debug messages");

console.log(('*************************************************'));
//You could change the display text (default) by application category. 
var log4js = require('log4js');
var logger = log4js.getLogger('myapplication');
//You could change the display text (myapplication) by application category. 

logger.info('Application is running');
logger.warn('Module cannot be loaded');
logger.error('Saved data was error');
logger.fatal('Server could not process');
logger.debug("Some debug messages");


console.log(('*************************************************'));

var log4js = require('log4js');
log4js.loadAppender('file');
console.log(('***********相对路径*************'));
log4js.addAppender(log4js.appenders.file('mylog.log'),
'myapplication');
var logger = log4js.getLogger('myapplication');
logger.info('Application is running');
logger.warn('Module cannot be loaded.');
logger.error('Saved data was error');
logger.fatal('Server could not process');
logger.debug("Some debug messages");
}


//execute
xerror();
/*
//Error Handling and Logging
*/