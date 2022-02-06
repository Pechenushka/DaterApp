import crashlytics from '@react-native-firebase/crashlytics';

class AppLog {
    constructor() {
    }

    public log(name: string, message: string | undefined = undefined, ex: Error | undefined = undefined) {
        if (message !== void 0) {
            console.log(name, message);
        }
        if (ex !== void 0) {
            console.log(name, ex);
        }
    }

    public error(name: string, ex: Error) {
        console.error(name, ex);
        this.recordError(name,ex);
    }

    public recordError(name:string, ex: Error) {
        const obj = { name, ex }
        crashlytics().recordError(obj);
    }
}

export const appLog = new AppLog();
