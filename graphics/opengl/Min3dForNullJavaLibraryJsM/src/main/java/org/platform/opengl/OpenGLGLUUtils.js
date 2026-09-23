/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
//not GWT import const OpenGLESImage
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OpenGLGLUUtils extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLGLUUtils.instance;
    }
    makeByteBuffer(bmp, flip) {
        throw new RuntimeException();
    }
    texImage2D(gl, glVersion, target, level, generateMipMap, openGLESImage, border, flip) {
        throw new RuntimeException();
    }
    texImage2D(gl, glVersion, target, level, generateMipMap, bitmap, border, flip) {
        throw new RuntimeException();
    }
}
OpenGLGLUUtils.instance = new OpenGLGLUUtils();
