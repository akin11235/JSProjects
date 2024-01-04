// Position of Toronto on map
// 43.6532, -79.3832

let lat = 43.6532;
let lon = -79.3832

let torontoArr = [ 43.6532, -79.3832 ]

// Object
let toronto = { 
    lat: 43.6532, 
    lon: -79.3832 
}

function User (firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.isLoggedIn = false;
    this.age = age;
    this.pref = {
        color: 'red',
        width: 1024
    }
    this.score = 0
    // this.login = function(){
    //     this.isLoggedIn = true;
    // }
    // this.logout = function(){
    //     this.isLoggedIn = false;
    // }
}

User.prototype.login = function (){
    this.isLoggedIn = true;
}

User.prototype.logout = function(){
    this.isLoggedIn = false;
}

let user1 = new User('Dave', 'Humph');
let user3 = new User('Frank', 'Lee');
let user4 = new User('Jen', 'Smith');

let user999 = new User('Ed', 'Wu');

user3.login()


let user = {
    firstName: 'First',
    lastName: 'Last',
    email: 'first.last@email.com',
    loggedIn: false,
    lastLogin: new Date(),
    level:3,
    pref: {
        color: 'red',
        width: 1024
    },
    score: null,
    login: function(){
        this.isLoggedIn = true;
    }
}

user.score = 43;

user.login();

user.logout = function(){
    this.isLoggedIn = false;
}

function login (user){
user.loggedIn = true;
}

let user2;

user2.firstName = user.firstName;



function f (options){
    if (options.a){

    }
}


function calculate(){

    return { total: 120, average: 56 };
}

let result = calculate();
result.total;
result.average;

let toronto2 = { 
    lat: 43.6532, 
    lon: -79.3832 
}

let o 