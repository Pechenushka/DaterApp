import {PermissionsAndroid, Platform} from 'react-native';

class Permissions {
    private readonly _permissionTypes: {
        location: string;
    };
    private _locationAccess: boolean;

    constructor() {
        this._locationAccess = false;
        this._permissionTypes = {
            location: 'ACCESS_FINE_LOCATION',
        };
    }


    get location() {
        return this._locationAccess;
    }

    get permissionTypes() {
        return this._permissionTypes;
    }

    async requestStoragePermission(requestType: string) {
        if(Platform.OS !== 'ios'){
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS[requestType],
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    this.setPermission(requestType, true);
                    return true;
                } else {
                    this.setPermission(requestType, false);
                    return false;
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            return true
        }
    }

    setPermission(requestType: string, response: boolean) {
        switch (requestType) {
            case this.permissionTypes.location:
                this._locationAccess = response
        }
    }
}

export { Permissions };
