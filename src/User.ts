import * as faker from 'faker';
import { Mappable } from "./CustomMap";

// Implementing the Mappable interface tells TS that the class should contain all the properties required by Mappable
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    // Initialise properties with randomly generated values
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  };

  markerContent = (): string => {
    return `
      <div>
        <h1>User Name: ${this.name}</h1>
      </div>
    `;
  };
}
