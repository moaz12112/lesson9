/*function sum(x,y){
    alert(x+y);

}
*/

/*function point(x=0,y=0){
let s="(" + x + ", "+ y + ")";
return s;
}
*/

let person = {
    "firstName": "Ammar",
    "lastName": "Farha",
    "gender": "man",
    "age": 24,
    "address": {
        "streetAddress": "126",
        "city": "San Jone",
        "state": "CA",
        "postalCode": "394221"
    },
    "phoneNumbers": [
        {
            "type": "home", 
            "number": "7383627627",
            "active": true
        },
        {
            "type": "mobile",
            "number": "123456789",
            "active": false 
        }
    ]
}

let card_title = document.getElementsByClassName("card-title")[0];
card_title.innerHTML = person.firstName + " " + person.lastName;

let e1=document.getElementsByClassName("card-e1")[0];
card_e1.innerHTML = person.state + " " + person.city;

let tels = document.getElementsByClassName("list-group")[0];
