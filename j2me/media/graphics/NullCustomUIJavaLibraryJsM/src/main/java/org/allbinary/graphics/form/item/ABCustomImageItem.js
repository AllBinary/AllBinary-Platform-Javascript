/* Generated Code Do Not Modify */
//not plain js import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
import { NullImage } from '../../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ABCustomItem } from './ABCustomItem.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;
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
