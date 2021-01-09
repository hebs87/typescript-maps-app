// Creating custom class to restrict access to the standard Map class for other developers
import { User } from "./User";


export class CustomMap {
  // Declare variable and state that it will be an instance of the google.maps.Map class - mark as private to only allow
  // access in this class
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId),
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      }
    )
  }

  addUserMarker = (user: User): void => {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }
}
