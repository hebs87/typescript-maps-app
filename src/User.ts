import * as faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    // Initialise properties with randomly generated values
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}
