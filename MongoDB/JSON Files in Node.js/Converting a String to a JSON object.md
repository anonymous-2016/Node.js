# 将字符串转换为JSON对象


> 使用内置的全局JSON对象来解析包含JSON数据的字符串的代码如下所示:

```js
// var string = "{'key1': 'abc', key2: 'xyz, 'key3': '333', key4: 444}";
// error: 字符串，格式不标准


var string = '{"key1":"abc","key2":"xyz","key3":"333","key4":444}';

var obj = JSON.parse(string);

console.log(obj);

``` 

作为替代，也可以使用字符串上可用的 trim()方法。
这在一种情况下工作,当有一些偶然在JSON字符串中有任何额外的空间。


```js
// var string = "{'key1': 'abc', key2: 'xyz, 'key3': '333', key4: 444}";
// error: 字符串，格式不标准


var string = '{"key1":"abc","key2":"xyz","key3":"333","key4":444}';

var obj = JSON.parse(string.trim());

console.log(obj);

``` 