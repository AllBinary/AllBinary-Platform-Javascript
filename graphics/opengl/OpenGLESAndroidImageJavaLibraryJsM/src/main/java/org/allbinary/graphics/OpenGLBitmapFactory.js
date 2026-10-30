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
//sameFolderImports - not GWT import - same folder const Config
import { OpenGLBitmap } from './OpenGLBitmap.js';
export class OpenGLBitmapFactory extends PlatformBitmapBaseFactory {
    constructor() {
        super(...arguments);
        //inner= member=true isStatic=
        this.Config = (() => {
            const outer$OpenGLBitmapFactory = this;
            return class extends Object {
                constructor(bitmapConfig) {
                    super();
                    this.bitmapConfig = bitmapConfig;
                }
            };
        })();
        this.ARGB_8888 = new this.Config(Bitmap.Config.ARGB_8888);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLBitmapFactory.instance;
    }
    createBitmap(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.createBitmap$overload1(args[0], args[1], args[2]);
        if (args.length === 1)
            return this.createBitmap$overload2(args[0]);
        throw new TypeError('No matching overload: createBitmap');
    }
    createBitmap$overload1(width, height, config) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OpenGLBitmap(Bitmap.createBitmap(width, height, config.bitmapConfig));
    }
    //@Throws(IOException.constructor)
    decodeStream(inputStream) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OpenGLBitmap(BitmapFactory.decodeStream(inputStream));
    }
    createBitmap$overload2(image) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new OpenGLBitmap(image.getBitmap());
    }
}
OpenGLBitmapFactory.instance = new OpenGLBitmapFactory();
