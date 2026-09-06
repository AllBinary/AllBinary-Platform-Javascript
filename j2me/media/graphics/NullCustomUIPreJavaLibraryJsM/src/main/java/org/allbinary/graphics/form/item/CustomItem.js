/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Screen } 
const Screen = globalThis.javax.microedition.lcdui.Screen;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CustomItem extends Object {
    constructor(label, backgroundBasicColor, foregroundBasicColor) {
        super();
    }
    setOwner(owner) {
    }
    paint(graphics, x, y) {
    }
    isFocusable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getLabel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    setLabel(label) {
    }
    getHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    setHeight(height) {
    }
    getValue() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0.0;
    }
    setValue(value) {
    }
    getMinimumWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getMinimumHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
}
CustomItem.NULL_CUSTOM_ITEM = new CustomItem(StringUtil.getInstance().EMPTY_STRING, BasicColorFactory.getInstance().BLACK, BasicColorFactory.getInstance().WHITE);
