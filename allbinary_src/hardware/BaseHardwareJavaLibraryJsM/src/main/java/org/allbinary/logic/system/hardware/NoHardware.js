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
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const HardwareComponentInterface = globalThis.org.allbinary.logic.system.hardware.components.interfaces.HardwareComponentInterface;
import { NoHardwareComponent } from '../../../../../org/allbinary/logic/system/hardware/components/interfaces/NoHardwareComponent.js';
//not GWT import const HardwareInterface = globalThis.org.allbinary.logic.system.hardware.HardwareInterface;
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
        return StdUtil.getInstance().NULL_TABLE;
    }
}
NoHardware.instance = new NoHardware();
