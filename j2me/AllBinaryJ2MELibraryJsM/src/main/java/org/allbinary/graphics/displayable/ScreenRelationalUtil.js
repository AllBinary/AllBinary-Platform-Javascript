/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DisplayInfoSingleton } from './DisplayInfoSingleton.js';
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
        var displayInfoSingleton = DisplayInfoSingleton.getInstance();
        ;
        var last = displayInfoSingleton.getLast();
        ;
        var width = last[displayInfoSingleton.WIDTH];
        ;
        var height = last[displayInfoSingleton.HEIGHT];
        ;
        var largestSize = width;
        ;
        if (largestSize < height) {
            largestSize = height;
        }
        var scale = (largestSize) / aWidth;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return scale;
    }
    getScaledHeight(aWidth, aHeight) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round((this.getScaleWH(aWidth, aHeight) * aHeight));
    }
    getScaledHeightAdd(aWidth, aHeight, add) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round((this.getScaleWHA(aWidth, aHeight, add) * aHeight));
    }
}
ScreenRelationalUtil.instance = new ScreenRelationalUtil();
