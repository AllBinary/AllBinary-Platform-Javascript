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
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbstractArrayListPool } from './AbstractArrayListPool.js';
//sameFolderImports - not GWT import - same folder const BasicArrayListCacheable
export class BasicArrayListPool extends AbstractArrayListPool {
    constructor(cacheableInterfaceFactoryInterface) {
        super(cacheableInterfaceFactoryInterface);
        //For kotlin this is before the body of the constructor.
    }
    clear() {
        this.buffers.clear();
    }
    //@Throws(Exception.constructor)
    remove(key) {
        let size = this.buffers.size();
        ;
        if (size > 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.buffers.removeAt(size - 1);
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.cacheableInterfaceFactoryInterface.getInstance(key);
            ;
        }
    }
    //@Throws(Exception.constructor)
    addAll(usedList) {
        for (let index = usedList.size(); --index >= 0;) {
            let anyType = usedList.objectArray[index];
            ;
            this.add(anyType);
        }
        usedList.clear();
    }
    //@Throws(Exception.constructor)
    releaseUsedBackToPool(usedList) {
        for (let index = usedList.size(); --index >= 0;) {
            let list = usedList.objectArray[index];
            ;
            if (list.size() == 0) {
                usedList.removeAt(index);
                this.add(list);
            }
        }
    }
}
