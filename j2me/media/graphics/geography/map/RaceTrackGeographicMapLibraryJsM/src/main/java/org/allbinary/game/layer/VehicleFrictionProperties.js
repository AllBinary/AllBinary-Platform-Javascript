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
import { FrictionProperties } from '../../../../org/allbinary/game/physics/FrictionProperties.js';
//not GWT import const FrictionProperties = globalThis.org.allbinary.game.physics.FrictionProperties;
import { FrictionData } from '../../../../org/allbinary/game/physics/friction/FrictionData.js';
//not GWT import const FrictionData = globalThis.org.allbinary.game.physics.friction.FrictionData;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class VehicleFrictionProperties extends FrictionProperties {
    constructor(tireFriction, brakeFriction, airFriction, crashFriction) {
        super();
        this.TIRE_FRICTION_NOMINATOR = FrictionData.getFrictionDenominator() - tireFriction;
        this.BRAKE_FRICTION_NOMINATOR = FrictionData.getFrictionDenominator() - brakeFriction;
        this.AIR_FRICTION_NOMINATOR = FrictionData.getFrictionDenominator() - airFriction;
        this.CRASH_FRICTION_NOMINATOR = FrictionData.getFrictionDenominator() - crashFriction;
    }
    getTireFrictionNominator() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.TIRE_FRICTION_NOMINATOR;
    }
    getBrakeFrictionNominator() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.BRAKE_FRICTION_NOMINATOR;
    }
    getAirFrictionNominator() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.AIR_FRICTION_NOMINATOR;
    }
    getCrashFrictionNominator() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.CRASH_FRICTION_NOMINATOR;
    }
}
