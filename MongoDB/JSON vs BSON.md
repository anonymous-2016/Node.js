# JSON  vs  BSON

## JSON {key : "value"}
// 数字除外

```json
Person{
    name : "xgqfrms",
    age : 23,
    gender : "male",
    title : "CEO"
}

``` 


BSON {"key":"value"} 
// 数字除外

```bson
Person{
    "name" : "xgqfrms",
    "age" : 23,
    "gender" : "male",
    "title" : "CEO"
}

``` 



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
