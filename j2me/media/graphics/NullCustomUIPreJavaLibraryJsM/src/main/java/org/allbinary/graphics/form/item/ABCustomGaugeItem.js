/* Generated Code Do Not Modify */
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ABCustomItem } from './ABCustomItem.js';
export class ABCustomGaugeItem extends ABCustomItem {
    constructor(label, maxValue, initialValue, backgroundBasicColor, foregroundBasicColor) {
        super(label, backgroundBasicColor, foregroundBasicColor);
        //For kotlin this is before the body of the constructor.
    }
}
ABCustomGaugeItem.NULL_GAUGE_ITEM = new ABCustomGaugeItem(StringUtil.getInstance().EMPTY_STRING, 1, 0, BasicColorFactory.getInstance().BLACK, BasicColorFactory.getInstance().WHITE);
