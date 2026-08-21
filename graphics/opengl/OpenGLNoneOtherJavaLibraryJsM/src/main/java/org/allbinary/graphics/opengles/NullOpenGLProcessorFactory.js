/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLProcessor } from './OpenGLProcessor.js';
export class NullOpenGLProcessorFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullOpenGLProcessorFactory.instance;
    }
}
NullOpenGLProcessorFactory.instance = new OpenGLProcessor();
