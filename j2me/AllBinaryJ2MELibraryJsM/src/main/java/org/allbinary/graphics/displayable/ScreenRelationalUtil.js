/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const Image
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DisplayInfoSingleton } from './DisplayInfoSingleton.js';
//sameFolderImports - not GWT import - same folder const DisplayInfoSingleton
export class ScreenRelationalUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ScreenRelationalUtil.instance;
    }
    getScaleImage(image) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getScaleWH(image.getWidth(), image.getHeight());
        ;
    }
    getScaleWH(aWidth, aHeight) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getScaleWHA(aWidth, aHeight, 20);
        ;
    }
    getScaleWHA(aWidth, aHeight, add) {
        let displayInfoSingleton = DisplayInfoSingleton.getInstance();
        ;
        let last = displayInfoSingleton.getLast();
        ;
        let width = last[displayInfoSingleton.WIDTH];
        ;
        let height = last[displayInfoSingleton.HEIGHT];
        ;
        let largestSize = width;
        ;
        if (largestSize < height) {
            largestSize = height;
        }
        let scale = (largestSize) / aWidth;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return scale;
    }
    getScaledHeight(aWidth, aHeight) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return globalThis.Math.trunc((this.getScaleWH(aWidth, aHeight) * aHeight));
    }
    getScaledHeightAdd(aWidth, aHeight, add) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return globalThis.Math.trunc((this.getScaleWHA(aWidth, aHeight, add) * aHeight));
    }
}
ScreenRelationalUtil.instance = new ScreenRelationalUtil();
