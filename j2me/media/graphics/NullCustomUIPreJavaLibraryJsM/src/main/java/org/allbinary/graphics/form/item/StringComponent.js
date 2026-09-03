/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class StringComponent extends Object {
    getBackgroundBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicColorFactory.getInstance().WHITE;
    }
    setBackgroundBasicColor(backgroundBasicColor) {
    }
    getForegroundBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicColorFactory.getInstance().WHITE;
    }
    setForegroundBasicColor(foregroundBasicColor) {
    }
}
StringComponent.NULL_STRING_COMPONENT = new StringComponent();
