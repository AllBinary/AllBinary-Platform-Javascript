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
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Component } from './Component.js';
//not GWT import - same folder const Component = globalThis.org.allbinary.logic.system.hardware.components.Component;
export class ComponentFactory extends Object {
    constructor() {
        super(...arguments);
        this.VGA = new Component("VGA");
        this.IDE = new Component("IDE");
        this.SCSI = new Component("SCSI");
        this.BRIDGE = new Component("bridge");
        this.ETHERNET = new Component("Ethernet");
        this.USB = new Component("USB");
        this.MULTIMEDIA = new Component("Multimedia");
        this.PCI = new Component("PCI");
        this.RAID = new Component("RAID");
        this.SMBUS = new Component("SMBus");
        this.PIC = new Component("PIC");
        this.Class = new Component("Class");
        this.UNKNOWN = new Component(CommonStrings.getInstance().UNKNOWN);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ComponentFactory.instance;
    }
}
ComponentFactory.instance = new ComponentFactory();
