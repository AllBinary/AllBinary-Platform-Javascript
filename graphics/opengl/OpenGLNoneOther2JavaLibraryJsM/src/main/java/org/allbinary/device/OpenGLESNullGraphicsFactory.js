/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLESGraphics } from './OpenGLESGraphics.js';
//not GWT import - same folder const OpenGLESGraphics = globalThis.org.allbinary.device.OpenGLESGraphics;
export class OpenGLESNullGraphicsFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLESNullGraphicsFactory.instance;
    }
}
OpenGLESNullGraphicsFactory.instance = new OpenGLESGraphics();
