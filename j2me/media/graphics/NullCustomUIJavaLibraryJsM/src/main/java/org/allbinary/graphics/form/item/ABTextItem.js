/* Generated Code Do Not Modify */
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CustomCustomItem } from './CustomCustomItem.js';
//not GWT import const ABCustomItemInterface = globalThis.org.allbinary.graphics.form.item.ABCustomItemInterface;
import { ABStringComponent } from './ABStringComponent.js';
//not GWT import const ABStringComponent = globalThis.org.allbinary.graphics.form.item.ABStringComponent;
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
