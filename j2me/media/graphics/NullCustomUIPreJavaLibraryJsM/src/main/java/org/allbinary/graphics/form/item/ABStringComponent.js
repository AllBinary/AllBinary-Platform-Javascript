/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ABStringComponent extends Object {
    getBackgroundBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicColorFactory.getInstance().WHITE;
    }
    constructor(backgroundBasicColor, foregroundBasicColor) {
        super();
    }
    getForegroundBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicColorFactory.getInstance().WHITE;
    }
    setForegroundBasicColor(foregroundBasicColor) {
    }
}
ABStringComponent.NULL_STRING_COMPONENT = new ABStringComponent(BasicColorFactory.getInstance().BLACK, BasicColorFactory.getInstance().WHITE);
