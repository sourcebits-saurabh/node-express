
/*
Basic of Node js Exports
*/

// const tutorial = require("./tutorial");

// const s = tutorial.sum(1, 2);

// console.log(tutorial);
// console.log(s);


/* Events modules in Nodejs */
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.on('tutorial',(num1,num2)=> {
    console.log('tutorial event emitter'+num1 +num2);
});

eventEmitter.emit('tutorial',1,2);

/*

Todo
basic of class using event emitter


*/
class Person extends EventEmitter {

        constructor(name){
            super();
            this._name = name;
        }

        get name(){
            return this._name;
        }
}

let saurabh = new Person('Saurabh Kamble');
let raju = new Person('Raju Kumar');
raju.on('name',()=>{
    console.log(`My name is ${raju.name}`);
});
saurabh.on('name',()=>{
    console.log(`My name is ${saurabh.name}`);
});

saurabh.emit('name');
raju.emit('name');