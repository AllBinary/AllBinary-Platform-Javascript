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
import { Exception } from '../../../../../../java/lang/Exception.js';
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const HardwareInterface
import { ComponentFactory } from '../../../../../../org/allbinary/logic/system/hardware/components/ComponentFactory.js';
//not GWT import const VideoInterface
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class WindowsHardware extends Object {
    constructor() {
        super();
        this.NAME = "Windows Hardware Profile";
        this.MINHARDWARE = 0;
        this.componentFactory = ComponentFactory.getInstance();
        try {
            this.componentInterfaceVector = new BasicArrayListD();
            this.videoInterfaceVector = new BasicArrayListD();
            this.hardDriveControllerInterfaceVector = new BasicArrayListD();
            this.cpuInterfaceVector = new BasicArrayListD();
            this.usbInterfaceVector = new BasicArrayListD();
            this.ethernetInterfaceVector = new BasicArrayListD();
            this.multimediaInterfaceVector = new BasicArrayListD();
            this.fireWireInterfaceVector = new BasicArrayListD();
            this.bridgeInterfaceVector = new BasicArrayListD();
            this.hardDriveInterfaceVector = new BasicArrayListD();
            this.macInterfaceVector = new BasicArrayListD();
            this.monitorInterfaceVector = new BasicArrayListD();
            if (this.componentInterfaceVector.size() < this.MINHARDWARE)
                throw new Exception("Not Enough Data For A Valid License On Windows");
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    getComponentType(component) {
        if (component.indexOf(this.componentFactory.ETHERNET.toString()) >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.componentFactory.ETHERNET.toString();
            ;
        }
        else if (component.indexOf(this.componentFactory.BRIDGE.toString()) >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.componentFactory.BRIDGE.toString();
            ;
        }
        else if (component.indexOf(this.componentFactory.IDE.toString()) >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.componentFactory.IDE.toString();
            ;
        }
        else if (component.indexOf(this.componentFactory.MULTIMEDIA.toString()) >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.componentFactory.MULTIMEDIA.toString();
            ;
        }
        else if (component.indexOf(this.componentFactory.SCSI.toString()) >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.componentFactory.SCSI.toString();
            ;
        }
        else if (component.indexOf(this.componentFactory.USB.toString()) >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.componentFactory.USB.toString();
            ;
        }
        else if (component.indexOf(this.componentFactory.VGA.toString()) >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.componentFactory.VGA.toString();
            ;
        }
        else if ()
            ;
    }
    getMultimedia(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.multimediaInterfaceVector.get(index);
    }
    getBridge(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.bridgeInterfaceVector.get(index);
    }
    getCpu(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cpuInterfaceVector.get(index);
    }
    getEthernet(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ethernetInterfaceVector.get(index);
    }
    getFireWire(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fireWireInterfaceVector.get(index);
    }
    getHardDriveController(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hardDriveControllerInterfaceVector.get(index);
    }
    getHardDrive(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hardDriveInterfaceVector.get(index);
    }
    getMachineAccessControlAddress(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.macInterfaceVector.get(index);
    }
    getMonitor(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.monitorInterfaceVector.get(index);
    }
    getUsb(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.usbInterfaceVector.get(index);
    }
    getVideo(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.videoInterfaceVector.get(index);
    }
    getComponent(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.componentInterfaceVector.get(index);
    }
    toString() {
        var hardwareBuffer = new StringMaker();
        ;
        var size = this.componentInterfaceVector.size();
        ;
        for (var index = 0; index < size; index++) {
            var componentInterface = this.componentInterfaceVector.get(index);
            ;
            hardwareBuffer.append(componentInterface.toString());
            hardwareBuffer.append(CommonSeps.getInstance().NEW_LINE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return hardwareBuffer.toString();
        ;
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
