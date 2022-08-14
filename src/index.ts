import { add, multiply, divide } from "./utils";
import { Dog } from "./Dog";
import ShelterDog from "./ShelterDog";

console.log("From Index.ts file !!!");

console.log(add(3, 4));
console.log(multiply(4, 5));
console.log(divide(10, 2));

const dog = new Dog("Tom", "Alsation");
console.log(dog.name);
console.log(dog.breed);
console.log(dog.bark());

const shelterDog = new ShelterDog("Tiger", "German shepherd", "Shelter");
