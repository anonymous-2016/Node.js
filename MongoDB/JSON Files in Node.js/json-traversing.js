// 遍历JSON对象中的每个元素

var json = { key1: "abc", key2: "xyz", key3: 333};

json['keyNew'] = 'json add a key like Array["keyNew"]';

for(var key in json) {
    console.log("key = " + key);
    console.log("typeof = " + typeof(key));
    console.log("value = " + json[key] + "\n");
    // json[key] === json[0-n]
    // json["key"] === json.key
}


// 注意，如果值是JSON对象本身，上述代码可能会给您一个错误。
// 因此，建议检查值是否为JSON。

var json = { key1: "abc", key2: "xyz", key3: 333};

json['keyNew'] = '{keyx: "error-key"}';

for(var key in json) {
    console.log("key = " + key);
    console.log("typeof = " + typeof(key));
    console.log("value = " + json[key] + "\n");
    // json[key] === json[0-n]
    // json["key"] === json.key
}