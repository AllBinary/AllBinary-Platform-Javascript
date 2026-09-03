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
import { Object } from '../../../../../../../java/lang/Object.js';
import { FrictionData } from '../../../../../../../org/allbinary/game/physics/friction/FrictionData.js';
//not GWT import const FrictionData = globalThis.org.allbinary.game.physics.friction.FrictionData;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RaceTrackFrictionProperties extends Object {
    constructor(roadFriction, groundFriction) {
        super();
        this.ROAD_FRICTION_NOMINATOR = FrictionData.getFrictionDenominator() - roadFriction;
        this.GROUND_FRICTION_NOMINATOR = FrictionData.getFrictionDenominator() - groundFriction;
    }
    getRoadFrictionNominator() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ROAD_FRICTION_NOMINATOR;
    }
    getGroundFrictionNominator() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.GROUND_FRICTION_NOMINATOR;
    }
}
