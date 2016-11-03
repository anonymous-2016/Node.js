# faker.js
> 生成大量的虚假上下文(语境)数据

[npm](https://www.npmjs.com/package/faker.js)

[API](http://marak.github.io/faker.js/)

## node.js
```bash
$ npm install faker.js
// error 404 (2.0)

$ npm install faker
// OK (3.1.0)

``` 


## browser

```html
<script src = "faker.js" type = "text/javascript"></script>
<script>
    var randomName = faker.name.findName(); 
    // Caitlyn Kerluke
    var randomEmail = faker.internet.email(); 
    // Rusty@arne.info
    var randomCard = faker.helpers.createCard(); 
    // random contact card containing many properties
</script>
``` 

## Localization

As of version v2.0.0 faker.js supports 27 different language definition packs.

The default language is set to English.

Setting a new locale is simple:

// sets locale to de 
faker.locale = "zh_CN";
Read further for complete list of locales.