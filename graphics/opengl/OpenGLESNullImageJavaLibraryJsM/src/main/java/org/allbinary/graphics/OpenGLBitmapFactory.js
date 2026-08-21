/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
import { PlatformBitmapBaseFactory } from '../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
//import { Config } from './Config.js';
import { OpenGLBitmap } from './OpenGLBitmap.js';
export class OpenGLBitmapFactory extends PlatformBitmapBaseFactory {
    constructor() {
        super(...arguments);
        //inner= member=true isStatic=
        this.Config = class extends Object {
            constructor(bitmapConfig = {}) {
                super();
                this.bitmapConfig = bitmapConfig;
            }
        };
        this.ARGB_8888 = new this.Config(NullUtil.getInstance().NULL_OBJECT);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLBitmapFactory.instance;
    }
    createBitmap(width, height, config) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OpenGLBitmap(NullUtil.getInstance().NULL_OBJECT);
    }
    //@Throws(IOException.constructor)
    decodeStream(inputStream) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OpenGLBitmap(NullUtil.getInstance().NULL_OBJECT);
    }
    createBitmap(image) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OpenGLBitmap(NullUtil.getInstance().NULL_OBJECT);
    }
}
OpenGLBitmapFactory.instance = new OpenGLBitmapFactory();
