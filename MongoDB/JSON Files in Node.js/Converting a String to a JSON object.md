# 将字符串转换为JSON对象


> The code associated with using the built-in global JSON Object for parsing a string containing JSON data is shown below:

```js
var string = "{'key':'value'}";

var obj = JSON.parse(string);

console.log(obj.key);

``` 

作为替代，也可以使用字符串上可用的 trim()方法。
这在一种情况下工作,当有一些偶然在JSON字符串中有任何额外的空间。


```js
var string = "{'key':'value'}";

var obj = JSON.parse(trim(string));

console.log(obj.key);

``` 