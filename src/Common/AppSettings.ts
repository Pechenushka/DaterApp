class AppSettings {
  public get apiEndpoint() {
    return 'http://192.168.0.104:3000/';
  }
}

export const appSettings = new AppSettings();
