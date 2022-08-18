class AppSettings {
  private prod = true;
  public get apiEndpoint() {
    if (this.prod) {
      return 'http://116.202.31.73:3001/';
    }
    return 'http://192.168.0.105:3001/';
  }
}

export const appSettings = new AppSettings();
