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
import { Object } from '../../../java/lang/Object.js';
import { Hashtable } from '../../../java/util/Hashtable.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class KeyValueFactory extends Object {
    constructor() {
        super(...arguments);
        this.MAP = new Hashtable();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return KeyValueFactory.instance;
    }
    get(key) {
        var value = this.MAP.get(key);
        ;
        if (value ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return key;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return value;
    }
}
KeyValueFactory.instance = new KeyValueFactory();
