/* Generated Code Do Not Modify */
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CustomScreen } from './CustomScreen.js';
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
        return ABCustomItem.NULL_CUSTOM_ITEM;
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
