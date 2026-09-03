/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OpenGLStrings extends Object {
    constructor() {
        super(...arguments);
        this.GL_ERROR_LABEL = "GLError: ";
        this.SET = "set(GL10)";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLStrings.instance;
    }
}
OpenGLStrings.instance = new OpenGLStrings();
