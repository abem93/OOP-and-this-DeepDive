/*
const player = {
  name: '?',
  hp: 100,
  mp: 0,
  items: [],
};

const hanSolo = player;
hanSolo.name = 'Han Solo';
hanSolo.hp = 80;
hanSolo.mp = 20;
hanSolo.items = ['Blaster'];


const darthVader = player;

console.log(hanSolo);
console.log(darthVader);
*/

/*
const createPlayer = (name,hp,mp,items) => {
  return{
    name: name,
    hp: hp,
    mp: mp,
    items: items,
  };
};

const hanSolo = createPlayer('Hans Solo', 100, 10, ['Blaster']);
console.log(hanSolo);

const darthVader = createPlayer('Darth Vader', 200, 50, ["Saber"]);
console.log(darthVader);
*/

/*
class Player {
  age = 20;
  constructor(name,hp,mp,items){
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }

  speak(phrase){
    console.log(`${this.name} says: ${phrase}.`);
  }
}

const hanSolo = new Player('Hans Solo', 100, 10, ['Blast']);
hanSolo.speak('Never tell me the odds!');
console.log(hanSolo);
// console.log(Object.getOwnPropertyNames(hanSolo));
// console.log(Object.getOwnPropertyNames(hanSolo.__proto__))

function AnotherPlayer(name, hp, mp, items) {
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.items = items;
  this.speak = function (phrase){
    console.log(`${this.name} says: ${phrase}.`);
  }
}

const darthVader = new AnotherPlayer('Darth Vader', 200, 50, ["Saber"]);
darthVader.speak('hasodhfalkhfdakljdsf')

console.log(darthVader)
// console.log(Object.getOwnPropertyNames(darthVader))

// console.log(Object.getOwnPropertyNames(darthVader.__proto__))

*/

class User {
  age = 20;
  constructor(name,age,location,items){
    this.name = name;
    this.age = age;
    this.location = location;
    this.items = items;
  }

  greeting(time){
    console.log(`Hello, good${time} ${this.name}!`);
  }
}

const john = new User('john', 65, 'Montana',['toothbrush'])
john.greeting('morning')

console.log(john)


const AnotherUser = (name,age,location,items) => {
  return{
    name: name,
    age: age,
    location: location,
    items: items,
  };
};

const tom = AnotherUser('Thomas', 53, 'Wyoming',['hairbrush']);

console.log(tom)
