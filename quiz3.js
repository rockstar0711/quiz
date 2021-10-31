'use strict';

const fs = require('fs');

let rawData = fs.readFileSync('student.json');
let students = JSON.parse(rawData);
let sum = 0;
students.forEach(student => {
    sum += student.value    
});

console.log(sum);