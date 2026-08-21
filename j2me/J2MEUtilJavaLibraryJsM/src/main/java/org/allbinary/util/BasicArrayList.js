/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { IndexOutOfBoundsException } from '../../../java/lang/IndexOutOfBoundsException.js';
import { System } from '../../../java/lang/System.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { CommonLabels } from '../../../org/allbinary/string/CommonLabels.js';
import { CommonSeps } from '../../../org/allbinary/string/CommonSeps.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ArrayUtil } from './ArrayUtil.js';
import { BasicArrayListS } from './BasicArrayListS.js';
//This is a very fast and simple resizable list.
export class BasicArrayList extends Object {
    constructor(objectArray) {
        super();
        this.arrayUtil = ArrayUtil.getInstance();
        this.currentIndex = 0;
        this.objectArray = objectArray;
    }
    addAt(index, element = {}) {
        if (index > this.currentIndex || index < 0) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(CommonLabels.getInstance().INDEX_LABEL);
            stringBuffer.appendint(index);
            stringBuffer.append(BasicArrayList.SIZE);
            stringBuffer.appendint(this.currentIndex);
            throw new IndexOutOfBoundsException(stringBuffer.toString());
        }
        this.ensureCapacity(this.currentIndex + 1);
        System.arraycopy(this.objectArray, index, this.objectArray, index + 1, this.currentIndex - index);
        this.objectArray[index] = element;
        this.currentIndex++;
    }
    add(anyType = {}) {
        this.ensureCapacity(this.currentIndex + 1);
        this.objectArray[this.currentIndex++] = anyType;
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    removeAt(index) {
        if (index >= this.currentIndex) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(CommonLabels.getInstance().INDEX_LABEL);
            stringBuffer.appendint(index);
            stringBuffer.append(BasicArrayList.SIZE);
            stringBuffer.appendint(this.currentIndex);
            throw new IndexOutOfBoundsException(stringBuffer.toString());
        }
        var oldValue = this.objectArray[index];
        ;
        var numMoved = this.currentIndex - index - 1;
        ;
        if (numMoved > 0) {
            System.arraycopy(this.objectArray, index + 1, this.objectArray, index, numMoved);
        }
        this.objectArray[--this.currentIndex] =
            null;
        //if statement needs to be on the same line and ternary does not work the same way.
        return oldValue;
    }
    remove(anyType = {}) {
        if (anyType ==
            null) {
            for (var index = 0; index < this.currentIndex; index++) {
                if (this.objectArray[index] ==
                    null) {
                    var numMoved = this.currentIndex - index - 1;
                    ;
                    if (numMoved > 0) {
                        System.arraycopy(this.objectArray, index + 1, this.objectArray, index, numMoved);
                    }
                    this.objectArray[--this.currentIndex] =
                        null;
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
        }
        else {
            for (var index = 0; index < this.currentIndex; index++) {
                if (anyType == this.objectArray[index] || anyType === this.objectArray[index]) {
                    var numMoved = this.currentIndex - index - 1;
                    ;
                    if (numMoved > 0) {
                        System.arraycopy(this.objectArray, index + 1, this.objectArray, index, numMoved);
                    }
                    this.objectArray[--this.currentIndex] =
                        null;
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    removeAll2(list) {
        var result = true;
        ;
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            if (this.remove(list.get(index))) {
            }
            else {
                result = false;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return result;
    }
    addAll2(list) {
        this.ensureCapacity(this.currentIndex + list.currentIndex);
        var listSize = list.currentIndex;
        ;
        for (var index = 0; index < listSize; index++) {
            this.objectArray[this.currentIndex++] = list.objectArray[index];
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    addAllList(list) {
        var newObjectArray = list.toArray();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.addAll(newObjectArray);
        ;
    }
    addAll(newObjectArray) {
        var numSize = newObjectArray.length;
        ;
        this.ensureCapacity(this.currentIndex + numSize);
        System.arraycopy(newObjectArray, 0, this.objectArray, this.currentIndex, numSize);
        this.currentIndex += numSize;
        //if statement needs to be on the same line and ternary does not work the same way.
        return numSize != 0;
    }
    ensureCapacity(minSize) {
        var oldCapacity = this.objectArray.length;
        ;
        if (minSize > oldCapacity) {
            var newCapacity = ((oldCapacity * 3) >> 1) + 1;
            ;
            if (newCapacity < minSize) {
                newCapacity = minSize;
            }
            this.objectArray = this.arrayUtil.copyOf(this.objectArray, newCapacity);
        }
    }
    trimToSize() {
        var oldCapacity = this.objectArray.length;
        ;
        if (this.currentIndex < oldCapacity) {
            this.objectArray = this.arrayUtil.copyOf(this.objectArray, this.currentIndex);
        }
    }
    indexOf(anyType = {}) {
        if (anyType ==
            null) {
            for (var i = 0; i < this.currentIndex; i++) {
                if (this.objectArray[i] ==
                    null) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return i;
                }
            }
        }
        else {
            for (var i = 0; i < this.currentIndex; i++) {
                if (anyType === this.objectArray[i]) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return i;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    lastIndexOf(anyType = {}) {
        if (anyType ==
            null) {
            for (var i = this.currentIndex - 1; i >= 0; i--) {
                if (this.objectArray[i] ==
                    null) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return i;
                }
            }
        }
        else {
            for (var i = this.currentIndex - 1; i >= 0; i--) {
                if (anyType === this.objectArray[i]) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return i;
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    get(index) {
        if (index >= this.currentIndex) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(CommonLabels.getInstance().INDEX_LABEL);
            stringBuffer.appendint(index);
            stringBuffer.append(BasicArrayList.SIZE);
            stringBuffer.appendint(this.currentIndex);
            throw new IndexOutOfBoundsException(stringBuffer.toString());
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.objectArray[index];
    }
    set(index, element = {}) {
        if (index >= this.currentIndex) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(CommonLabels.getInstance().INDEX_LABEL);
            stringBuffer.appendint(index);
            stringBuffer.append(BasicArrayList.SIZE);
            stringBuffer.appendint(this.currentIndex);
            throw new IndexOutOfBoundsException(stringBuffer.toString());
        }
        var oldValue = this.objectArray[index];
        ;
        this.objectArray[index] = element;
        //if statement needs to be on the same line and ternary does not work the same way.
        return oldValue;
    }
    clear() {
        for (var i = 0; i < this.currentIndex; i++) {
            this.objectArray[i] =
                null;
        }
        this.currentIndex = 0;
    }
    size() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentIndex;
    }
    isEmpty() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentIndex == 0;
    }
    contains(anyType = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.indexOf(anyType) >= 0;
    }
    toArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.arrayUtil.copyOf(this.objectArray, this.currentIndex);
        ;
    }
    toArrayType(objectArray) {
        if (objectArray.length < this.currentIndex) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.arrayUtil.copyOfType(this.objectArray, this.currentIndex, objectArray.constructor);
            ;
        }
        System.arraycopy(this.objectArray, 0, objectArray, 0, this.currentIndex);
        if (objectArray.length > this.currentIndex) {
            objectArray[this.currentIndex] =
                null;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return objectArray;
    }
    clone() {
        var size = this.size();
        ;
        var list = new BasicArrayListS(size);
        ;
        var anyType;
        ;
        for (var index = 0; index < size; index++) {
            anyType = this.objectArray[index];
            list.add(anyType);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return list;
    }
    toString() {
        var COMMA_SEP = CommonSeps.getInstance().COMMA_SEP;
        ;
        var stringBuffer = new StringMaker();
        ;
        for (var index = 0; index < this.currentIndex; index++) {
            stringBuffer.append(this.objectArray[index].toString());
            stringBuffer.append(COMMA_SEP);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
BasicArrayList.SIZE = ", Size: ";
