## REACT QUIZ

1. Write a react function that takes the following input:
    rooms = [
        { room_type: "Queen", vacant_rooms: 5, price: 100 },
        { room_type: "Double", vacant_rooms: 3, price: 75 },
        { room_type: "Twin", vacant_rooms: 8, price: 60 }
    ];
    And produces the following output:
    <ol><li>Queen, 5, $100</li><li>Double, 3, $75</li><li>Twin, 8, $60</li></ol>


    
    ```Answer
    import React from 'react'

    function quiz() {

        const rooms = [
            { room_type: "Queen", vacant_rooms: 5, price: 100 },
            { room_type: "Double", vacant_rooms: 3, price: 75 },
            { room_type: "Twin", vacant_rooms: 8, price: 60 }
        ];

        const showRoom = ( {room_type, vacant_rooms, price}, index ) => {
            return (
                <li>
                    {`${index}. ${room_type}, ${vacant_rooms}, ${price}` }
                </li>
            )
        } 

        return (
            <ol>
                {rooms.map((room, index) => {
                    <li>{ showRoom(room, index) }</li>
                })}
            </ol>
        )
    }

    export default quiz

    ```

2.  Write a function in Javascript, which receives NUMBER and has the next logic:
    a) it prints "foo" if NUMBER is divisible by 2;
    b) it prints "bar" if NUMBER is divisible by 7;
    c) it prints "foobar" if NUMBER is divisible by 14;
    d) it prints NUMBER value for other cases;
    note: NUMBER is a positive integer number;

    ```Answer
    function main (num) {
        if(num < 1){
            console.error("Please input positive integer")
            return;
        }
        let result = '';
        const {divisibleByTwo, divisibleBySeven} = getRemainder(num);
        if(divisibleByTwo){
            result = 'foo'
        }
        if(divisibleBySeven){
            result = 'bar'
        }
        if(divisibleBySeven&&divisibleByTwo){
            result = 'foobar'
        }
        return result;
    }

    function getRemainder(num){
        let divisibleBySeven, divisibleByTwo = false;
        if(num % 2 === 0){
            divisibleByTwo = true;
        }
        if(num % 7 === 0){
            divisibleBySeven = true;
        }
        return {divisibleByTwo, divisibleBySeven};
    }

    console.log(main(-1))

    ```

3. Let's say you have a file with a following structure:
    "id,name,value
    1,Dan,150
    2,Peter,300
    3,Mark,400
    4,Victor,600"

    Write a function in node.js that reads this file and returns the number, which is a sum of all "value" numbers from the file;

    ```Answer
    'use strict';

    const fs = require('fs');

    let rawData = fs.readFileSync('student.json');
    let students = JSON.parse(rawData);
    let sum = 0;
    students.forEach(student => {
        sum += student.value    
    });

    console.log(sum);
    ```

    **Note:** If we don't use json file format, we need to use some modules for reading the file line by line.


4. Refactor the code below.
    (do not create functions or constants, code refactor is required only)
    
    if (province == 'ONTARIO') {
    rate = ONTARIO_RATE;
    amt = base * ONTARIO_RATE;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
    } else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
    rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
    amt = base * rate;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
    if (province == 'QUEBEC') {
        points = 2;
    }
    } else {
    rate = 1;
    amt = base;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
    }


    ```Answer
    switch (province) {
        case 'ONTARIO':
            rate = ONTARIO_RATE;
            break;

        case 'QUEBEC':
            rate = QUEBEC_RATE
            points = 2;
            break;

        case 'ALBERTA':
            rate = ALBERTA_RATE;
            break;

        default:
            rate = 1;
            break;
            
    }
    amt = base * rate;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
    ```
    


