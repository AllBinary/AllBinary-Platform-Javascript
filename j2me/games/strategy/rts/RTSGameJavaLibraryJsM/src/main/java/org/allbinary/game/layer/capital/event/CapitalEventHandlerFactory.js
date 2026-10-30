/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2003 AllBinary
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
import { Object } from '../../../../../../java/lang/Object.js';
//not GWT import const Group
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CapitalEventHandler } from './CapitalEventHandler.js';
//sameFolderImports - not GWT import - same folder const CapitalEventHandler
export class CapitalEventHandlerFactory extends Object {
    static init() {
        for (let index = CapitalEventHandlerFactory.capitalEventHandlerArray.length - 1; index >= 0; index--) {
            CapitalEventHandlerFactory.capitalEventHandlerArray[index] = new CapitalEventHandler();
        }
        return 0;
    }
    static getInstance(groupInterface) {
        let groupId = globalThis.Math.trunc(groupInterface.getGroupId());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return CapitalEventHandlerFactory.capitalEventHandlerArray[groupId];
    }
    static removeAll() {
        for (let index = CapitalEventHandlerFactory.capitalEventHandlerArray.length - 1; index >= 0; index--) {
            CapitalEventHandlerFactory.capitalEventHandlerArray[index].removeAllListeners();
        }
    }
}
CapitalEventHandlerFactory.capitalEventHandlerArray = new Array(10);
CapitalEventHandlerFactory.initResult = CapitalEventHandlerFactory.init();
