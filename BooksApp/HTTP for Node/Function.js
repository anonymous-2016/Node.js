// Function

// 函数是可以被其他代码或其自身调用的代码片段，或者是引用该函数的变量。
// 当函数被调用时，参数被传递给函数作为输入，函数可以选择性地返回一个输出。
// JavaScript中的函数也是一个对象。

// 函数名是作为函数声明或函数表达式的一部分声明的标识符。
// 函数的作用域取决于函数名是一个声明还是表达式。

// 立即调用函数表达式(IIFE)是一个函数，在函数被加载到浏览器的编译器之后直接调用;
// 识别IIFE的方法是通过在函数声明的末尾定位额外的左和右括号。
// 这种类型的函数表达式有很多优点，但是这超出了课程的范围。???
// https://en.wikipedia.org/wiki/Immediately-invoked_function_expression

/*
anonymous function 匿名函数
named function 命名函数

inner function 内部函数
outer function 外部函数

recursive function 递归函数

Immediately Invoked Function Expressions(IIFE) 立即调用函数表达式(IIFE)

(function () { … })();
(function () { … }()); //道格拉斯·克罗克福德的风格
*/



/*
var x = function (){
    console.log("匿名函数");
}
x();
*/

let af = () => {
    console.log("匿名函数");
}
af();


/*
function foo() {
    console.log("命名函数");
}
foo();
*/
let foo = () => {
    console.log("命名函数");
}
foo();


/*
function addSquares(a,b) {
    function square(x) {
        console.log("内部函数");
        return x * x;
    }
    console.log("外部函数");
    return square(a) + square(b);
}
addSquares(1,2);
*/

let addSquares = (a, b) => {
    let square = (x) => {
        console.log("内部函数" + `\t${x}`);
        return x * x;
    }
    console.log("外部函数");
    return square(a) + square(b);
}
addSquares(1,2);


/*
function loop(x) {
    if(x >= 10)
        return;
    loop(x + 1);
    console.log("递归函数");
}
loop(3);
*/

let loop = (x) => {
    if(x >= 10){
         console.log("递归函数: return!");
         return;
    }
    console.log("递归函数"+ `\t\t${x}`);
    loop(x + 1);
}
loop(7);



/*
function foo() {
    console.log("立即调用函数表达式");
}();

// Error: https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
*/



(function foo1() {
    console.log("立即调用函数表达式" + `\t道格拉斯·克罗克福德的风格`);
}());
//道格拉斯·克罗克福德的风格


(function foo2() {
    console.log("立即调用函数表达式" + `\tjs风格`);
})();



/*
let foo1 = (() => {
    console.log("立即调用函数表达式");
}());
*/
//Error


let foo2 = (() => {
    console.log("立即调用函数表达式" + `\tES6 js风格`);
})();
//OK