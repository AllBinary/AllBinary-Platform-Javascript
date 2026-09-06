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
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { IndexedBasicArrayListCache } from './IndexedBasicArrayListCache.js';
//not GWT import - same folder const IndexedBasicArrayListCache = globalThis.org.allbinary.logic.util.cache.IndexedBasicArrayListCache;
export class KeylessBasicArrayListCache extends IndexedBasicArrayListCache {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.basicArrayListUtil = BasicArrayListUtil.getInstance();
    }
    get() {
        try {
            if (this.index >= this.list.size()) {
                this.addDefault();
            }
            var list = this.getAt(this.index++);
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return list;
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.GET, e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.basicArrayListUtil.getImmutableInstance();
            ;
        }
    }
    clear() {
        super.clear();
        var basicArrayList;
        ;
        for (var index = this.list.size() - 1; index >= 0; index--) {
            basicArrayList = this.list.objectArray[index];
            basicArrayList.clear();
        }
    }
    log() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("S: ");
        stringBuffer.appendint(this.list.size());
        var S_LABEL = " s: ";
        ;
        var basicArrayList;
        ;
        for (var index = this.list.size() - 1; index >= 0; index--) {
            stringBuffer.append(S_LABEL);
            basicArrayList = this.list.objectArray[index];
            stringBuffer.appendint(basicArrayList.size());
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
