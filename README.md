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

