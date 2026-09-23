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
import { Object } from '../../../../../java/lang/Object.js';
import { Exception } from '../../../../../java/lang/Exception.js';
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import - same folder const CacheableInterface
export class AbstractArrayListPool extends Object {
    constructor(cacheableInterfaceFactoryInterface) {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.buffers = new BasicArrayListD();
        this.cacheableInterfaceFactoryInterface = cacheableInterfaceFactoryInterface;
    }
    //@Throws(Exception.constructor)
    clear() {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    remove(key = {}) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    add(cacheableInterface) {
        this.buffers.add(cacheableInterface);
    }
    //@Throws(Exception.constructor)
    addArray(cacheableInterfaces) {
        for (var index = 0; index < cacheableInterfaces.length; index++) {
            this.buffers.add(cacheableInterfaces[index]);
        }
    }
}
