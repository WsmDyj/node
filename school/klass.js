var student = require('./student')
var teacher = require('./teacher')

function add (teacherName, students) {
    teacher.add(teacherName)
    students.forEach(item => {
        student.add(item)
    });
}

exports.add = add 
