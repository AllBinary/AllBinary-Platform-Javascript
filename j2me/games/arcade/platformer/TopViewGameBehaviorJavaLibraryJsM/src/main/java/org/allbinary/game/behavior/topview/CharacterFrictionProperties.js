/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
import { FrictionProperties } from '../../../../../org/allbinary/game/physics/FrictionProperties.js';
//not GWT import const FrictionProperties
import { FrictionData } from '../../../../../org/allbinary/game/physics/friction/FrictionData.js';
//not GWT import const FrictionData
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CharacterFrictionProperties extends FrictionProperties {
    constructor(airFriction, waterFriction, collisionFriction) {
        super();
        this.AIR_FRICTION_NOMINATOR = FrictionData.getFrictionDenominator() - airFriction;
        this.COLLISION_FRICTION_NOMINATOR = FrictionData.getFrictionDenominator() - collisionFriction;
        this.WATER_FRICTION_NOMINATOR = FrictionData.getFrictionDenominator() - waterFriction;
    }
    getWATER_FRICTION_NOMINATOR() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.WATER_FRICTION_NOMINATOR;
    }
    getAIR_FRICTION_NOMINATOR() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.AIR_FRICTION_NOMINATOR;
    }
    getCOLLISION_FRICTION_NOMINATOR() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.COLLISION_FRICTION_NOMINATOR;
    }
}
