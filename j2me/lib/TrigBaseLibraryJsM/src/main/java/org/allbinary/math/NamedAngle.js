/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { Angle } 
const Angle = globalThis.org.allbinary.math.Angle;
export class NamedAngle extends Angle {
    constructor(angle, name) {
        super(angle);
        //For kotlin this is before the body of the constructor.
        this.name = name;
    }
}
