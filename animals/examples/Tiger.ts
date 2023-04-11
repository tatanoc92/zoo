import { Mammal } from '../Mammal';

export class Tiger extends Mammal {
    weight: number;

    constructor(name: string, age: number, species: string, furColor: string, weight: number) {
        super(name, age, species, furColor);
        this.weight = weight;
    }

    makeSound(): void {
        console.log('Roar!');
    }

    setWeight = (weight: number): void => {
        this.weight = weight;
    }

    public eat(animal: any): void {
        console.log(`${this.name} is eating a ${animal}.`);
        this.setWeight(animal.weight + this.weight);
    }
}


















// export class Tiger extends Animal {
//     public weight: number = 200;
//     constructor(name: string, weight: number) { 
//         super(name);
//         this.weight = weight;
//     }
//     public move(): void { }
// }