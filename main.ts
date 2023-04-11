import { Tiger } from './animals/examples/Tiger';
import { Giraf } from './animals/examples/Giraf';

let tigroux = new Tiger('Tigroux', 20, 'Tiger', 'Orange', 200);
let giffy = new Giraf('Giffy', 20, 'Giraf', 'Yellow', 200); 
console.log(tigroux);
tigroux.makeSound();
tigroux.move();
console.log(tigroux.weight)
tigroux.eat(giffy);
console.log(tigroux.weight)
