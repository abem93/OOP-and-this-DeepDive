class Car {
  constructor(make, model,year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfo(){
    console.log(`${this.make} ${this.model} ${this.year}`)
  }
}


//Understanding 'this' in Depth:
const obj = {
  hi: 'hello',
  regFunc: function(){
    console.log(this)
  },
  arrowfunc: function(){
    console.log(this)
  }
};
// console.log(obj.regFunc());
// console.log(obj.arrowfunc());

class ElectricCar extends Car{
  constructor(make, model,year,batteryLife){
    super(make, model,year);
    this.batteryLife = batteryLife;
  }

  displayInfo(){
    console.log(`${this.make} ${this.model} ${this.year} ${this.batteryLife}`);
  }
};
const tesla = new ElectricCar('Tesla', 'Model 3', 2020, 85)
tesla.displayInfo()

//Exercise 4.1: 

class Student{
  thisFunc(){
    console.log(this)
  };
  arrowFunc = ()=>{
    console.log(this)
  }
}
