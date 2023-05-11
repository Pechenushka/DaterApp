class AppSettings {
  private prod = false;
  public get apiEndpoint() {
    if (this.prod) {
      return 'http://116.202.31.73:3001/';
    }
    return 'http://localhost:3001/';
  }
}

export const appSettings = new AppSettings();
