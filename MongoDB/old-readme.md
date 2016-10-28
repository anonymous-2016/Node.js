# MongoDB Tutorials

https://docs.mongodb.com/manual/

https://docs.mongodb.com/manual/#getting-started


https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

http://www.runoob.com/mongodb/mongodb-intro.html

http://www.runoob.com/mongodb/mongodb-window-install.html

[MongoDB Architecture Guide ](https://webassets.mongodb.com/_com_assets/collateral/MongoDB_Architecture_Guide.pdf?utm_campaign=Int_OC_MongoDB%20Architecture%20Guide%20White%20Paper_WW%20-%20Autoresponder&utm_medium=email&utm_source=Eloqua)


https://docs.mongodb.com/manual/reference/glossary/#term-dbpath

https://docs.mongodb.com/manual/reference/configuration-options/


**********************************************************************

## Set up the MongoDB environment


"H:\MongoDB\Server\3.2\bin\mongod.exe" --dbpath h:\test\mongodb\data

> path include space 

"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --dbpath "h:\test\mongo db data"


##  Start MongoDB

"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe"


##  Connect to MongoDB.

"C:\Program Files\MongoDB\Server\3.2\bin\mongo.exe"


## Begin using MongoDB.

https://docs.mongodb.com/manual/#getting-started



*****************************************************************

# Configure a Windows Service for MongoDB Community Edition

##  step 1: Open an Administrator command prompt


##  step 2: Create directories.


mkdir c:\data\db
mkdir c:\data\log


##  step 3: Create a configuration file

[configuration options](https://docs.mongodb.com/manual/reference/configuration-options/)

 > create a file at ???(mongod.cfg / mongod.conf)

 C:\Program Files\MongoDB\Server\3.2\mongod.cfg 

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
To use an alternate dbpath, specify the path in the configuration file (e.g. C:\mongodb\mongod.cfg) or on the command line with the --dbpath option.

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



















===
===

# Manually Create a Windows Service for MongoDB Community Edition


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

sc.exe create MongoDB binPath= "\"H:\MongoDB\Server\3.2\bin\mongod.exe\" --service --config=\"H:\MongoDB\Server\3.2\mongod.cfg\"" DisplayName= "MongoDB" start= "auto"

#  Start the MongoDB service

net start MongoDB

# Stop or remove the MongoDB service as needed.

net stop MongoDB

sc.exe delete MongoDB



``` 


> ?