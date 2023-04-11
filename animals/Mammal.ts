import { Animal } from './Animal';

export abstract class Mammal extends Animal {
    furColor: string;

    constructor(name: string, age: number, species: string, furColor: string) {
        super(name, age, species);
        this.furColor = furColor;
    }

    abstract makeSound(): void;
}