import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';
import { saveData } from './saveData';

export type deviceInfoType = {
    AndroidID?: string;
    Bootloader?: string;
    Brand: string;
    DeviceID: string;
    BuildID?: string;
    MAC?: string;
    IP?: string;
    DeviceToken?: string;
    UniqueId?: string;
} | null;

let androidId = '';
let bootloader = '';
let buildId = '';
let mac = '';
let ip = '';
let deviceToken = '';
let uniqueId = '';
let inited = false;
let deviceInfo: deviceInfoType = null;
let jsonDeviceInfo: string | undefined = void 0;

export class PhoneInfo {

    private static async init() {
        if (inited) {
            return;
        }
        try {
            //Gets the ANDROID_ID
            const promise1 = DeviceInfo.getAndroidId();
            //The system bootloader version number.
            const promise2 = DeviceInfo.getBootloader();
            //Gets build number of the operating system.
            const promise3 = DeviceInfo.getBuildId();
            //Gets the network adapter MAC address.
            const promise4 = DeviceInfo.getMacAddress();
            //  Gets the device current IP address
            const promise5 = DeviceInfo.getIpAddress();
            const promise6 = DeviceInfo.getUniqueId();
            const promise7 = DeviceInfo.getDeviceToken();
            const results = await Promise.all([
                promise1,
                promise2,
                promise3,
                promise4,
                promise5,
                promise6,
                promise7,
            ]);
            androidId = results[0];
            bootloader = results[1];
            buildId = results[2];
            mac = results[3];
            ip = results[4];
            uniqueId = results[5];
            deviceToken = results[6];
            inited = true;
        }catch (ex) {}

    }

    public static async getDeviceInfo() {
        if (deviceInfo !== null) {
            return deviceInfo;
        }
        await PhoneInfo.init();
        if (Platform.OS === 'android') {
            // Android
            deviceInfo = {
                AndroidID: androidId,
                Bootloader: bootloader,
                Brand: DeviceInfo.getBrand(),
                DeviceID: DeviceInfo.getDeviceId(),
                // BuildID: buildId,
                MAC: mac,
                // IP: ip,
            };
        }
        else {
            //IOS
            deviceInfo = {
                Brand: DeviceInfo.getBrand(),
                DeviceID: DeviceInfo.getDeviceId(),
                // BuildID: buildId,
                // MAC: mac,
                // IP: ip,
                DeviceToken: deviceToken,
                UniqueId: deviceToken === 'unknown' ? uniqueId : 'unknown',
            };
        }
        jsonDeviceInfo = JSON.stringify(deviceInfo);
        saveData('PhoneInfo', jsonDeviceInfo).then();
        return deviceInfo;
    }

    public static async getJsonDeviceInfo() {
        if (jsonDeviceInfo !== void 0) {
            return jsonDeviceInfo;
        }
        await PhoneInfo.getDeviceInfo();
        return jsonDeviceInfo;
    }
}
