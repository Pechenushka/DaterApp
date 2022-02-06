import Geolocation from '@react-native-community/geolocation';

class GetUserLocation {
    constructor() {

    }
   static  async getGeolocation(callback: (location:any) => void) {
        await Geolocation.getCurrentPosition(
            ({ coords }) => {
                // this.userLocation = coords;
                callback(coords);
            },
            (error) => {
                // callback();
            },
            { enableHighAccuracy: false, timeout: 7500, maximumAge: 10000 },
        );
    }
}
export  { GetUserLocation }
