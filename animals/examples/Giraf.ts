import { Mammal } from '../Mammal';

export class Giraf extends Mammal {
    weight: number;

    constructor(name: string, age: number, species: string, furColor: string, weight: number) {
        super(name, age, species, furColor);
        this.weight = weight;
    }

    makeSound(): void {
        console.log('Giraf Sound');
    }

    setWeight = (weight: number): void => {
        this.weight = weight;
    }
}
