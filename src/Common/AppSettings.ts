class AppSettings {
  private prod = false;
  public get apiEndpoint() {
    if (this.prod) {
      return 'http://dater.na4u.ru/';
    }
    return 'https://e2c9-194-39-226-155.eu.ngrok.io/';
  }
}

export const appSettings = new AppSettings();
