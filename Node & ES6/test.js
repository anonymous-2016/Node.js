let schools = require('./school/school');

let _classes = [["xgqfrms"], "abc", "xyz", "Node.js", "Angular 2", "React 2"];

let _A =[
            {
                "xgqfrms" : ["abc", "xyz", "Node.js", "Angular 2", "React 2"]
            }, 
            {
                "webgeeker" : ["abc-new", "xyz-new", "Node.js-new", "Angular 2-new", "React 2-new"]
            }
        ];

/*
let _B ={
            [
                "xgqfrms", ["abc", "xyz", "Node.js", "Angular 2", "React 2"]
            ], 
            [
                "webgeeker" , ["abc-new", "xyz-new", "Node.js-new", "Angular 2-new", "React 2-new"]
            ]
        };
schools.school_add = (_B);
*/

console.log("start...");

schools.school_add = (_classes);

schools.school_add = (_A);

console.log("over...");