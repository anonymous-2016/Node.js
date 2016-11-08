let rooms = require('./rooms');



let _teacherName = "xgqfrms",
    _students = ["abc", "xyz", "Node.js", "Angular 2", "React 2"];

// rooms.room_add(_teacherName, _students);



// classes is a obeject array 
// 对象数组： [{"key": "value"}, {"key": "value"}, {"key": "value"}]
// let classes = [];

module.exports.school_add = (classes) => {
    classes.forEach((item, index) => {
        let _teacherName = item.teacherName,
            _students = item.students;
        rooms.room_add(_teacherName, _students);
    });
}

// forEach()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach



/*
var rooms = require('./rooms');

module.exports.school_add = function(classes) {
    classes.forEach(function(item, index) {
        let _room = item,
            _teacherName = item.teacherName,
            _students = item.students;

        rooms.rooms_add(_teacherName, _students);
    });
}
*/