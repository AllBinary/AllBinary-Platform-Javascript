/* Generated Code Do Not Modify */
//not GWT import const InputStream = globalThis.java.io.InputStream;
//not plain js import { Image } from '../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not plain js import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not GWT import const PlatformBitmapBase = globalThis.org.allbinary.platform.graphics.PlatformBitmapBase;
import { PlatformBitmapBaseFactory } from '../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
//not GWT import const PlatformBitmapBaseFactory = globalThis.org.allbinary.platform.graphics.PlatformBitmapBaseFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
//import { Config } from './Config.js';
//not GWT import const Config = globalThis.org.allbinary.graphics.Config;
import { OpenGLBitmap } from './OpenGLBitmap.js';
//not GWT import const OpenGLBitmap = globalThis.org.allbinary.graphics.OpenGLBitmap;
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
