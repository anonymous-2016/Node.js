# [Capped Collections (封顶集合)](https://docs.mongodb.com/manual/core/capped-collections/)


Capped collections are fixed-size collections that support high-throughput operations that insert and retrieve documents based on insertion order. Capped collections work in a way similar to circular buffers: once a collection fills its allocated space, it makes room for new documents by overwriting the oldest documents in the collection.


封顶集合是固定大小的集合, 支持高通量操作, 其插入和检索文件是基于插入顺序。
封顶集合的方式工作，类似于循环缓冲区。
一旦集合填充满其分配的空间，它将通过覆盖集合中的旧的文档，为新的文档腾出空间。

## Create a Capped Collection 
// 创建一个封顶集合

db.createCollection( "log", { capped: true, size: 100000 } )

db.createCollection("log", { capped : true, size : 5242880, max : 5000 } )

## Query a Capped Collection

db.cappedCollection.find().sort( { $natural: -1 } )

## Check if a Collection is Capped

db.collection.isCapped()

## Convert a Collection to Capped

db.runCommand({"convertToCapped": "mycoll", size: 100000});

WARNING:  
This command obtains a global write lock and will block other operations until it has completed.
警告 : 此命令获得一个全局写锁，直到它已完成将阻止其他操作。

## Automatically Remove Data After a Specified Period of Time
自动删除数据,在一段指定的时间之后


****************************************