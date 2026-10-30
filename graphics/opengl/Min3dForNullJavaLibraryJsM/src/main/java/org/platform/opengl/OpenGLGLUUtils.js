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
    texImage2D(...args) {
        if (args.length === 8 && typeof args[1] === 'string' && typeof args[2] === 'number' && typeof args[3] === 'number' && typeof args[4] === 'boolean' && typeof args[6] === 'number' && typeof args[7] === 'boolean')
            return this.texImage2D$overload1(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
        if (args.length === 8 && typeof args[1] === 'string' && typeof args[2] === 'number' && typeof args[3] === 'number' && typeof args[4] === 'boolean' && typeof args[6] === 'number' && typeof args[7] === 'boolean')
            return this.texImage2D$overload2(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
        throw new TypeError('No matching overload: texImage2D');
    }
    texImage2D$overload1(gl, glVersion, target, level, generateMipMap, openGLESImage, border, flip) {
        throw new RuntimeException();
    }
    texImage2D$overload2(gl, glVersion, target, level, generateMipMap, bitmap, border, flip) {
        throw new RuntimeException();
    }
}
OpenGLGLUUtils.instance = new OpenGLGLUUtils();
