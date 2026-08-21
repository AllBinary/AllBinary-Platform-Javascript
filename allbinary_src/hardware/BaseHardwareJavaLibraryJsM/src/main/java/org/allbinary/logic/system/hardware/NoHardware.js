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
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
import { NoHardwareComponent } from '../../../../../org/allbinary/logic/system/hardware/components/interfaces/NoHardwareComponent.js';
export class NoHardware extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NoHardware.instance;
    }
    getComponent(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NoHardwareComponent.getInstance();
        ;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return "No Hardware";
    }
    compareTo(hardwareInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    difference(hardwareInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.getInstance().NULL_TABLE;
    }
}
NoHardware.instance = new NoHardware();
