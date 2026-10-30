/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
//not GWT import const Image
import { OpenGLStrings } from '../../../../org/allbinary/image/opengles/OpenGLStrings.js';
//not GWT import const OpenGLStrings
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OpenGLLogUtil extends Object {
    constructor() {
        super(...arguments);
        this.MAX_TEXTURE = " Max Texture Size: ";
        this.LOG_ERROR = "logError";
        this.IMAGE = " Image: ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLLogUtil.instance;
    }
    logError(...args) {
        if (args.length === 1)
            return this.logError$overload1(args[0]);
        if (args.length === 2)
            return this.logError$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: logError');
    }
    logError$overload1(gl) {
        let error = gl.glGetError();
        ;
        if (error != GL10.GL_NO_ERROR) {
            let stringBuffer = new StringMaker();
            ;
            stringBuffer.append(OpenGLStrings.getInstance().GL_ERROR_LABEL);
            stringBuffer.appendint(error);
            if (error == 1281) {
                stringBuffer.append(this.MAX_TEXTURE);
                let maxTextureSize = new Array(1);
                ;
                gl.glGetIntegerv(GL10.GL_MAX_TEXTURE_SIZE, maxTextureSize, 0);
                stringBuffer.appendint(maxTextureSize[0]);
            }
            if (error == 1280) {
                PreLogUtil.put(stringBuffer.toString(), this, OpenGLStrings.getInstance().SET);
            }
            else {
                ForcedLogUtil.log(stringBuffer.toString(), this);
            }
        }
    }
    logError$overload2(gl, image) {
        let error = gl.glGetError();
        ;
        if (error != GL10.GL_NO_ERROR) {
            let stringBuffer = new StringMaker();
            ;
            stringBuffer.append(OpenGLStrings.getInstance().GL_ERROR_LABEL);
            stringBuffer.appendint(error);
            if (error == 1281) {
                stringBuffer.append(this.MAX_TEXTURE);
                let maxTextureSize = new Array(1);
                ;
                gl.glGetIntegerv(GL10.GL_MAX_TEXTURE_SIZE, maxTextureSize, 0);
                stringBuffer.appendint(maxTextureSize[0]);
            }
            stringBuffer.append(this.IMAGE);
            stringBuffer.append(image.toString());
            PreLogUtil.put(stringBuffer.toString(), this, this.LOG_ERROR);
        }
    }
}
OpenGLLogUtil.instance = new OpenGLLogUtil();
