/* Generated Code Do Not Modify */
//not GWT import const BasicColor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CustomCustomItem } from './CustomCustomItem.js';
//not GWT import - same folder const ABCustomItemInterface
import { ABStringComponent } from './ABStringComponent.js';
//not GWT import - same folder const ABStringComponent
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
