/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MathUtil extends Object {
    constructor() {
        super(...arguments);
        this.ACCURACY = 100;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MathUtil.instance;
    }
    getTotalDigits(digits) {
        var total = 0;
        ;
        while (digits > 0) {
            digits = digits / 10;
            total++;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return total;
    }
    sqrt(value) {
        if (value <= 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return value;
        }
        var accumulated = value >> 1;
        ;
        var result = (accumulated + (value / accumulated)) >> 1;
        ;
        do {
            accumulated = result;
            result = (accumulated + (value / accumulated)) >> 1;
        } while (accumulated > result);
        //if statement needs to be on the same line and ternary does not work the same way.
        return accumulated;
    }
    sqrtd(x) {
        if (x == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return 0.0;
        }
        if (x < 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return -1.0;
        }
        var result = x;
        ;
        for (var index = 0; index < this.ACCURACY; index++) {
            result = (result + (x / result)) / 2;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return result;
    }
    abs(value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return (value < 0)
            ?
                -value
            :
                value;
        ;
    }
    abslong(value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return (value < 0)
            ?
                -value
            :
                value;
        ;
    }
    min(value, value2) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return (value <= value2)
            ?
                value
            :
                value2;
        ;
    }
    max(value, value2) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return (value >= value2)
            ?
                value
            :
                value2;
        ;
    }
}
MathUtil.instance = new MathUtil();
