class AppSettings {
  public get apiEndpoint() {
    return 'http://192.168.0.103:3001/';
  }
}

export const appSettings = new AppSettings();
