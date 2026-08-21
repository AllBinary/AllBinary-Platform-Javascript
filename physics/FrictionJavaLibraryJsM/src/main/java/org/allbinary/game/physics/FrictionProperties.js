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
import { FrictionData } from '../../../../org/allbinary/game/physics/friction/FrictionData.js';
import { DragVelocityBehavior } from '../../../../org/allbinary/game/physics/velocity/DragVelocityBehavior.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class FrictionProperties extends Object {
    constructor() {
        super();
    }
    friction(velocityProperties, nominator) {
        DragVelocityBehavior.instance.reduce(velocityProperties, nominator, FrictionData.getFrictionDenominator());
    }
}
