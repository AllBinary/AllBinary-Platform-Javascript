/* Generated Code Do Not Modify */
import { Object } from '../../java/lang/Object.js';
import { NullPointerException } from '../../java/lang/NullPointerException.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
//J2SE to J2ME compatibility
export class Objects extends Object {
    static requireNonNull(...args) {
        if (args.length === 1)
            return this.requireNonNull$overload1(args[0]);
        if (args.length === 2 && typeof args[1] === 'string')
            return this.requireNonNull$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: requireNonNull');
    }
    requireNonNull$overload1(value) {
        if (value ==
            null) {
            throw new NullPointerException();
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return value;
        }
    }
    requireNonNull$overload2(value, message) {
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
