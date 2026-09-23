/* Generated Code Do Not Modify */
//not GWT import const BasicColor
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const Visitor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ABTextItem } from './ABTextItem.js';
//not GWT import - same folder const ABTextItem
export class ABTextFieldItem extends ABTextItem {
    constructor(canvas, visitor, label, value, maxSize, layout, altText, font, backgroundBasicColor, foregroundBasicColor) {
        super(label, layout, altText, backgroundBasicColor, foregroundBasicColor);
        //For kotlin this is before the body of the constructor.
        this.font = font;
    }
    getLabel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    setLabel(label) {
    }
    getString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    setString(string) {
    }
    setFocus(state) {
    }
    getFontHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.font.getHeight();
        ;
    }
    setBackgroundBasicColorP(basicColor) {
    }
    setForegroundBasicColorP(basicColor) {
    }
}
