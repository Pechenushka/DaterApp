class AppSettings {
  private prod = true;
  public get apiEndpoint() {
    if (this.prod) {
      return 'http://142.132.168.38:3001/';
    }
    return 'https://e2c9-194-39-226-155.eu.ngrok.io/';
  }
}

export const appSettings = new AppSettings();
