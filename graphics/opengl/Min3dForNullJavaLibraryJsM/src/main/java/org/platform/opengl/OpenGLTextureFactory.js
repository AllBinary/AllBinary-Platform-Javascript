/* Generated Code Do Not Modify */
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
//not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
import { PlatformTextureBaseFactory } from '../../../org/allbinary/platform/opengles/PlatformTextureBaseFactory.js';
//not GWT import const PlatformTextureBaseFactory = globalThis.org.allbinary.platform.opengles.PlatformTextureBaseFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLGLUUtils } from './OpenGLGLUUtils.js';
//not GWT import - same folder const OpenGLGLUUtils = globalThis.org.platform.opengl.OpenGLGLUUtils;
export class OpenGLTextureFactory extends PlatformTextureBaseFactory {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLTextureFactory.instance;
    }
    constructor() {
        super();
        this.gluUtils = OpenGLGLUUtils.getInstance();
    }
    load(gl, target, level, image, border, flip) {
        throw new RuntimeException();
    }
}
OpenGLTextureFactory.instance = new OpenGLTextureFactory();
