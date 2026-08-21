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
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
import { GameFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SourceCollisionHelper } from './SourceCollisionHelper.js';
import { CollisionHelper } from './CollisionHelper.js';
export class CollidableHelperFactory extends Object {
    static getInstance() {
        if (Features.getInstance().isFeature(GameFeatureFactory.getInstance().COLLISIONS_WITH_SOURCE)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new CollisionHelper(AllBinaryLayer.NULL_ALLBINARY_LAYER);
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new SourceCollisionHelper(AllBinaryLayer.NULL_ALLBINARY_LAYER);
        }
    }
}
