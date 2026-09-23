/* Generated Code Do Not Modify */
//not GWT import const Image
import { Bitmap } from '../../../android/graphics/Bitmap.js';
//not GWT import const Bitmap
import { BitmapFactory } from '../../../android/graphics/BitmapFactory.js';
//not GWT import const IOException
import { PlatformBitmapBaseFactory } from '../../../org/allbinary/platform/graphics/PlatformBitmapBaseFactory.js';
//not GWT import const AndroidImageInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
//import { Config } from './Config.js';
//not GWT import - same folder const Config
import { OpenGLBitmap } from './OpenGLBitmap.js';
//not GWT import - same folder const OpenGLBitmap
export class OpenGLBitmapFactory extends PlatformBitmapBaseFactory {
    constructor() {
        super(...arguments);
        //inner= member=true isStatic=
        this.Config = class extends Object {
            constructor(bitmapConfig) {
                super();
                this.bitmapConfig = bitmapConfig;
            }
        };
        this.ARGB_8888 = new this.Config(Bitmap.Config.ARGB_8888);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLBitmapFactory.instance;
    }
    createBitmap(width, height, config) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OpenGLBitmap(Bitmap.createBitmap(width, height, config.bitmapConfig));
    }
    //@Throws(IOException.constructor)
    decodeStream(inputStream) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OpenGLBitmap(BitmapFactory.decodeStream(inputStream));
    }
    createBitmap(image) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OpenGLBitmap(image.getBitmap());
    }
}
OpenGLBitmapFactory.instance = new OpenGLBitmapFactory();
