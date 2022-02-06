import { app } from "../../../Core/AppImpl";
import { BaseModel, baseModelProps } from "../../../Core/BaseModel";
import { baseScreenCreator } from "../../../Core/BaseScreen";
type drawerItemModelProps = baseModelProps & {
    label: string,
    screenImpl: baseScreenCreator,
    onPress?: () => void
};

class DrawerItemModel extends BaseModel<drawerItemModelProps> {

    constructor(props: drawerItemModelProps) {
        super(props);
    }

    public get label() {
        return this.props.label;
    }

    public onPress = () => {
        app.navigator.closeDrawer();
        app.navigator.navigate(this.props.screenImpl);
    }
}

export { DrawerItemModel }
