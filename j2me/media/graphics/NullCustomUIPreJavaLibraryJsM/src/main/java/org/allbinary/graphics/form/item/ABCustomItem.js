/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ABCustomItem extends Object {
    static getNullInstance() {
        if (ABCustomItem.NULL_CUSTOM_ITEM == NullUtil.getInstance().NULL_OBJECT) {
            ABCustomItem.NULL_CUSTOM_ITEM = new ABCustomItem(StringUtil.getInstance().EMPTY_STRING, BasicColorFactory.getInstance().BLACK, BasicColorFactory.getInstance().WHITE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return ABCustomItem.NULL_CUSTOM_ITEM;
    }
    constructor(label, backgroundBasicColor, foregroundBasicColor) {
        super();
    }
    setOwner(owner) {
    }
    paintXY(graphics, x, y) {
    }
    paintUnselected(graphics, x, y) {
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
    preMeasurement(graphics) {
    }
}
ABCustomItem.NULL_CUSTOM_ITEM = NullUtil.getInstance().NULL_OBJECT;
