/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
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
import { Object } from '../../../java/lang/Object.js';
//not GWT import const Enumeration
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { EnumerationUtil } 
const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;
//not plain js - same folder import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js - same folder import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//not plain js - same folder import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
export class HashtableUtil extends Object {
    constructor() {
        super(...arguments);
        this.enumerationUtil = EnumerationUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return HashtableUtil.instance;
    }
    putAll(fromHashtable, hashtable) {
        var enumeration = fromHashtable.keys();
        ;
        var keyCanBeNull;
        ;
        var valueCanBeNull;
        ;
        while (this.enumerationUtil.hasMoreElements(enumeration)) {
            keyCanBeNull = this.enumerationUtil.nextElement(enumeration);
            valueCanBeNull = hashtable.get(keyCanBeNull);
            if (valueCanBeNull ==
                null) {
            }
            else {
                hashtable.put(keyCanBeNull, valueCanBeNull);
            }
        }
    }
    getKeysAsArray(hashtable) {
        var objectArray = new Array(hashtable.size());
        ;
        var index = 0;
        ;
        var enumeration = hashtable.keys();
        ;
        while (this.enumerationUtil.hasMoreElements(enumeration)) {
            objectArray[index++] = this.enumerationUtil.nextElement(enumeration);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return objectArray;
    }
    getKeysAsList(hashtable) {
        var list = new BasicArrayListS(hashtable.size());
        ;
        var enumeration = hashtable.keys();
        ;
        while (this.enumerationUtil.hasMoreElements(enumeration)) {
            list.add(this.enumerationUtil.nextElement(enumeration));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return list;
    }
}
HashtableUtil.instance = new HashtableUtil();
