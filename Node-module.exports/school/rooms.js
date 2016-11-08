let student = require('./students');
let teacher = require('./teachers');


module.exports.room_add = (teacherName, students) => {
    teacher.teacher_add(teacherName);
    students.forEach((item, index) => {
        student.student_add(item);
    });
    console.log("room is OK!\n");
}


/*
var student = require('./students');
var teacher = require('./teachers');

function rooms_add(teacherName, students){
    teacher.teachers_add(teacherName);
    students.forEach(function(item, index){
        student.students_add(item);
    });
}

exports.rooms_add = rooms_add;
*/