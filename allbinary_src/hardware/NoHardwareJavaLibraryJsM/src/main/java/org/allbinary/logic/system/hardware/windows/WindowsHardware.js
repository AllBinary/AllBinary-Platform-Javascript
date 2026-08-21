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
import { Object } from '../../../../../../java/lang/Object.js';
import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class WindowsHardware extends Object {
    constructor() {
        super();
    }
    getMultimedia(index) {
        throw new RuntimeException();
    }
    getBridge(index) {
        throw new RuntimeException();
    }
    getCpu(index) {
        throw new RuntimeException();
    }
    getEthernet(index) {
        throw new RuntimeException();
    }
    getFireWire(index) {
        throw new RuntimeException();
    }
    getHardDriveController(index) {
        throw new RuntimeException();
    }
    getHardDrive(index) {
        throw new RuntimeException();
    }
    getMachineAccessControlAddress(index) {
        throw new RuntimeException();
    }
    getMonitor(index) {
        throw new RuntimeException();
    }
    getUsb(index) {
        throw new RuntimeException();
    }
    getVideo(index) {
        throw new RuntimeException();
    }
    getComponent(index) {
        throw new RuntimeException();
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
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
