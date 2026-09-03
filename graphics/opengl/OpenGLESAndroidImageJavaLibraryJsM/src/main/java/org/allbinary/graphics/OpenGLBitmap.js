/* Generated Code Do Not Modify */
//not GWT import const Bitmap = globalThis.android.graphics.Bitmap;
import { PlatformBitmapBase } from '../../../org/allbinary/platform/graphics/PlatformBitmapBase.js';
//not GWT import const PlatformBitmapBase = globalThis.org.allbinary.platform.graphics.PlatformBitmapBase;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OpenGLBitmap extends PlatformBitmapBase {
    constructor(bitmap = {}) {
        super();
        this.bitmap = bitmap;
    }
    getPixels(pixels, offset, stride, x, y, width, height) {
        this.bitmap.getPixels(pixels, offset, stride, x, y, width, height);
    }
    setPixels(pixels, offset, stride, x, y, width, height) {
        this.bitmap.setPixels(pixels, offset, stride, x, y, width, height);
    }
    getWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.bitmap.getWidth();
        ;
    }
    getHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.bitmap.getHeight();
        ;
    }
    recycle() {
        this.bitmap.recycle();
    }
}
