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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    // Add an event listener to show a pop up when the marker is clicked
    marker.addListener('click', () => {
      // Create the instance of the InfoWindow
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there!'
      })

      // Open it and pass in the map and marker instances
      infoWindow.open(this.googleMap, marker);
    })
  }
}
