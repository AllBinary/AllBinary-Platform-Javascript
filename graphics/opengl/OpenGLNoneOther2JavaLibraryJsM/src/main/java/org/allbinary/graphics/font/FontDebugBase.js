/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
//OpenGLNoneOther2JavaLibrary
export class FontDebugBase extends Object {
    constructor() {
        super(...arguments);
        this.SET_FONT = "setFont";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FontDebugBase.instanceBase;
    }
    debugMetrics(currentFont, convertedTextSize, displayMetrics = {}, stringBuffer) {
    }
    debugDpi(densityDpi, stringBuffer) {
    }
    debugDimension(currentFont, convertedTextSize, longestDimensionTotalPixels, stringBuffer) {
    }
}
FontDebugBase.instanceBase = new FontDebugBase();
