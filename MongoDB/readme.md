# MongoDB Tutorials

https://docs.mongodb.com/manual/

https://docs.mongodb.com/manual/#getting-started


https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

http://www.runoob.com/mongodb/mongodb-intro.html

http://www.runoob.com/mongodb/mongodb-window-install.html




```sh

# Create directories.

mkdir c:\data\db
mkdir c:\data\log

#  Create a configuration file.

systemLog:
    destination: file
    path: c:\data\log\mongod.log
storage:
    dbPath: c:\data\db

#  Create the MongoDB service.

sc.exe create MongoDB binPath= "\"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe\" --service --config=\"C:\Program Files\MongoDB\Server\3.2\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"

#  Start the MongoDB service

net start MongoDB

# Stop or remove the MongoDB service as needed.

net stop MongoDB

sc.exe delete MongoDB




``` 


> ?