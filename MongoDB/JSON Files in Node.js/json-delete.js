//从JSON对象中删除元素

//您可以使用“delete”关键字从特定JSON对象中选择元素，如下面的示例所述：


var json = { 'key1': 111, key2: 222, "key3": 333};

for(var key in json) {
    console.log("key = " + key);
    console.log("typeof = " + typeof(key));
    console.log("value = " + json[key] + "\n");
    // json[key] === json[0-n]
    // json["key"] === json.key
}

console.log("****************************\n");

delete json['key3'];
delete json.key2;

delete json[0];
console.log("json[0] = " + json[0]);
// undefined


for(var key in json) {
    console.log("key = " + key);
    console.log("typeof = " + typeof(key));
    console.log("value = " + json[key] + "\n");
    // json[key] === json[0-n]
    // json["key"] === json.key
}