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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbstractArrayListPool } from './AbstractArrayListPool.js';
export class BasicArrayListResetablePool extends AbstractArrayListPool {
    constructor(cacheableInterfaceFactoryInterface) {
        super(cacheableInterfaceFactoryInterface);
        //For kotlin this is before the body of the constructor.
    }
    clear() {
    }
    //@Throws(Exception.constructor)
    remove(key = {}) {
        var size = this.buffers.size();
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
}
