var exjson = {'key1':'abc', 'key2':'xyz', 'key3':'333'};

for(var exKey in exjson) {
    console.log("key = " + exKey);
    console.log("typeof = " + typeof(exKey));
    console.log("value = " + exjson[exKey] + "\n");
}
// string ???

console.log("****************************\n");

var json = { key1: "abc", key2: "xyz", key3: 333};

for(var key in json) {
    console.log("key = " + key);
    console.log("typeof = " + typeof(key));
    console.log("value = " + json[key] + "\n");
}
// string ???

console.log("****************************\n");

var json = { key1: 111, key2: 222, key3: 333};

for(var key in json) {
    console.log("key = " + key);
    console.log("typeof = " + typeof(key));
    console.log("value = " + json[key] + "\n");
}

// string ???