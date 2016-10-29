# [MongoDB Limits and Thresholds(MongoDB的限制和阈值)](https://docs.mongodb.com/manual/reference/limits/)


BSON Documents 
Naming Restrictions 
Namespaces Indexes 
Data Replica Sets Sharded Clusters Operations

BSON文档 命名限制 命名空间 索引 数据 副本集 分片集群 操作

[Naming Restrictions](https://docs.mongodb.com/manual/reference/limits/#naming-restrictions)
# Naming Restrictions]

## Database Name Case Sensitivity(数据库 名称 敏感度)

Since database names are case insensitive in MongoDB, database names cannot differ only by the case of the characters.
在MongoDB中由于数据库名称是不区分大小写，数据库名称不能仅通过字符的大小写不同来区分。

## Restrictions on Database Names for Windows
For MongoDB deployments running on Windows, database names cannot contain any of the following characters:
对于部署运行在Windows上的MongoDB，数据库名称不能含有以下任何字符：
/\. "$*<>:|?

## Restrictions on Database Names for Unix and Linux Systems

For MongoDB deployments running on Unix and Linux systems, database names cannot contain any of the following characters:
对于部署运行在Unix和Linux系统上的MongoDB，数据库名称不能含有以下任何字符：
/\. "$

此外数据库名称不能包含非字符(null character)。


## Length of Database Names

Database names cannot be empty and must have fewer than 64 characters.
数据库名称不能为空，且必须少于64个字符。


## Restriction on Collection Names

Collection names should begin with an underscore or a letter character, and cannot:
集合名称应以下划线或字母字符开头，并且不能：

包含 $.
为空字符串(e.g. "")
包含非字符(null character)
begin with the system. prefix. (Reserved for internal use.)
以system.前缀开始(保留供内部使用)

[db.getCollection()](https://docs.mongodb.com/manual/reference/method/db.getCollection/)

The maximum length of the collection namespace, which includes the database name, the dot (.) separator, and the collection name , is 120 bytes.
集合命名空间的最大长度，其中包括数据库名，点(.)分隔符，以及集合名称 (i.e. <database>.<collection>)，为120个字节

## Restrictions on Field Names

Field names cannot contain dots (i.e. .) or null characters, and they must not start with a dollar sign (i.e. $). 
字段名称不能包含点 (i.e. .)或 非字符，并且不能以美元符号开始 (i.e. $)。


