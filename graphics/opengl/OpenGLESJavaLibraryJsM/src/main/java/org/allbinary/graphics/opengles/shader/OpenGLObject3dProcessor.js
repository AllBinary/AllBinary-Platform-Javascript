/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const GL10
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OpenGLObject3dProcessor extends Object {
    constructor() {
        super(...arguments);
        this.commonStrings = CommonStrings.getInstance();
    }
    process(...args) {
        if (args.length === 2)
            return this.process$overload1(args[0], args[1]);
        if (args.length === 3 && typeof args[2] === 'number')
            return this.process$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: process');
    }
    process$overload1(gl, object3d) {
    }
    process$overload2(gl, object3d, index) {
    }
}
