let rooms = require('./rooms');
let schools = require('./school');


let _teacherName = "xgqfrms",
    _students = ["abc", "xyz", "Node.js", "Angular 2", "React 2"];

rooms.room_add(_teacherName, _students);




// classes is a obeject array 
// 对象数组： [{"key": "value"}, {"key": "value"}, {"key": "value"}]

// let _classes_new = ["xgqfrms", ["abc_new", "xyz_new", "Node.js_new", "Angular 2_new", "React 2_new"]];
let _classes_new = [{"xgqfrms" : ["abc_new", "xyz_new", "Node.js_new", "Angular 2_new", "React 2_new"]}];

schools.school_add(_classes_new);
// 对象 ???


/*
var rooms = require('./rooms');

var _teacherName = "xgqfrms",
    _students = ["abc", "xyz", "Node.js", "Angular 2", "React 2"];

rooms.rooms_add(_teacherName, _students);
*/
