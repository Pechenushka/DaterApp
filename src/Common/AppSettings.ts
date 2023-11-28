class AppSettings {
  private prod = true;
  public get apiEndpoint() {
    if (this.prod) {
      return 'http://84.246.80.159:3001/';
    }
    return 'https://9tvfjlnb-3001.euw.devtunnels.ms/';
  }
}

export const appSettings = new AppSettings();
