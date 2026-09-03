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
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameFeature } from './GameFeature.js';
//not GWT import const GameFeature = globalThis.org.allbinary.game.configuration.feature.GameFeature;
import { Feature } from './Feature.js';
//not GWT import const Feature = globalThis.org.allbinary.game.configuration.feature.Feature;
export class GameFeatureFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameFeatureFactory.instance;
    }
    constructor() {
        super();
        this.SOUND = new GameFeature("Sound");
        this.MUSIC = new GameFeature("Music");
        this.SCREEN_SHAKE = new Feature("Screen Shake");
        this.POST_IMAGE_LOADING_MODIFICATION = new Feature("Post Image Loading Modification (Scaling, Rotation, or Other)");
        this.HEALTH_BARS = new GameFeature("Health Bars");
        this.DAMAGE_FLOATERS = new GameFeature("Damage Floaters");
        this.GAME_INPUT_LAYER_PROCESSOR = new GameFeature("Game Input Layer Processor");
        this.ARTIFICIAL_INTELLEGENCE_PROCESSOR = new GameFeature("Artificial Intelligence Layer Processor");
        this.COLLIDABLE_INTERFACE_LAYER_PROCESSOR = new GameFeature("Collidable Interface Layer Processor");
        this.TICKABLE_LAYER_PROCESSOR = new GameFeature("Tickable Layer Processor");
        this.CHEATING = new GameFeature("Cheating");
        this.DROPPED_ITEMS = new GameFeature("Drops");
        this.DROPPED_ITEMS_FROM_DEATH = new GameFeature("Drops from Dead");
        this.TEST_DESTROYED_LAYER_PROCESSOR = new GameFeature("Destroyed Layer Processor");
        this.COLLISIONS_WITH_SOURCE = new GameFeature("Allow Collisions With Source");
        this.COLLISIONS_FORCED_TWO_DIMENSIONAL = new GameFeature("Collisions Forced Two Dimensional");
    }
}
GameFeatureFactory.instance = new GameFeatureFactory();
