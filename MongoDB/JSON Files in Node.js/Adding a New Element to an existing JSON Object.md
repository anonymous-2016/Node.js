# 向现有JSON对象添加新元素


```js
var exjson = {'key1':'value1', key2: 'value2', key3: 333};

//使用对象(.)的方式，添加 key
exjson.keyNew = 'add a key like Object.keyNew';


console.log("****************************\n");


var exjson = {'key1':'value1', key2: 'value2', key3: 333};

//使用数组(string引号)的方式，添加 key
exjson["keyNew"] = 'add a key like Array["keyNew"]';

``` 

