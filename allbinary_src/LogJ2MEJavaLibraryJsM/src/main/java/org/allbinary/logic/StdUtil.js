/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { Hashtable } from '../../../java/util/Hashtable.js';
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
import { Stack } from '../../../java/util/Stack.js';
//not GWT import const Stack = globalThis.java.util.Stack;
//Current folder imports from return types, extended types, and scope (deduplicated)
//ActualPlatform
/*actual*/ export class StdUtil extends Object {
    constructor() {
        super(...arguments);
        /*actual*/ this.NULL_TABLE = this.createHashtable();
    }
    /*actual*/ static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StdUtil.instance;
    }
    createStack() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Stack();
    }
    createHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Hashtable();
    }
}
StdUtil.instance = new StdUtil();
