// 将字符串转换为JSON对象

// var string = "{'key1': 'abc', key2: 'xyz, 'key3': '333', key4: 444}";
// var string2 = "{'key1':'abc', 'key2':'xyz', 'key3':'333', 'key4':'444'}";
// VM1476:1 Uncaught SyntaxError: Unexpected token ' in JSON at position 1
// error: 字符串，格式不标准

var string = '{"key1":"abc","key2":"xyz","key3":"333","key4":444}';

var obj = JSON.parse(string);

console.log(obj);

// console.log(JSON.parse(string));

//作为替代，可以在字符串上使用 trim()方法。
//在这种情况下工作,当有任何多余的空格在JSON字符串中时。

// trim() 方法会删除一个字符串两端的空白字符。
// 字符串里的空格包括所有的空格字符 (space, tab, no-break space 等)以及所有的行结束符（如 LF，CR）。
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

// var string = "{'key1': 'abc', key2: 'xyz, 'key3': '333', key4: 444}";
// error: 字符串，格式不标准
var string = '{"key1":"abc","key2":"xyz","key3":"333","key4":444}';

var obj = JSON.parse(string.trim());

console.log(obj);


//trim（）方法从字符串的两端删除空格。
//在这个上下文中的空格是所有空格字符（空格，制表符，空格等）和所有行终止符（LF，CR等）。

//兼容旧环境
//如果 trim() 不存在，可以在所有代码前执行下面代码

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}