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
import { Exception } from '../../../../../java/lang/Exception.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseBasicArrayListCache } from './BaseBasicArrayListCache.js';
export class IndexedBasicArrayListCache extends BaseBasicArrayListCache {
    //@Throws(Exception.constructor)
    static createCache(size) {
        var indexedBasicArrayListCache = new IndexedBasicArrayListCache();
        ;
        indexedBasicArrayListCache.init(size);
        //if statement needs to be on the same line and ternary does not work the same way.
        return indexedBasicArrayListCache;
    }
    constructor() {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.size = 0;
        this.index = 0;
    }
    //@Throws(Exception.constructor)
    init(size) {
        if (this.size < size) {
            this.list.ensureCapacity(size);
            for (var index = size - 1; index >= this.size; index--) {
                this.addDefault();
            }
            this.size = size;
        }
    }
    getAt(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.list.objectArray[index];
    }
    //@Throws(Exception.constructor)
    addDefault() {
    }
    //@Throws(Exception.constructor)
    addObject(anyType) {
        this.list.add(anyType);
    }
    //@Throws(Exception.constructor)
    add(cacheableInterface) {
        this.list.add(cacheableInterface);
    }
    //@Throws(Exception.constructor)
    addArray(cacheableInterfaces) {
        throw new Exception("No Imple");
    }
    clear() {
        this.index = 0;
    }
}
