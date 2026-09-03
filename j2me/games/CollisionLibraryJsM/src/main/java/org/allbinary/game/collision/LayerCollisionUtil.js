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
import { OpenGLFeatureUtil } from '../../../../org/allbinary/graphics/opengles/OpenGLFeatureUtil.js';
//not GWT import const CollisionProcessor = globalThis.org.allbinary.game.collision.CollisionProcessor;
import { Collision2DProcessor } from './Collision2DProcessor.js';
//not GWT import const Collision2DProcessor = globalThis.org.allbinary.game.collision.Collision2DProcessor;
import { CollisionThreedProcessor } from './CollisionThreedProcessor.js';
//not GWT import const CollisionThreedProcessor = globalThis.org.allbinary.game.collision.CollisionThreedProcessor;
export class LayerCollisionUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LayerCollisionUtil.instance;
    }
    constructor() {
        super();
        var features = Features.getInstance();
        ;
        var gameFeatureFactory = GameFeatureFactory.getInstance();
        ;
        if (OpenGLFeatureUtil.getInstance().isAnyThreed() && !features.isFeature(gameFeatureFactory.COLLISIONS_FORCED_TWO_DIMENSIONAL)) {
            this.collisionProcessor = new CollisionThreedProcessor();
        }
        else {
            this.collisionProcessor = new Collision2DProcessor();
        }
    }
    isCollision(myLayer, myLayer2) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.collisionProcessor.isCollision(myLayer, myLayer2);
        ;
    }
}
LayerCollisionUtil.instance = new LayerCollisionUtil();
