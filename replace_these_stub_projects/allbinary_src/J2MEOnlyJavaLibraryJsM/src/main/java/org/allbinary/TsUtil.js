/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
/* Generated Code Do Not Modify */
import { Object } from '../../java/lang/Object.js';
import { System } from '../../java/lang/System.js';
//not GWT import const Displayable
import { Form } from '../../javax/microedition/lcdui/Form.js';
//not GWT import const RecordStoreNotOpenException
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
//J2ME
export class TsUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TsUtil.instance;
    }
    hashCode(anyType = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return anyType.hashCode();
        ;
    }
    //@Throws(InterruptedException.constructor)
    waitFor(any = {}, timeoutMillis) {
        var anyType = any;
        ;
        anyType.wait(timeoutMillis);
    }
    //@Throws(RecordStoreNotOpenException.constructor, InvalidRecordIDException.constructor, RecordStoreException.constructor)
    getRecord(anyType = {}, recordId) {
        var recordStore = anyType;
        ;
        var data;
        ;
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 
        //mutex.withLock
        data = new Array(recordStore.getRecordSize(recordId));
        recordStore.getRecord(recordId, data, 0);
        //if statement needs to be on the same line and ternary does not work the same way.
        return data.length < 1
            ?
                NullUtil.getInstance().NULL_BYTE_ARRAY
            :
                data;
        ;
    }
    compareTo(a, b) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return a.compareTo(b);
        ;
    }
    equalIgnoreCase(a, b) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return a.equalsIgnoreCase(b);
        ;
    }
    equalsNotstring(anyType = {}, object2 = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return anyType === object2;
        ;
    }
    toNumberFromChar(value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round(value);
    }
    toNumber(value) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return value;
    }
    getByteArray(string) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return string.getBytes();
        ;
    }
    isItemListener(owner) {
        if (owner instanceof Form) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    printAvailableMethods(anyType = {}) {
    }
    gc() {
        System.gc();
    }
}
TsUtil.instance = new TsUtil();
