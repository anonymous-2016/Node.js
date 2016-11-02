# Traversing through each element within a JSON object

```js
var exjson = {'key':'abc', 'key2':'xyz'};

for(var exKey in exjson) {
    console.log("key = " + exKey + "\n");
    console.log("value = " + exjson[exKey]);
}

for(var exKey in exjson) {
    console.log("key = " + exKey + "\n");
    console.log("value = " + exjson.exKey);
}

``` 
