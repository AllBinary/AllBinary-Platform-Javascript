/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { System } from '../../../../java/lang/System.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class StringMaker extends Object {
    constructor() {
        super();
        this.currentLength = 0;
        this.charArray = new Array(20);
    }
    append(string) {
        var stringLength = string.length;
        ;
        this.ensureCapacity(this.currentLength + stringLength);
        for (let i = 0; i < stringLength; i++) {
            this.charArray[this.currentLength + i - 0] =
                string.charAt(i);
        }
        ;
        this.currentLength += stringLength;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this;
    }
    appendchar(c) {
        this.ensureCapacity(this.currentLength + 1);
        this.charArray[this.currentLength++] = c;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this;
    }
    appendbyte(b) {
        this.append(b.toString());
        //if statement needs to be on the same line and ternary does not work the same way.
        return this;
    }
    appendshort(b) {
        this.append(b.toString());
        //if statement needs to be on the same line and ternary does not work the same way.
        return this;
    }
    appendint(i) {
        this.append(i.toString());
        //if statement needs to be on the same line and ternary does not work the same way.
        return this;
    }
    appendlong(l) {
        this.append(l.toString());
        //if statement needs to be on the same line and ternary does not work the same way.
        return this;
    }
    appendfloat(f) {
        this.append(f.toString());
        //if statement needs to be on the same line and ternary does not work the same way.
        return this;
    }
    appendboolean(bool) {
        if (bool) {
            this.ensureCapacity(this.currentLength + 4);
            this.charArray[this.currentLength++] = 't';
            this.charArray[this.currentLength++] = 'r';
            this.charArray[this.currentLength++] = 'u';
            this.charArray[this.currentLength++] = 'e';
        }
        else {
            this.ensureCapacity(this.currentLength + 5);
            this.charArray[this.currentLength++] = 'f';
            this.charArray[this.currentLength++] = 'a';
            this.charArray[this.currentLength++] = 'l';
            this.charArray[this.currentLength++] = 's';
            this.charArray[this.currentLength++] = 'e';
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this;
    }
    ensureCapacity(minSize) {
        var oldCapacity = this.charArray.length;
        ;
        if (minSize > oldCapacity) {
            var newCapacity = oldCapacity * 3;
            ;
            if (newCapacity < minSize)
                newCapacity = minSize;
            var copy = new Array(newCapacity);
            ;
            var min = this.min(this.charArray.length, newCapacity);
            ;
            System.arraycopy(this.charArray, 0, copy, 0, min);
            this.charArray = copy;
        }
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
    delete(start, end) {
        this.currentLength -= (end - start);
        //if statement needs to be on the same line and ternary does not work the same way.
        return this;
    }
    length() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentLength;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.charArray.slice(0, this.currentLength).join('');
    }
}
