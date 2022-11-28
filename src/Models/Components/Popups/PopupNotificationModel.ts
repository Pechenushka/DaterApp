import {Animated} from 'react-native';
import {BaseModel, baseModelProps} from '../../../Core/BaseModel';

type popupNotificationModelProps = baseModelProps & {};

class PopupNotificationModel extends BaseModel<popupNotificationModelProps> {
  public top = new Animated.Value(0);

  public topVal = this.top.interpolate({inputRange: [0, 150], outputRange: [-120, 50]});

  private _title: string = '';
  private _message: string = '';
  private _type: 'success' | 'error' | 'info' = 'info';
  private _queue: Array<{type: 'success' | 'error' | 'info'; message: string; title: string}> = [];
  private _isShowing: boolean = false;

  constructor(props: popupNotificationModelProps) {
    super(props);
  }

  public get title() {
    return this._title;
  }

  public get message() {
    return this._message;
  }

  public get type() {
    return this._type;
  }

  public showNotification = () => {
    this._isShowing = true;
    const notification = this._queue.shift();
    if (notification !== undefined) {
      this._message = notification.message;
      this._title = notification.title;
      this._type = notification.type;
      this.forceUpdate();
      Animated.timing(this.top, {toValue: 150, useNativeDriver: false, duration: 1000}).start();
      setTimeout(() => {
        Animated.timing(this.top, {toValue: 0, useNativeDriver: false, duration: 1000}).start(
          () => {
            this._isShowing = false;
            if (this._queue.length) {
              this.showNotification();
            }
          },
        );
      }, 5000);
    }
  };

  public showInfo = (title: string, message: string) => {
    this._queue.push({message: message, title: title, type: 'info'});
    this.startQueue();
  };

  public showSuccess = (title: string, message: string) => {
    this._queue.push({message: message, title: title, type: 'success'});
    this.startQueue();
  };

  public showError = (title: string, message: string) => {
    this._queue.push({message: message, title: title, type: 'error'});
    this.startQueue();
  };

  public startQueue = () => {
    if (!this._isShowing) {
      this.showNotification();
    }
  };
}

export {PopupNotificationModel};
