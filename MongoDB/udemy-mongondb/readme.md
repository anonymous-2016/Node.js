# mongoose

http://mongoosejs.com/docs/guide.html

http://mongoosejs.com/docs/index.html


```sh
$ npm i --save express
$ npm i --save mongoose
$ npm i --save body-parser

$ npm i --save express mongoose body-parser
``` 

[mongoosejs-essentials](https://www.udemy.com/mongoosejs-essentials/learn/v4/t/lecture/4649838)

## Administrator
$ net start MongoDB
$ mongod

## --golbal path 
Control Panel\System and Security\System> A s s > Advanced >Environment Variables

path H:\MongoDB\Server\3.2\bin


## Administrator
// 启动服务
$ net start MongoDB
// 开启实例
$ mongod

## open DB
// 链接DB
$ mongo
// 使用 DB
> use db_name
// 操作 DB



show dbs


//MongoDB 中默认的数据库为 test，如果你没有创建新的数据库，集合将存放在 test 数据库中。

use DATABASE_NAME

db.dropDatabase()

db.COLLECTION_NAME.insert(document)

db.COLLECTION_NAME.update()
//update() 方法用于更新已存在的文档。

db.COLLECTION_NAME.save()
//save() 方法通过传入的文档来替换已有文档。

db.COLLECTION_NAME.remove()

db.COLLECTION_NAME.find()
//find() 方法以非结构化的方式来显示所有文档。

db.COLLECTION_NAME.find().pretty()
//pretty() 方法以格式化的方式来显示所有文档。

db.COLLECTION_NAME.

## MongoDB中条件操作符:

(>) 大于 - $gt
(<) 小于 - $lt
(>=) 大于等于 - $gte
(<= ) 小于等于 - $lte

***********************************************************************************



**************************************
[Databases and Collections](https://docs.mongodb.com/manual/core/databases-and-collections/)

MongoDB stores 
BSON documents( i.e. data records) in collections;
the collections in databases.


***************************************







************************************************


[How does MongoDB address SQL or Query injection?](https://docs.mongodb.com/manual/faq/fundamentals/#faq-dollar-sign-escaping)

# 如何MongoDB的地址SQL或查询注入？

## BSON
[BSON Types](https://docs.mongodb.com/manual/reference/bson-types/)

[MongoDB Drivers and Client Libraries](https://docs.mongodb.com/manual/applications/drivers/)

## JavaScript

NOTE You can disable all server-side execution of JavaScript, by passing the --noscripting option on the command line or setting security.javascriptEnabled in a configuration file.

注意 你可以禁用所有服务器端的JavaScript执行，通过传递--noscripting 选项在命令行中或设置security.javascriptEnabled 在一个配置文件中。


[security.javascriptEnabled](https://docs.mongodb.com/manual/reference/configuration-options/#security.javascriptEnabled)

All of the following MongoDB operations permit you to run arbitrary JavaScript expressions directly on the server:

以下所有的MongoDB操作允许您在服务器直接上运行任意JavaScript表达式：

$where
mapReduce
group

You must exercise care in these cases to prevent users from submitting malicious JavaScript.

在这些情况下你必须小心，以防止用户提交恶意的JavaScript。


Fortunately, you can express most queries in MongoDB without JavaScript and for queries that require JavaScript, you can mix JavaScript and non-JavaScript in a single query. Place all the user-supplied fields directly in a BSON field and pass JavaScript code to the $where field.

If you need to pass user-supplied values in a $where clause, you may escape these values with the CodeWScope mechanism. When you set user-submitted values as variables in the scope document, you can avoid evaluating them on the database server.




**********************************************************************************


## Top 5 Considerations When Evaluating NoSQL Databases

https://webassets.mongodb.com/_com_assets/collateral/10gen_Top_5_NoSQL_Considerations.pdf?utm_campaign=Int_OC_Top%205%20Considerations%20When%20Evaluating%20NoSQL%20DB%20White%20Paper_WW%20-%20Autoresponder&utm_medium=email&utm_source=Eloqua


