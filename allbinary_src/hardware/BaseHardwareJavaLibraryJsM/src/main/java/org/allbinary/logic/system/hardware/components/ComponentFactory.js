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
var _a, _b;
var _c;
/* Generated Code Do Not Modify */
import { Object } from '../../../../../../java/lang/Object.js';
//import { Class } from '../../../../../../java/lang/Class.js';
const Class = ((_c = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.lang) === null || _b === void 0 ? void 0 : _b.Class) !== null && _c !== void 0 ? _c : class {
});
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Component } from './Component.js';
//sameFolderImports - not GWT import - same folder const Component
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
