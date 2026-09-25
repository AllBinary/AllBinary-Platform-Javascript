/* Generated Code Do Not Modify */
import { Object } from '../../java/lang/Object.js';
import { NullPointerException } from '../../java/lang/NullPointerException.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
//J2SE to J2ME compatibility
export class Objects extends Object {
    requireNonNull(value) {
        if (value ==
            null) {
            throw new NullPointerException();
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return value;
        }
    }
    requireNonNull(value, message) {
        if (value ==
            null) {
            throw new NullPointerException(message);
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return value;
        }
    }
}
