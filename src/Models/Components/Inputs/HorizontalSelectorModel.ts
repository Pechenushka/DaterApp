import {ImageSourcePropType} from 'react-native';
import {BaseModel, baseModelProps} from '../../../Core/BaseModel';

export type HorizontalSelectorItem = {
  id: number;
  name: string;
  icon: ImageSourcePropType;
  activeIcon: ImageSourcePropType;
};

type horizontalSelectorModelProps = baseModelProps & {
  list: Array<HorizontalSelectorItem>;
  onSelectionChange: (item: HorizontalSelectorItem | HorizontalSelectorItem[]) => void;
  multiselection: boolean;
};

class HorizontalSelectorModel extends BaseModel<horizontalSelectorModelProps> {
  private _activeItems: Array<HorizontalSelectorItem> = [];

  constructor(props: horizontalSelectorModelProps) {
    super(props);
  }

  public get value() {
    if (this.props.multiselection) {
      return this._activeItems;
    }
    return this._activeItems[0];
  }

  public get list() {
    return this.props.list;
  }

  public get activeItems() {
    return this._activeItems;
  }

  public onItemPress = (item: HorizontalSelectorItem) => {
    if (this.props.multiselection) {
      if (this._activeItems.includes(item)) {
        console.log(item);
        const activeItemIndex = this._activeItems.findIndex(
          activeItem => item.id === activeItem.id,
        );
        if (activeItemIndex >= 0) {
          this._activeItems.splice(activeItemIndex, 1);
        }
      } else {
        this._activeItems.push(item);
      }
      this.props.onSelectionChange(this._activeItems);
    } else {
      this._activeItems = [];
      this._activeItems.push(item);
      this.props.onSelectionChange(this._activeItems[0]);
    }

    this.forceUpdate();
  };

  public selectItems = (items: Array<number>) => {
    items.forEach(item => {
      const findedItem = this.list.find(listItem => item === listItem.id);
      if (findedItem) {
        if (!this._activeItems.includes(findedItem)) {
          this._activeItems.push(findedItem);
        }
      }
    });
  };
}

export {HorizontalSelectorModel};
