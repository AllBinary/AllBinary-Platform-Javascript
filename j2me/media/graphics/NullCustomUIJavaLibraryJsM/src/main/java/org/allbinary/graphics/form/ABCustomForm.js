/* Generated Code Do Not Modify */
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CustomScreen } from './CustomScreen.js';
//not GWT import const CustomScreen = globalThis.org.allbinary.graphics.form.CustomScreen;
export class ABCustomForm extends CustomScreen {
    constructor(title, items, backgroundBasicColor, foregroundBasicColor) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
    }
    getAllitems() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return [];
    }
    size() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    setSelectedIndex(index) {
    }
    getSelectedIndex() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    deleteAll() {
    }
    delete(itemNum) {
    }
    append(item) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    insert(itemNum, item) {
    }
    set(itemNum, item) {
    }
    get(itemNum) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ABCustomItem.getNullInstance();
        ;
    }
    getWidth() {
        throw new RuntimeException();
    }
    paint(graphics) {
    }
    getTitle() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
}
