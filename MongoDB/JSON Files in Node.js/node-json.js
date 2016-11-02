// 在这里，请注意，如果值是JSON对象本身，上述代码可能会给您一个错误。
// 因此，建议检查值是否为JSON。
// 一旦你确定这一点，你可以继续处理JSON对象。



var exjson = {'key1':'abc', 'key2':'xyz', 'key3':'333'};

// exjson["keyNew"] = 'add a key like Array["keyNew"]';
// exjson.keyNew = 'add a key like Object.keyNew';

for(var exKey in exjson) {
    console.log("key = " + exKey);
    console.log("typeof = " + typeof(exKey));
    console.log("value = " + exjson[exKey] + "\n");
}
// string ???

console.log("****************************\n");

// var json = { key1: "abc", key2: "xyz", key3: 333, keyNew: ''};
var json = { key1: "abc", key2: "xyz", key3: 333};

json['keyNew'] = 'json add a key like Array["keyNew"]';

for(var key in json) {
    console.log("key = " + key);
    console.log("typeof = " + typeof(key));
    console.log("value = " + json[key] + "\n");
}
// string ???

console.log("****************************\n");

var json = { 'key1': 111, key2: 222, "key3": 333};

json.keyNew = 'json add a key like Object.keyNew';

console.log("json = " + json);

for(var key in json) {
    console.log("key = " + key);
    console.log("typeof = " + typeof(key));
    console.log("value = " + json[key] + "\n");
    // json[key] === json[0-n]
    // json["key"] === json.key
}

// string ???