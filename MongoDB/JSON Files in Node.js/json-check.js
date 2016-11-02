// 检查JSON对象是否具有特定 key

var exjson = {'key':'abc', "key2": "xyz", key3: 333};

if(exjson.hasOwnProperty('key2')){
    //define here
    console.log("value.key = " + exjson.key2 + "\n");
    // json[key] === json[0-n]
    // json["key"] === json.key
}

if(exjson.hasOwnProperty("key3")){
    //define here
    console.log("value['key'] = " + exjson["key3"] + "\n");
    console.log("value.key = " + exjson.key3 + "\n");
    console.log("value[2] = " + exjson[2] + "\n");
    // undefined
    let x = 2;
    console.log("value[x = 2] = " + exjson[x] + "\n");
    // undefined
    // console.log("value[key3] = " + exjson[key3] + "\n");
    // json[key] === json[0-n]
    // json["key"] === json.key
}


for(var key in exjson) {
    console.log("key = " + key);
    console.log("typeof = " + typeof(key));
    console.log("value = " + exjson[key] + "\n");
    // json[key] === json[0-n]
    // json["key"] === json.key
    console.log("value['key3'] = " + exjson["key3"] + "\n");
    console.log("value.key3 = " + exjson.key3 + "\n");
    // console.log("value[key3] = " + exjson[key3] + "\n");
    console.log("value[2] = " + exjson[2] + "\n");
    // undefined
}
