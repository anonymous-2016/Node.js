# [JSON Tutorial](http://www.w3schools.com/js/js_json_intro.asp)


## 以下JSON示例定义employees对象，其中包含3个员工记录的数组：

```json
{"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]}
``` 

```xml
<employees>
    <employee>
        <firstName>John</firstName> <lastName>Doe</lastName>
    </employee>
    <employee>
        <firstName>Anna</firstName> <lastName>Smith</lastName>
    </employee>
    <employee>
        <firstName>Peter</firstName> <lastName>Jones</lastName>
    </employee>
</employees>
``` 

```html
<!DOCTYPE html>
<html>
<head>
    <title>JSON Object Creation in JavaScript</title>
</head>
<body>
    <div>
        <h2>JSON Object Creation in JavaScript</h2>
        <p id="demo"></p>
    </div>
    <!-- js -->
    <script>
        var text = '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"}';
        var obj = JSON.parse(text);
        document.getElementById("demo").innerHTML = obj.name 
        + "<br>" + obj.street 
        + "<br>" + obj.phone;
    </script>
</body>
</html
``` 































***************************************************************
> JSON可以表示为属性和值的哈希（例如对象）或作为值列表（例如对于数组）。

```js
// a JSON array
["nine", "ten", "eleven"]

// a JSON object
{ "nine": 9, "ten": 10, "eleven": 11 }
``` 
***************************************************************