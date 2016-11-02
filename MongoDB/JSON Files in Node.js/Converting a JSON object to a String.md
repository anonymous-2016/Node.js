# 将JSON对象转换为字符串

> 您可以选择“stringify”方法将JSON对象转换为字符串数据，如下所示：

```js
var obj = {'key':'value'};

console.log(
    /* define stringify */
    JSON.stringify(obj)
);

var json = { 'key1': "abc", "key2": "xyz", 'key3': '333', key4: 444 };

console.log(JSON.stringify(json));
``` 
