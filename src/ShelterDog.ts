import { Dog } from "./Dog";

export default class ShelterDog extends Dog {
  constructor(name: string, breed: string, public shelter: string) {
    super(name, breed);
  }
}
