/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2026 AllBinary
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
import { Hashtable } from '../../../java/util/Hashtable.js';
//not GWT import const Hashtable
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ABHashtable extends Hashtable {
    constructor(...args) {
        if (args.length === 1) {
            const initialCapacity = args[0];
            super(initialCapacity);
            this.constructor$0(initialCapacity);
        }
        else if (args.length === 0) {
            super();
            this.constructor$1();
        }
    }
    constructor$0(initialCapacity) {
        //For kotlin this is before the body of the constructor.
    }
    constructor$1() {
        //For kotlin this is before the body of the constructor.
    }
}
