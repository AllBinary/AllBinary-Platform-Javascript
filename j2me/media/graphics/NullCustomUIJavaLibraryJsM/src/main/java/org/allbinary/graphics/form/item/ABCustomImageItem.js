/* Generated Code Do Not Modify */
import { NullImage } from '../../../../../javax/microedition/lcdui/NullImage.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ABCustomItem } from './ABCustomItem.js';
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
