/* Generated Code Do Not Modify */
import { OpenGLImageUtilBase } from '../../../org/allbinary/image/opengles/OpenGLImageUtilBase.js';
//not GWT import const OpenGLImageUtilBase = globalThis.org.allbinary.image.opengles.OpenGLImageUtilBase;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OpenGLImageUtil extends OpenGLImageUtilBase {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLImageUtil.instance;
    }
}
OpenGLImageUtil.instance = new OpenGLImageUtil();
