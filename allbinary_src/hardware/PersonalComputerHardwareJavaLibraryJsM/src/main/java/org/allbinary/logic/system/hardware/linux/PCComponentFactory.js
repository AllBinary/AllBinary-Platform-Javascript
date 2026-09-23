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
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { LogConfigTypeFactory } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js';
//not GWT import const LogConfigTypeFactory
import { LogConfigTypes } from '../../../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js';
//not GWT import const LogConfigTypes
import { ComponentFactory } from '../../../../../../org/allbinary/logic/system/hardware/components/ComponentFactory.js';
//not GWT import const HardwareComponentInterface
import { Bridge } from '../../../../../../org/allbinary/logic/system/hardware/components/linux/Bridge.js';
//not GWT import const Bridge
import { Ethernet } from '../../../../../../org/allbinary/logic/system/hardware/components/linux/Ethernet.js';
//not GWT import const Ethernet
import { HardDriveController } from '../../../../../../org/allbinary/logic/system/hardware/components/linux/HardDriveController.js';
//not GWT import const HardDriveController
import { Media } from '../../../../../../org/allbinary/logic/system/hardware/components/linux/Media.js';
//not GWT import const Media
import { PCI } from '../../../../../../org/allbinary/logic/system/hardware/components/linux/PCI.js';
//not GWT import const PCI
import { Unknown } from '../../../../../../org/allbinary/logic/system/hardware/components/linux/Unknown.js';
//not GWT import const Unknown
import { Usb } from '../../../../../../org/allbinary/logic/system/hardware/components/linux/Usb.js';
//not GWT import const Usb
import { Video } from '../../../../../../org/allbinary/logic/system/hardware/components/linux/Video.js';
//not GWT import const Video
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PCComponentFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PCComponentFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.componentFactory = ComponentFactory.getInstance();
    }
    getInstance(component, componentData) {
        try {
            if (component !=
                null) {
                if (component.compareTo(this.componentFactory.ETHERNET.toString()) == 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return new Ethernet(componentData);
                }
                else if (component.compareTo(this.componentFactory.BRIDGE.toString()) == 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return new Bridge(componentData);
                }
                else if (component.compareTo(this.componentFactory.IDE.toString()) == 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return new HardDriveController(componentData);
                }
                else if (component.compareTo(this.componentFactory.MULTIMEDIA.toString()) == 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return new Media(componentData);
                }
                else if (component.compareTo(this.componentFactory.SCSI.toString()) == 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return new HardDriveController(componentData);
                }
                else if (component.compareTo(this.componentFactory.USB.toString()) == 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return new Usb(componentData);
                }
                else if (component.compareTo(this.componentFactory.VGA.toString()) == 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return new Video(componentData);
                }
                else if (component.compareTo(this.componentFactory.PCI.toString()) == 0) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return new PCI(componentData);
                }
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return new Unknown(componentData);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            if (LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance().FACTORYERROR)) {
                this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.GET_INSTANCE, e);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return new Unknown(commonStrings.EXCEPTION);
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
        else if (component.compareTo(this.componentFactory.PCI.toString()) == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.componentFactory.PCI.toString();
            ;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.componentFactory.UNKNOWN.toString();
        ;
    }
}
PCComponentFactory.instance = new PCComponentFactory();
