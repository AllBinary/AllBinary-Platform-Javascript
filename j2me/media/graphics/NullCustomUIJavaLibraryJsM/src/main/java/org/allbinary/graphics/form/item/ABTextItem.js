/* Generated Code Do Not Modify */
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CustomCustomItem } from './CustomCustomItem.js';
import { ABStringComponent } from './ABStringComponent.js';
export class ABTextItem extends CustomCustomItem {
    constructor(label, layout, altText, backgroundBasicColor, foregroundBasicColor) {
        super(label, backgroundBasicColor, foregroundBasicColor);
        //For kotlin this is before the body of the constructor.
    }
    keyPressed(keyCode) {
    }
    paintUnselected(graphics, x, y) {
    }
    getLabelStringComponent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ABStringComponent.NULL_STRING_COMPONENT;
    }
}
