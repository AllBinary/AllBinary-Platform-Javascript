/* Generated Code Do Not Modify */
var _a, _b;
var _c;
import { Object } from '../../../java/lang/Object.js';
//import { Class } from '../../../java/lang/Class.js';
const Class = ((_c = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.lang) === null || _b === void 0 ? void 0 : _b.Class) !== null && _c !== void 0 ? _c : class {
});
import { System } from '../../../java/lang/System.js';
//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ArrayUtil extends Object {
    constructor() {
        super(...arguments);
        this.mathUtil = MathUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ArrayUtil.instance;
    }
    copyOf(original, newLength) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.copyOfType(original, newLength, original.constructor);
        ;
    }
    copyOfType(original, newLength, newType) {
        let copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOfbyte(original, newLength) {
        let copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOfshort(original, newLength) {
        let copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOfint(original, newLength) {
        let copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOflong(original, newLength) {
        let copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOfchar(original, newLength) {
        let copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOffloat(original, newLength) {
        let copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOfdouble(original, newLength) {
        let copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOfboolean(original, newLength) {
        let copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    reverse(intArray) {
        let length = intArray.length - 1;
        ;
        let temp = 0;
        ;
        let size = globalThis.Math.trunc(length / 2);
        ;
        for (let index = 0; index <= size; index++) {
            temp = intArray[index];
            intArray[index] = intArray[length - index];
            intArray[length - index] = temp;
        }
    }
    flip(intArray, width, height) {
        let length = height - 1;
        ;
        let temp = 0;
        ;
        let index = 0;
        ;
        let rowIndex = 0;
        ;
        for (let y = 0; y <= globalThis.Math.trunc(length / 2); y++) {
            for (let x = 0; x < width; x++) {
                rowIndex = ((length - y) * width);
                index = x + (y * width);
                temp = intArray[index];
                intArray[index] = intArray[rowIndex + x];
                intArray[rowIndex + x] = temp;
            }
        }
    }
    toStringFromTwoDimensionaArray(twoDimensionalIntArray) {
        let stringBuffer = new StringMaker();
        ;
        let commonSeps = CommonSeps.getInstance();
        ;
        let endIndex = twoDimensionalIntArray.length;
        ;
        let endIndex2 = twoDimensionalIntArray[0].length;
        ;
        for (let index = 0; index < endIndex; index++) {
            stringBuffer.append(commonSeps.BRACE_OPEN);
            for (let index2 = 0; index2 < endIndex2; index2++) {
                stringBuffer.appendint(twoDimensionalIntArray[index][index2]);
                stringBuffer.append(commonSeps.COMMA_SEP);
            }
            stringBuffer.append(commonSeps.BRACE_CLOSE);
            stringBuffer.append(commonSeps.NEW_LINE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    toStringFromObjectArray(objectArray) {
        let stringBuffer = new StringMaker();
        ;
        let commonSeps = CommonSeps.getInstance();
        ;
        for (let index = 0; index < objectArray.length; index++) {
            stringBuffer.append(StringUtil.getInstance().toString(objectArray[index]));
            stringBuffer.append(commonSeps.COMMA_SEP);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    toStringFromByteArray(byteArray) {
        let stringBuffer = new StringMaker();
        ;
        let commonSeps = CommonSeps.getInstance();
        ;
        for (let index = 0; index < byteArray.length; index++) {
            stringBuffer.appendbyte(byteArray[index]);
            stringBuffer.append(commonSeps.COMMA_SEP);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
ArrayUtil.instance = new ArrayUtil();
