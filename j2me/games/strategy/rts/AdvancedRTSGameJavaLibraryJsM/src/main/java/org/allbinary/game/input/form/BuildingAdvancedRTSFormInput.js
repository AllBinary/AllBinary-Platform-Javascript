/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2002 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *    Created By: Travis Berthelot
*/
//not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;
import { RTSLayerEvent } from '../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
//not GWT import const RTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.RTSPlayerLayerInterface;
import { BuildingEventHandler } from '../../../../../org/allbinary/game/layer/building/event/BuildingEventHandler.js';
//not GWT import const BuildingEventHandler = globalThis.org.allbinary.game.layer.building.event.BuildingEventHandler;
import { LocalPlayerBuildingEventHandler } from '../../../../../org/allbinary/game/layer/building/event/LocalPlayerBuildingEventHandler.js';
//not GWT import const LocalPlayerBuildingEventHandler = globalThis.org.allbinary.game.layer.building.event.LocalPlayerBuildingEventHandler;
import { WaypointCellPositionHistory } from '../../../../../org/allbinary/game/layer/waypoint/WaypointCellPositionHistory.js';
//not GWT import const WaypointCellPositionHistory = globalThis.org.allbinary.game.layer.waypoint.WaypointCellPositionHistory;
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;
import { NullPathFindingLayer } from '../../../../../org/allbinary/game/layer/NullPathFindingLayer.js';
//not GWT import const NullPathFindingLayer = globalThis.org.allbinary.game.layer.NullPathFindingLayer;
import { GameNotificationEvent } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
//not GWT import const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;
import { GameNotificationEventHandler } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
//not GWT import const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
import { ErrorSound } from '../../../../../org/allbinary/media/audio/ErrorSound.js';
//not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;
import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
//not GWT import const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BuildingRTSFormInput } from './BuildingRTSFormInput.js';
//not GWT import const BuildingRTSFormInput = globalThis.org.allbinary.game.input.form.BuildingRTSFormInput;
export class BuildingAdvancedRTSFormInput extends BuildingRTSFormInput {
    constructor(groupInterface, isUnitProducer) {
        super(groupInterface, isUnitProducer);
        this.BUILD_BUILDING_RTS_LAYER_EVENT = new RTSLayerEvent(NullPathFindingLayer.NULL_PATH_FINDING_LAYER);
        //For kotlin this is before the body of the constructor.
        var basicColorFactory = BasicColorFactory.getInstance();
        ;
        this.atLeastOneHouseGameNotificationEvent = new GameNotificationEvent(this, "Build At Least One House First", SmallIntegerSingletonFactory.getInstance().getAt(2), basicColorFactory.WHITE, BooleanFactory.getInstance().FALSE);
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
        var geographicMapCompositeInterface = allBinaryGameLayerManager;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        this.atLeastOneHouseGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
    }
    isPositionBlocked() {
        if (DropCellPositionHistory.getInstance().isCellPositionWithDrop(this.getSelectedGeographicCellPosition()) || WaypointCellPositionHistory.getInstance().isCellPositionWithDrop(this.getSelectedGeographicCellPosition())) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    //@Throws(Exception.constructor)
    isBuildAttemptValid(rtsPlayerLayerInterface, layerInterface) {
        var advancedRTSPlayerLayerInterface = rtsPlayerLayerInterface;
        ;
        var advancedPlayerOwnedRTSLayers = advancedRTSPlayerLayerInterface.getAdvancedPlayerOwnedRTSLayers();
        ;
        var totalHouses = advancedPlayerOwnedRTSLayers.getHouseList().size();
        ;
        if (totalHouses < 1 && layerInterface.getName().indexOf(" House") < 0) {
            rtsPlayerLayerInterface.add(ErrorSound.getInstance());
            if (!rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                GameNotificationEventHandler.getInstance().fireEvent(this.atLeastOneHouseGameNotificationEvent);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.isBuildAttemptValid(rtsPlayerLayerInterface, layerInterface);
        ;
    }
    //@Throws(Exception.constructor)
    add(rtsPlayerLayerInterface, layerManager, layerInterface) {
        this.BUILD_BUILDING_RTS_LAYER_EVENT.setRtsLayer(layerInterface);
        BuildingEventHandler.getInstance().fireEvent(this.BUILD_BUILDING_RTS_LAYER_EVENT);
        if (rtsPlayerLayerInterface.isLocalPlayer()) {
            LocalPlayerBuildingEventHandler.getInstance().fireEvent(this.BUILD_BUILDING_RTS_LAYER_EVENT);
        }
        super.add(rtsPlayerLayerInterface, layerManager, layerInterface);
    }
}
