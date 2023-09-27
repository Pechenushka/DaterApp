class AppSettings {
  private prod = false;
  public get apiEndpoint() {
    if (this.prod) {
      return 'http://116.202.31.73:3001/';
    }
    return 'https://9tvfjlnb-3001.euw.devtunnels.ms/';
  }
}

export const appSettings = new AppSettings();
