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
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { GameFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
//not GWT import const GameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GameFeatureFactory;
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SourceCollisionHelper } from './SourceCollisionHelper.js';
//not GWT import const SourceCollisionHelper = globalThis.org.allbinary.game.collision.SourceCollisionHelper;
import { CollisionHelper } from './CollisionHelper.js';
//not GWT import const CollisionHelper = globalThis.org.allbinary.game.collision.CollisionHelper;
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
