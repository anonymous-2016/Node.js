# 检查JSON对象是否具有特定 key

```js
var exjson = {'key':'abc', "key2": "xyz", key3: 333};

if(exjson.hasOwnProperty('key2')){
    //define here
    console.log("value = " + exjson["key"] + "\n");
    // json[key] === json[0-n]
    // json["key"] === json.key
}

for(var key in exjson) {
    console.log("key = " + key);
    console.log("typeof = " + typeof(key));
    console.log("value = " + exjson[key] + "\n");
    // json[key] === json[0-n]
    // json["key"] === json.key
}
``` 
