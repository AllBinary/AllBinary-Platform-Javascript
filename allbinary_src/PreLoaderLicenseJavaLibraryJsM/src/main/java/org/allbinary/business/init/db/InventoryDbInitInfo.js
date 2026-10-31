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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DbInitInfo } from './DbInitInfo.js';
//sameFolderImports - not GWT import - same folder const DbInitInfo
export class InventoryDbInitInfo extends DbInitInfo {
    constructor(...args) {
        if (args.length === 0) {
            super(INITFILE, true);
            this.constructor$0();
        }
        else if (args.length === 1) {
            const read = args[0];
            super(INITFILE, read);
            this.constructor$1(read);
        }
    }
    constructor$0() {
        //For kotlin this is before the body of the constructor.
    }
    constructor$1(read) {
        //For kotlin this is before the body of the constructor.
    }
}
InventoryDbInitInfo.INITFILE = "inventorydbinitdata.dat";
