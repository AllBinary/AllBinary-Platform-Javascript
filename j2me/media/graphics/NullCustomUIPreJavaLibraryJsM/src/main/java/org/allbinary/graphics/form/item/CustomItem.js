/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
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
