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
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
import { ChangedGameFeatureListener } from '../../../../org/allbinary/game/configuration/event/ChangedGameFeatureListener.js';
import { InputFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/InputFeatureFactory.js';
import { MainFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/MainFeatureFactory.js';
import { PlatformInputMappingFactory } from '../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
import { GameKeyEventFactory } from '../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
import { FeaturedResourceRelativeRelationshipFactory } from '../../../../org/allbinary/game/resource/FeaturedResourceRelativeRelationshipFactory.js';
import { ResourceLoadingLevelFactory } from '../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
import { GameFeatureImageCacheFactory } from '../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
import { CompleteMotionGestureInputToGameMotionGestureInput } from '../../../../org/allbinary/input/motion/CompleteMotionGestureInputToGameMotionGestureInput.js';
import { BasicTouchInputFactory } from '../../../../org/allbinary/input/motion/button/BasicTouchInputFactory.js';
import { CancelTouchButtonInputFactory } from '../../../../org/allbinary/input/motion/button/CancelTouchButtonInputFactory.js';
export class BaseGameInitialization extends Object {
    constructor(resourceInitializationArray, portion) {
        super();
        this.initialized = false;
        this.EARLY_RESOURCES = 0;
        this.GAME_RESOURCES = 1;
        this.EARLY_CHANGABLE_RESOURCES = 2;
        this.GAME_CHANGABLE_RESOURCES = 3;
        this.gameInitialized = false;
        this.allLoaded = false;
        this.resourceInitializationArray = resourceInitializationArray;
        this.portion = portion;
    }
    //@Throws(Exception.constructor)
    initKey(portion) {
    }
    //@Throws(Exception.constructor)
    initKeyMapping(abeClientInformation, portion) {
        if (ChangedGameFeatureListener.getInstance().isChangedFeature(InputFeatureFactory.getInstance().INPUT_MAPPING)) {
            PlatformInputMappingFactory.getInstance().getPersistentInputMappingInstance().init(abeClientInformation);
            ProgressCanvasFactory.getInstance().addNormalPortion(50, "Game Keys");
            ChangedGameFeatureListener.getInstance().remove(InputFeatureFactory.getInstance().INPUT_MAPPING);
        }
    }
    //@Throws(Exception.constructor)
    init(abeClientInformation, commandListener, level) {
        var resourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance();
        ;
        if (!this.isInitialized() && (level == resourceLoadingLevelFactory.LOAD_ALL.getLevel() || level == resourceLoadingLevelFactory.LOAD_EARLY.getLevel())) {
            var localPortion = 40;
            ;
            if (level == resourceLoadingLevelFactory.LOAD_EARLY.getLevel()) {
                localPortion = 8;
            }
            this.setInitialized(true);
            this.initKey(this.getPortion());
            this.initKeyMapping(abeClientInformation, this.getPortion());
            GameKeyEventFactory.getInstance().init();
            var progressCanvas = ProgressCanvasFactory.getInstance();
            ;
            progressCanvas.addNormalPortion(localPortion, "Game Key Events");
            BasicTouchInputFactory.getInstance().init(PlatformInputMappingFactory.getInstance().getPersistentInputMappingInstance().getInputMapping());
            CancelTouchButtonInputFactory.getInstance();
            progressCanvas.addNormalPortion(localPortion, "Touch Input");
            CompleteMotionGestureInputToGameMotionGestureInput.getInstance().init();
            progressCanvas.addNormalPortion(localPortion, "Motion Input");
            GameFeatureImageCacheFactory.init();
            progressCanvas.addNormalPortion(localPortion, "Image Cache");
            this.resourceInitializationArray[this.EARLY_RESOURCES].init();
        }
    }
    //@Throws(Exception.constructor)
    resourceInitialization(level) {
        var resourceLoadingLevelFactory = ResourceLoadingLevelFactory.getInstance();
        ;
        if (this.resourceAnimationChange() && level == resourceLoadingLevelFactory.LOAD_EARLY.getLevel()) {
            this.clearResources();
            this.resourceInitializationArray[this.EARLY_CHANGABLE_RESOURCES].init();
        }
        if (this.resourceAnimationChange() && level == resourceLoadingLevelFactory.LOAD_ALL.getLevel()) {
            if (this.allLoaded) {
                this.clearResources();
            }
            if (FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().getList().size() == 0) {
                this.resourceInitializationArray[this.EARLY_CHANGABLE_RESOURCES].init();
            }
            this.resourceInitializationArray[this.GAME_CHANGABLE_RESOURCES].init();
            this.allLoaded = true;
        }
    }
    resourceAnimationChange() {
        var changedGameFeatureListener = ChangedGameFeatureListener.getInstance();
        ;
        var gameConfigurationCentral = GameConfigurationCentral.getInstance();
        ;
        if (changedGameFeatureListener.isChangedGameConfiguration(gameConfigurationCentral.SCALE)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        if (ChangedGameFeatureListener.getInstance().isChangedFeature(MainFeatureFactory.getInstance().STATIC)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    clearResources() {
        this.allLoaded = false;
        GameFeatureImageCacheFactory.releaseAll();
        var featuredAnimationInterfaceFactoryInterfaceFactory = FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance();
        ;
        featuredAnimationInterfaceFactoryInterfaceFactory.clear();
        FeaturedResourceRelativeRelationshipFactory.getInstance().clear();
    }
    setGameInitialized(gameInitialized) {
        this.gameInitialized = gameInitialized;
    }
    isGameInitialized() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameInitialized;
    }
    getPortion() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.portion;
    }
    setInitialized(initialized) {
        this.initialized = initialized;
    }
    isInitialized() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.initialized;
    }
}
BaseGameInitialization.NULL_BASE_GAME_INITIALIZATION = new BaseGameInitialization([], 0);
