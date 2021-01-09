// Creating custom class to restrict access to the standard Map class for other developers

// Instructions to every other class on how they can be an argument to addMarker
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

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

  addMarker = (mappable: Mappable): void => {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
  }
}
