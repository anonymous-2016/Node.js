# udemy course

https://www.udemy.com/mongodb-essentials/

https://www.udemy.com/mongoosejs-essentials/

*********************************************************************************
*********************************************************************************

//
db.createCollection("cars")

//
show collections

// update
db.cars.update(
    {name: "ford"},
    {$set: 
        {name: "xgqfrms"}
    }
)

// upsert : Blend of update +‎ insert

db.cars.update(
    {name: "ford"},
    {$set: 
        {CEO: "xgqfrms"}
    },
    {$upsert: true}
)

// remove
db.cars.remove({name: "ford"})

// insert

for(var i = 0; i < 10; I++){
    db.things.insert({"x": i})
}

//data types(string , number, date, array, boolean, objectid)


// codes-4
db.student.insert({
    name: 'Joe',
    undergrad: true,
    units: 9,
    classes: ['geography', 'math', 'journalism']
})

db.student.insert({
    name: 'Jane',
    undergrad: false,
    units: 12,
    classes: ['geography', 'science', 'journalism', 'history']
})

db.student.insert({
    name: 'Kevin',
    undergrad: true,
    units: 3,
    classes: ['geography']
})

db.student.insert({
    name: 'Rachel',
    undergrad: false,
    units: 6,
    classes: ['geography', 'history']
})

db.student.find({}).pretty()
//
db.student.find({'name': 'Rachel'}).pretty()
//
db.student.find({units: {$gt: 6}}).pretty()
//
db.student.find({units: {$lt: 7}}).pretty()
//
db.student.find({classes: {$in: ['history']}}).pretty()

db.student.find({classes: {$in: ['history']}}).sort({units: 1}).pretty()

db.student.find({}).sort({units: 1}).pretty()
// ascending 1 升序

db.student.find({}).sort({units: -1}).pretty()
// descending -1 降序

db.student.find({}).sort({name: 1}).limit(2).pretty()


// clear 
cls

*********************************************************************************
*********************************************************************************

http://campus.codeschool.com/courses/the-magical-marvels-of-mongodb/


> db.wands.insert({"name" : "Dream Bender", "creator" : "Foxmond"})

{"name" : "Storm Seeker", "level_required" : 10}


{
  "name": "Dream Bender",
  "creator": "Foxmond",
  "level_required" : 10,
  "price" : 34.9,
  "powers" : [ "Fire" ,"Love" ],
  "damage" : {"magic": 4, "melee" : 2}
}

db.wands.insert(
{
  "name": "Dream Bender",
  "creator": "Foxmond",
  "level_required" : 10,
  "price" : 34.9,
  "powers" : [ "Fire" ,"Love" ],
  "damage" : {"magic": 4, "melee" : 2}
})

db.wands.find({"powers" : "Fire"})

{
  "_id": ObjectId("1234567"),
  "name": "Dream Bender",
  "creator": "Foxmond",
  "level_required": 10,
  "price": 34.9,
  "powers": ["Fire", "Love"],
  "damage": {"magic": 4, "melee": 2}
},
{
  "_id": ObjectId("1234567"),
  "name": "Lightbane",
  "creator": "Elvira",
  "level_required": 4,
  "price": 4.2,
  "powers": ["Light", "Darkness"],
  "damage": {"magic": 10, "melee": 0}
}



> Unique _id
Valid syntax
Size less than 16 MB



INCOMPLETE
You haven't earned this badge quite yet! Complete the following challenges to earn your reward. You could also just continue by clicking the button down on the right, but who doesn't want badges?

Incomplete Challenges

 Dispelling the Database
 Conjuring Collections
 Waving the Wand
 Hey, Have You Heard About Wands?
 Expecto Mongo Wand
 Wand Summonings
 Finding the Perfect Wand
 Bad Magic



*********************************************************************************
*********************************************************************************