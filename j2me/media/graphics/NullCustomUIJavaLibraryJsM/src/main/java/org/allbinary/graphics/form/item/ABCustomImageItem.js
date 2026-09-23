/* Generated Code Do Not Modify */
//not GWT import const Image
import { NullImage } from '../../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const BasicColor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ABCustomItem } from './ABCustomItem.js';
//not GWT import - same folder const ABCustomItem
export class ABCustomImageItem extends ABCustomItem {
    constructor(label, image, layout, altText, basicColor, yOffset) {
        super(label, basicColor, basicColor);
        this.yOffset = 0;
        //For kotlin this is before the body of the constructor.
    }
    getImage() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullImage.NULL_IMAGE;
    }
}
