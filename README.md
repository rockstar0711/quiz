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


5. Write a small react or react native app that uses this [weather api](https://www.metaweather.com/api/):
Your app should allow the user to search for a city and see that day's forecast.
Styling is not important, you can use default browser styles.

**Note**: some people have reported that this API does not have CORS enabled on their server, in this case if you are having difficulty with CORS you can launch chrome with [CORS disabled](https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome) or you can select a different API of [your preference](https://rapidapi.com/category/Weather)


```Answer
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script
    src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
    integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="
    crossorigin="anonymous"></script>
    <style>
        .d-flex{
            display: flex!important;
        }
        .ma-3{
            margin: 12px!important;
        }
        .font-weight-bold{
            font-weight: bold!important;
        }

        .text-center{
            text-align: center!important;
        }

    </style>
</head>
<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin ></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin ></script>
    <script
    src="https://code.jquery.com/jquery-3.6.0.js"
    integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
    crossorigin="anonymous"></script>
    <script>

        function Component() {
            const [wetherData, setWetherData] = React.useState(null);
            React.useEffect(() => {
                console.log('Getting weather data...')
                $.get( "https://www.metaweather.com/api/location/44418/", function( data ) {
                    console.log("______________", data)
                    setWetherData(data)
                    console.log(data.consolidated_weather.length)
                });
            }, []);
            
            return React.createElement("div", {className: "main"}, 
                React.createElement("h1", null, wetherData == null ? 'Loading...' : wetherData.parent.title), 
                React.createElement("div", {className: "d-flex"}, 
                    React.createElement("p", {className: "ma-3"}, 'lat:'), 
                    React.createElement("p", {className: "ma-3"}, wetherData == null ? '' : wetherData.parent.latt_long.split(',')[0]), 
                    React.createElement("p", {className: "ma-3"}, 'long:'), 
                    React.createElement("p", {className: "ma-3"}, wetherData == null ? '' : wetherData.parent.latt_long.split(',')[1]), 
                ),
                React.createElement("div", {className: ""}, 
                    React.createElement("p", {className: "ma-3 font-weight-bold"}, 'Consolidated Weather'), 
                    React.createElement("table", {className: ""}, 
                        React.createElement("thead", {className: ""}, 
                            React.createElement("tr", {className: ""}, 
                                React.createElement("th", {className: "text-center"}, "ID"),
                                React.createElement("th", {className: "text-center"}, "Air Pressure"),
                                React.createElement("th", {className: "text-center"}, "Max Temp"),
                                React.createElement("th", {className: "text-center"}, "Min Temp"),
                                React.createElement("th", {className: "text-center"}, "Current Temp"),
                                React.createElement("th", {className: "text-center"}, "Predictability"),
                                React.createElement("th", {className: "text-center"}, "Wind Speed"),
                            ),
                        ),
                        React.createElement("tbody", {className: ""}, 
                            wetherData == null? React.createElement("td", {className: ""}, 'loading...'):
                            wetherData.consolidated_weather.map(item => {
                                console.log(item.id)
                                return React.createElement("tr", {className: ""}, 
                                    React.createElement("td", {className: "text-center"}, item.id),
                                    React.createElement("td", {className: "text-center"}, item.air_pressure),
                                    React.createElement("td", {className: "text-center"}, item.max_temp),
                                    React.createElement("td", {className: "text-center"}, item.min_temp),
                                    React.createElement("td", {className: "text-center"}, item.the_temp),
                                    React.createElement("td", {className: "text-center"}, item.predictability),
                                    React.createElement("td", {className: "text-center"}, item.wind_speed),
                                )
                            })
                        ),
                    )
                )
            )
        }
        ReactDOM.render(React.createElement(Component), document.getElementById('root'))
    </script>
</body>
</html>

```