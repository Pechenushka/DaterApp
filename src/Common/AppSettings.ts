class AppSettings {
  private prod = false;
  public get apiEndpoint() {
    if (this.prod) {
      return 'http://142.132.168.38:3001/';
    }
    return 'http://192.168.0.105:3001/';
  }
}

export const appSettings = new AppSettings();
