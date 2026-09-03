/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
//not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;
//not plain js import { Image } from '../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
import { OpenGLStrings } from '../../../../org/allbinary/image/opengles/OpenGLStrings.js';
//not GWT import const OpenGLStrings = globalThis.org.allbinary.image.opengles.OpenGLStrings;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
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
    logError(gl) {
        var error = gl.glGetError();
        ;
        if (error != GL10.GL_NO_ERROR) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(OpenGLStrings.getInstance().GL_ERROR_LABEL);
            stringBuffer.appendint(error);
            if (error == 1281) {
                stringBuffer.append(this.MAX_TEXTURE);
                var maxTextureSize = new Array(1);
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
    logError(gl, image) {
        var error = gl.glGetError();
        ;
        if (error != GL10.GL_NO_ERROR) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(OpenGLStrings.getInstance().GL_ERROR_LABEL);
            stringBuffer.appendint(error);
            if (error == 1281) {
                stringBuffer.append(this.MAX_TEXTURE);
                var maxTextureSize = new Array(1);
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
