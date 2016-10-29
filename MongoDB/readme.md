
*****************************************************************

# Configure a Windows Service for MongoDB Community Edition

##  step 1: Open an Administrator command prompt


##  step 2: Create directories.


mkdir c:\data\db
mkdir c:\data\log


##  step 3: Create a configuration file

[configuration options](https://docs.mongodb.com/manual/reference/configuration-options/)

 > create a file at ???(mongod.cfg / mongod.conf)

H:\Program Files\MongoDB\Server\3.2\mongod.cfg 

```yaml
systemLog:
    destination: file
    path: h:\data\log\mongod.log
storage:
    dbPath: h:\data\db
``` 


##  step 4: Install the MongoDB service.


"H:\MongoDB\Server\3.2\bin\mongod.exe" --config "H:\MongoDB\Server\3.2\mongod.cfg" --install

<p>
    To use an alternate dbpath, specify the path in the configuration file 

    (e.g. C:\mongodb\mongod.cfg) or on the command line with the --dbpath option.

    If needed, you can install services for multiple instances of mongod.exe or mongos.exe. 

    Install each service with a unique --serviceName and --serviceDisplayName. 

    Use multiple instances only when sufficient system resources exist and your system design requires it.
</p>

## step 5: Start the MongoDB service.

net start MongoDB


## step 6: Stop or remove the MongoDB service as needed.

net stop MongoDB

> To remove the MongoDB service use the following command:

"H:\MongoDB\Server\3.2\bin\mongod.exe" --remove

******************************************************************

http://www.runoob.com/mongodb/mongodb-window-install.html


# test


<h1>
    # Open an command prompt.
    
    Windows 7 / Vista / Server 2008 (and R2) Press <span>Win + R</span>, 
    then type <mark>cmd</mark>, then press <mark>Ctrl + Shift + Enter</mark>.

    Shift + right click (在当前目录打开cmd)

    Windows 10 Press <mark>Win + X</mark>, then press <mark> A</mark>.
    Execute the remaining steps from the Administrator Windows PowerShell.
</h1>

<p>
    MongoDB后台管理 Shell  
    如果你需要进入MongoDB后台管理，你需要先打开mongodb装目录的下的bin目录，然后执行mongo.exe文件，  MongoDB Shell是MongoDB自带的交互式Javascript shell,用来对MongoDB进行操作和管理的交互式环境。  
    当你进入mongoDB后台后，它默认会链接到 test 文档（数据库）：  
</p>

1. Administrator

net start MongoDB

2. H:\MongoDB\Server\3.2\bin\

mongo

> --golbal path ??? 没有必要吗？

3.  2 + 2


4. write & find

```code
$ db.xgqfrms.insert({x:10})

//WriteResult({ "nInserted" : 1 })

$ db.xgqfrms.find()

//{ "_id" : ObjectId("5604ff74a274a611b0c990aa"), "x" : 10 }

``` 

5. 
net stop MongoDB



=======================================================================


# 使用说明：

0》
mongodb 安装在( D:\DB\mongoDB  )目录

1》
修改 folder_name (文件夹名 DataBase)

2》
设置路径  ./ (与安装的mongodb在同一个目录下) ************  当前目录 ./ ***************


3》
自定义start.bat 文件，也在同一目录下。

start.bat 文件内容：    mongod --dbpath ./folder name

# startMongoDB.bat

## 相对路径

```bat
mongod --dbpath ./folder_name
``` 

## 绝对路径 ??? 


```bat
"H:\MongoDB\Server\3.2\bin\mongod.exe" --dbpath "H:\data\db\nodejs"
``` 

net start MongoDB
net stop MongoDB


*********************************************************

db.CollectionName.find()

db.CollectionName.find().pretty()


# [mongo Shell Methods](https://docs.mongodb.com/manual/reference/method/)

Collection
Cursor
Database
Query Plan Cache
Bulk Write Operation
User Management
Role Management
Replication
Sharding
Subprocess
Constructors
Connection
Native


# [Database Commands](https://docs.mongodb.com/manual/reference/command/)


# [Operators](https://docs.mongodb.com/manual/reference/operator/)

