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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const GenericOperatingSystem
import { OperatingSystemFactory } from '../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ColorFillPaintable } from './ColorFillPaintable.js';
//not GWT import - same folder const ColorFillPaintable
import { OverScanColorFillPaintable } from './OverScanColorFillPaintable.js';
//not GWT import - same folder const ColorFillBasePaintable
export class ColorFillPaintableFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ColorFillPaintableFactory.instance;
    }
    getInstance(basicColor, forThreedCanvas) {
        var operatingSystem = OperatingSystemFactory.getInstance().getOperatingSystemInstance();
        ;
        if (operatingSystem.isOverScan()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new OverScanColorFillPaintable(basicColor);
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new ColorFillPaintable(basicColor);
        }
    }
}
ColorFillPaintableFactory.instance = new ColorFillPaintableFactory();
