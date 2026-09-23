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
//not GWT import const CommandListener
import { DestroyedLayerProcessor } from '../../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js';
//not GWT import const DestroyedLayerProcessor
import { DestroyEventCircularStaticPool } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyEventCircularStaticPool.js';
//not GWT import const DestroyEventCircularStaticPool
import { DestroyedEventHandler } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js';
//not GWT import const DestroyedEventHandler
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { GameFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
//not GWT import const GameFeatureFactory
import { AllBinaryGameCanvas } from '../../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
//not GWT import const AllBinaryGameLayerManager
import { DropLayerProcessor } from '../../../../../org/allbinary/game/layer/drop/DropLayerProcessor.js';
//not GWT import const DropLayerProcessor
import { GroupLayerManagerListener } from '../../../../../org/allbinary/game/layer/identification/GroupLayerManagerListener.js';
//not GWT import const HighScoresFactoryInterface
import { ProgressCanvasFactory } from '../../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const AbeClientInformationInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CombatGameCanvas extends AllBinaryGameCanvas {
    constructor(cmdListener, gameLayerManager, highScoresFactoryInterface, gameInitializationInterfaceFactoryInterface, buffered) {
        super(cmdListener, gameLayerManager, highScoresFactoryInterface, gameInitializationInterfaceFactoryInterface, buffered);
        //For kotlin this is before the body of the constructor.
    }
    CombatGameCanvas_init() {
        DestroyEventCircularStaticPool.getInstance().init(this);
        ProgressCanvasFactory.getInstance().addNormalPortion(50, "Destroy Events");
    }
    //@Throws(Exception.constructor)
    initApp(abeClientInformation) {
        this.CombatGameCanvas_init();
        super.initApp(abeClientInformation);
    }
    initConfigurablePortion(portion) {
        DestroyedLayerProcessor.init();
        ProgressCanvasFactory.getInstance().addNormalPortion(portion, "Basic Processors");
        var features = Features.getInstance();
        ;
        var gameFeatureFactory = GameFeatureFactory.getInstance();
        ;
        if (features.isFeature(gameFeatureFactory.DROPPED_ITEMS) && features.isFeature(gameFeatureFactory.DROPPED_ITEMS_FROM_DEATH)) {
            CombatGameCanvas.basicLayerProcessor = new Array(2);
            CombatGameCanvas.basicLayerProcessor[0] = DestroyedLayerProcessor.getInstance();
            CombatGameCanvas.basicLayerProcessor[1] = DropLayerProcessor.getInstance();
        }
        else {
            CombatGameCanvas.basicLayerProcessor = new Array(1);
            CombatGameCanvas.basicLayerProcessor[0] = DestroyedLayerProcessor.getInstance();
        }
    }
    //@Throws(Exception.constructor)
    processPlayingGame() {
        super.processPlayingGame();
        for (var index = CombatGameCanvas.basicLayerProcessor.length; --index >= 0;) {
            CombatGameCanvas.basicLayerProcessor[index].process(this.gameLayerManager);
        }
    }
    //@Throws(Exception.constructor)
    cleanupGame() {
        super.cleanupGame();
        for (var index = CombatGameCanvas.basicLayerProcessor.length; --index >= 0;) {
            CombatGameCanvas.basicLayerProcessor[index].getList().clear();
        }
        GroupLayerManagerListener.getInstance().clear();
        GroupLayerManagerListener.getInstance().log();
        DestroyedEventHandler.getInstance().removeAllListeners();
        this.cleanupManager();
    }
    //@Throws(Exception.constructor)
    cleanupManager() {
        this.gameLayerManager.cleanup();
    }
}
CombatGameCanvas.basicLayerProcessor = [];
