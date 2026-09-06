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
//not plain js import { Angle } 
const Angle = globalThis.org.allbinary.math.Angle;
//not plain js import { AngleFactory } 
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicTerrainInfo extends Object {
    constructor(angle) {
        super();
        this.angle = angle;
    }
    getAngle() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.angle;
    }
    setAngle(angle) {
        this.angle = angle;
    }
}
BasicTerrainInfo.NULL_BASIC_TERRAIN_INFO = new BasicTerrainInfo(AngleFactory.getInstance().NOT_ANGLE);
