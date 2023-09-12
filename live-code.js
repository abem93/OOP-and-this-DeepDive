//global 'this'
console.log(this);

//implicit binding of 'this'

const person = {
  firstName: 'Joe',
  lastName: 'Anderson',
  printFullName: function (){
    console.log(`${this.firstName} ${this.lastName}`)
  },
  printFullName2: () => {
    console.log(`${this.firstName} ${this.lastName}`)
  } 
}

person.printFullName()

//explicit binding of 'this'
function printFullName(){
  console.log(this.firstName + ' ' + this.lastName)
}
const person2 = {
  firstName: 'Jane',
  lastName: 'Doe'
};

//constructor binding of 'this'

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.printFullName = function(){
    console.log(this.firstName + ' ' + this.lastName)
  }
  this.printFullName2 = () => {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

const person3 = new Person('George', 'Washington')
Person.printFullName
Person.printFullName2


/******************* CLASSES **************************** */

class Car {
  constructor(make, model,topSpeed){
    this.make = make;
    this.model = model;
    this.topSpeed = topSpeed;
  }
  get makeAndModel(value){
    return (`${this.make} ${this.model}`)
  }

  drive(){
    console.log(`This ${this.make} ${this.model} is driving at a responsible speed`);
  }
}

const car = new Car('Toyota', 'Camry', 120);
console.log(car)
car.drive()