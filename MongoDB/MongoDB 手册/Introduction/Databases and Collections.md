# [Databases and Collections](https://docs.mongodb.com/manual/core/databases-and-collections/)

## Databases

In MongoDB, databases hold collections of documents.
在MongoDB中，数据库保存文档集合。

use myDB

### Create a Database
// 如果数据库不存在，MongoDB创建数据库，当你第一次存储数据至该集合时。

use myNewDB
db.myNewCollection1.insert( { x: 1 } )

## Collections

MongoDB stores documents in collections. Collections are analogous to tables in relational databases.
MongoDB存储文件在集合中。集合类似于在关系数据库中的表。

### Create a Collection
// 如果一个集合不存在，MongoDB创建集合，当你第一次存储数据至该集合时。


db.myNewCollection2.insert( { x: 1 } )
db.myNewCollection3.createIndex( { y: 1 } )


### Explicit Creation (明确创建)

[db.createCollection()](https://docs.mongodb.com/manual/reference/method/db.createCollection/#db.createCollection)

### Document Validation 
// New in version 3.2.

[Document Validation](https://docs.mongodb.com/manual/core/document-validation/)

By default, a collection does not require its documents to have the same schema; i.e. the documents in a single collection do not need to have the same set of fields and the data type for a field can differ across documents within a collection.

Starting in MongoDB 3.2, however, you can enforce document validation rules for a collection during update and insert operations. See Document Validation for details.

### Modifying Document Structure

To change the structure of the documents in a collection, such as add new fields, remove existing fields, or change the field values to a new type, update the documents to the new structure.




*******************************************


[db.collection.createIndex()](https://docs.mongodb.com/manual/reference/method/db.collection.createIndex/#db-collection-createindex)

[db.collection.dropIndex()](https://docs.mongodb.com/manual/reference/method/db.collection.dropIndex/#db.collection.dropIndex)

[Compound Indexes](https://docs.mongodb.com/manual/core/index-compound/#index-type-compound)

[Hashed Indexes](https://docs.mongodb.com/manual/core/index-hashed/#index-type-hashed)

***************************************
