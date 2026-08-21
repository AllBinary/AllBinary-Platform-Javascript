/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { System } from '../../../java/lang/System.js';
import { MathUtil } from '../../../org/allbinary/logic/math/MathUtil.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
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
        var copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOfbyte(original, newLength) {
        var copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOfshort(original, newLength) {
        var copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOfint(original, newLength) {
        var copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOflong(original, newLength) {
        var copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOfchar(original, newLength) {
        var copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOffloat(original, newLength) {
        var copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOfdouble(original, newLength) {
        var copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    copyOfboolean(original, newLength) {
        var copy = new Array(newLength);
        ;
        System.arraycopy(original, 0, copy, 0, this.mathUtil.min(original.length, newLength));
        //if statement needs to be on the same line and ternary does not work the same way.
        return copy;
    }
    reverse(intArray) {
        var length = intArray.length - 1;
        ;
        var temp = 0;
        ;
        var size = length / 2;
        ;
        for (var index = 0; index <= size; index++) {
            temp = intArray[index];
            intArray[index] = intArray[length - index];
            intArray[length - index] = temp;
        }
    }
    flip(intArray, width, height) {
        var length = height - 1;
        ;
        var temp = 0;
        ;
        var index = 0;
        ;
        var rowIndex = 0;
        ;
        for (var y = 0; y <= length / 2; y++) {
            for (var x = 0; x < width; x++) {
                rowIndex = ((length - y) * width);
                index = x + (y * width);
                temp = intArray[index];
                intArray[index] = intArray[rowIndex + x];
                intArray[rowIndex + x] = temp;
            }
        }
    }
    toStringFromTwoDimensionaArray(twoDimensionalIntArray) {
        var stringBuffer = new StringMaker();
        ;
        var commonSeps = CommonSeps.getInstance();
        ;
        var endIndex = twoDimensionalIntArray.length;
        ;
        var endIndex2 = twoDimensionalIntArray[0].length;
        ;
        for (var index = 0; index < endIndex; index++) {
            stringBuffer.append(commonSeps.BRACE_OPEN);
            for (var index2 = 0; index2 < endIndex2; index2++) {
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
        var stringBuffer = new StringMaker();
        ;
        var commonSeps = CommonSeps.getInstance();
        ;
        for (var index = 0; index < objectArray.length; index++) {
            stringBuffer.append(StringUtil.getInstance().toString(objectArray[index]));
            stringBuffer.append(commonSeps.COMMA_SEP);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    toStringFromByteArray(byteArray) {
        var stringBuffer = new StringMaker();
        ;
        var commonSeps = CommonSeps.getInstance();
        ;
        for (var index = 0; index < byteArray.length; index++) {
            stringBuffer.appendbyte(byteArray[index]);
            stringBuffer.append(commonSeps.COMMA_SEP);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
ArrayUtil.instance = new ArrayUtil();
