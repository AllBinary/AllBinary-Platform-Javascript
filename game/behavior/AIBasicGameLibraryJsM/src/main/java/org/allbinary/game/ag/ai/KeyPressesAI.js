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
//not GWT import const AllBinaryLayerManager
//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const BasicAI
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class KeyPressesAI extends BasicAI {
    constructor(hashtable, ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        this.on = true;
        //For kotlin this is before the body of the constructor.
        this.keys = new Array(hashtable.size());
        var objectArray = HashtableUtil.getInstance().getKeysAsArray(hashtable);
        ;
        var size = objectArray.length;
        ;
        for (var index = 0; index < size; index++) {
            this.keys[index] = hashtable.get(objectArray[index]);
        }
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        if (this.on) {
            for (var index = 0; index < this.keys.length; index++) {
                super.processKeyAI(this.keys[index].intValue());
            }
        }
    }
    //@Throws(Exception.constructor)
    toggle() {
        if (this.isOn()) {
            this.setOn(false);
        }
        else {
            this.setOn(true);
        }
    }
    //@Throws(Exception.constructor)
    disable() {
        this.setOn(false);
    }
    //@Throws(Exception.constructor)
    enable() {
        this.setOn(true);
    }
    setOn(on) {
        this.on = on;
    }
    isOn() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.on;
    }
}
