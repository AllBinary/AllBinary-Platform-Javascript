/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2007 AllBinary
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
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import - same folder const CacheType = globalThis.org.allbinary.logic.util.cache.CacheType;
export class PoolType extends Object {
    constructor(cacheType) {
        super();
        this.cacheType = cacheType;
    }
    getCacheType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cacheType;
    }
    toString() {
        var POOL_TYPE = "PoolType: ";
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return POOL_TYPE + this.getCacheType().toString();
    }
}
