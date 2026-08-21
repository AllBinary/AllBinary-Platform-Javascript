/* Generated Code Do Not Modify */
import { UpdateMyFontProcessor } from '../../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ABCustomItem } from './ABCustomItem.js';
export class CustomCustomItem extends ABCustomItem {
    constructor(label, backgroundBasicColor, foregroundBasicColor) {
        super(label, backgroundBasicColor, foregroundBasicColor);
        this.updateMyFontProcessor = new UpdateMyFontProcessor(this);
        this.myFontProcessor = this.updateMyFontProcessor;
        //For kotlin this is before the body of the constructor.
    }
    updateMeasurement(graphics) {
    }
}
