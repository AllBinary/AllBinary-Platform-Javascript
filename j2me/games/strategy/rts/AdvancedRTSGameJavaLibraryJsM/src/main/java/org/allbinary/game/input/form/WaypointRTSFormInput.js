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
import { Exception } from '../../../../../java/lang/Exception.js';
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AdvancedRTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.AdvancedRTSPlayerLayerInterface;
import { RTSGameStrings } from '../../../../../org/allbinary/game/layer/RTSGameStrings.js';
//not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;
import { RTSLayerEvent } from '../../../../../org/allbinary/game/layer/RTSLayerEvent.js';
//not GWT import const RTSLayerEvent = globalThis.org.allbinary.game.layer.RTSLayerEvent;
import { RTSLayerUtil } from '../../../../../org/allbinary/game/layer/RTSLayerUtil.js';
//not GWT import const Capital = globalThis.org.allbinary.game.layer.capital.Capital;
import { WaypointCellPositionHistory } from '../../../../../org/allbinary/game/layer/waypoint/WaypointCellPositionHistory.js';
//not GWT import const WaypointLayer = globalThis.org.allbinary.game.layer.waypoint.WaypointLayer;
import { WaypointEventHandlerFactory } from '../../../../../org/allbinary/game/layer/waypoint/event/WaypointEventHandlerFactory.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const GeographicMapCellPositionAreaBase = globalThis.org.allbinary.game.layer.GeographicMapCellPositionAreaBase;
import { NullPathFindingLayer } from '../../../../../org/allbinary/game/layer/NullPathFindingLayer.js';
//not GWT import const NullPathFindingLayer = globalThis.org.allbinary.game.layer.NullPathFindingLayer;
import { NullRTSLayer } from '../../../../../org/allbinary/game/layer/NullRTSLayer.js';
//not GWT import const PathFindingLayerInterface = globalThis.org.allbinary.game.layer.PathFindingLayerInterface;
import { GameNotificationEvent } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
//not GWT import const GameNotificationEvent = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEvent;
import { GameNotificationEventHandler } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
//not GWT import const GameNotificationEventHandler = globalThis.org.allbinary.game.layer.hud.event.GameNotificationEventHandler;
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
import { Layer } from '../../../../../org/allbinary/layer/Layer.js';
//not GWT import const Layer = globalThis.org.allbinary.layer.Layer;
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
import { ErrorSound } from '../../../../../org/allbinary/media/audio/ErrorSound.js';
//not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;
import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
//not GWT import const RaceTrackGeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellTypeFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RTSFormInput } from './RTSFormInput.js';
//not GWT import const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;
import { PrimaryWaypointHelper } from './PrimaryWaypointHelper.js';
//not GWT import const PrimaryWaypointHelper = globalThis.org.allbinary.game.input.form.PrimaryWaypointHelper;
export class WaypointRTSFormInput extends RTSFormInput {
    constructor(groupInterface, isPrimaryWaypointCreator) {
        super(groupInterface);
        this.WAYPOINT_EVENT = new RTSLayerEvent(NullRTSLayer.NULL_RTS_LAYER);
        this.stickyAssociatedRtsLayer = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        //For kotlin this is before the body of the constructor.
        this.isPrimaryWaypointCreator = isPrimaryWaypointCreator;
        var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        ;
        var basicColorFactory = BasicColorFactory.getInstance();
        ;
        this.dragToSpotGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().DRAG_TO_SPOT, smallIntegerSingletonFactory.getAt(2), basicColorFactory.WHITE, BooleanFactory.getInstance().FALSE);
        this.spotTakenGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().SPOT_TAKEN, smallIntegerSingletonFactory.getAt(2), basicColorFactory.WHITE, BooleanFactory.getInstance().FALSE);
        this.buildingCollisionGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().BUILDING_COLLISION, smallIntegerSingletonFactory.getAt(2), basicColorFactory.WHITE, BooleanFactory.getInstance().FALSE);
        this.roadCollisionGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().ROAD_COLLISION, smallIntegerSingletonFactory.getAt(2), basicColorFactory.WHITE, BooleanFactory.getInstance().FALSE);
        this.newWaypointGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().NEW_WAYPOINT, smallIntegerSingletonFactory.getAt(2), basicColorFactory.WHITE, BooleanFactory.getInstance().FALSE);
        this.noMoneyGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().NO_MONEY, smallIntegerSingletonFactory.getAt(2), basicColorFactory.WHITE, BooleanFactory.getInstance().FALSE);
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
        var geographicMapCompositeInterface = allBinaryGameLayerManager;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        this.dragToSpotGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
        this.spotTakenGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
        this.buildingCollisionGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
        this.roadCollisionGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
        this.newWaypointGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
        this.noMoneyGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
    }
    //@Throws(Exception.constructor)
    processAtPoint(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point) {
        super.process(layerManager);
        if (this.isStickyItemSelected() || associatedRtsLayer == CollidableDestroyableDamageableLayer.getNullInstance()) {
            if (this.isStickyItemSelected() && associatedRtsLayer == CollidableDestroyableDamageableLayer.getNullInstance()) {
                var geographicMapCompositeInterface = layerManager;
                ;
                var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
                ;
                var allBinaryTiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
                ;
                var x = point.getX() + allBinaryTiledLayer.getXP();
                ;
                var y = point.getY() + allBinaryTiledLayer.getYP();
                ;
                var geographicMapCellPosition = geographicMapInterface.getCellPositionAtXY(x, y);
                ;
                this.processCellPosition(rtsPlayerLayerInterface, layerManager, geographicMapCellPosition);
            }
            else {
                if (!rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                    GameNotificationEventHandler.getInstance().fireEvent(this.dragToSpotGameNotificationEvent);
                }
            }
        }
        else {
            if (!rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                GameNotificationEventHandler.getInstance().fireEvent(this.spotTakenGameNotificationEvent);
            }
        }
    }
    //@Throws(Exception.constructor)
    processCellPosition(rtsPlayerLayerInterface, layerManager, geographicMapCellPosition) {
        var itemIndex = this.getSelectedStickyItemIndex();
        ;
        if (this.newUnconstructedRTSLayerInterfaceArray[itemIndex] == CollidableDestroyableDamageableLayer.getNullInstance()) {
            this.newUnconstructedRTSLayerInterfaceArray[itemIndex] = this.getInstance(layerManager, this.getSelectedStickyItem(), geographicMapCellPosition);
        }
        else {
            var cellPoint = geographicMapCellPosition.getPoint();
            ;
            var rtsLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex];
            ;
            rtsLayer.setPosition(cellPoint.getX(), cellPoint.getY(), rtsLayer.getZP());
            var geographicMapCompositeInterface = rtsLayer.allBinaryGameLayerManagerP;
            ;
            var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
            ;
            rtsLayer.geographicMapCellPositionAreaBase.update(geographicMapInterface);
        }
        this.attemptBuild(rtsPlayerLayerInterface, layerManager, this.newUnconstructedRTSLayerInterfaceArray[itemIndex], itemIndex);
    }
    //@Throws(Exception.constructor)
    processStickyGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index) {
        this.logUtil.putF("Set Sticking Item: " + item, this, "processSticky");
        this.setSelectedStickyItem(item);
        this.setSelectedStickyItemIndex(index);
        this.setStickyItemSelected(true);
        this.stickyAssociatedRtsLayer = associatedRtsLayer;
        this.getHashtable().put(Layer.ID, associatedRtsLayer);
    }
    //@Throws(Exception.constructor)
    attemptBuild(rtsPlayerLayerInterface, layerManager, layerInterface, itemIndex) {
        this.logUtil.putF("Layer: " + layerInterface, this, "attemptBuild");
        if (layerInterface ==
            null) {
            this.logUtil.put("Layer was null", this, "attemptBuild", new Exception());
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        var geographicMapCellPositionArea = layerInterface.geographicMapCellPositionAreaBase;
        ;
        var list = geographicMapCellPositionArea.getOccupyingGeographicMapCellPositionList();
        ;
        if (DropCellPositionHistory.getInstance().anyCellPositionWithDrop(list) || WaypointCellPositionHistory.getInstance().anyCellPositionWithDrop(list)) {
            rtsPlayerLayerInterface.add(ErrorSound.getInstance());
            if (!rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                GameNotificationEventHandler.getInstance().fireEvent(this.buildingCollisionGameNotificationEvent);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        var geographicMapCompositeInterface = layerManager;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        var raceTrackGeographicMapCellTypeFactory = geographicMapInterface.getGeographicMapCellTypeFactory();
        ;
        var geographicMapCellType;
        ;
        for (var index = list.size(); --index >= 0;) {
            geographicMapCellType = geographicMapInterface.getCellTypeAt(list.get(index));
            if (raceTrackGeographicMapCellTypeFactory.isPath(geographicMapCellType)) {
                rtsPlayerLayerInterface.add(ErrorSound.getInstance());
                if (!rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                    GameNotificationEventHandler.getInstance().fireEvent(this.roadCollisionGameNotificationEvent);
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        var cost = layerInterface.getCost();
        ;
        var capital = rtsPlayerLayerInterface.getCapital();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Trying to Build: ");
        stringBuffer.append(layerInterface.getName());
        stringBuffer.append(" for: $");
        stringBuffer.appendint(cost);
        stringBuffer.append(" with ");
        stringBuffer.appendint(capital.getTotalMoney());
        this.logUtil.putF(stringBuffer.toString(), this, "attemptBuild");
        if (cost <= capital.getTotalMoney()) {
            layerInterface.construct(rtsPlayerLayerInterface);
            this.newUnconstructedRTSLayerInterfaceArray[itemIndex] = CollidableDestroyableDamageableLayer.getNullInstance();
            capital.removeMoney(cost);
            WaypointCellPositionHistory.getInstance().addList(list, layerInterface);
            var geographicMapCellPosition = geographicMapInterface.getCellPositionAtXY(layerInterface.getXP(), layerInterface.getYP());
            ;
            var waypointLayer = layerInterface;
            ;
            this.addWayPoint(waypointLayer);
            var rtsPlayerGameInput = rtsPlayerLayerInterface.getPlayerGameInput();
            ;
            rtsPlayerGameInput.setSelectedRTSLayer(layerInterface, geographicMapCellPosition);
            var advancedRTSPlayerLayerInterface = rtsPlayerLayerInterface;
            ;
            advancedRTSPlayerLayerInterface.getAdvancedPlayerOwnedRTSLayers().addWaypoint(layerInterface);
            layerManager.append(layerInterface);
            var waypointAvancedRTSGameLayer = waypointLayer;
            ;
            rtsPlayerLayerInterface.add(waypointAvancedRTSGameLayer.getWaypointBehavior().getWaypoint().getSound());
            if (!rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                GameNotificationEventHandler.getInstance().fireEvent(this.newWaypointGameNotificationEvent);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            rtsPlayerLayerInterface.add(ErrorSound.getInstance());
            if (!rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                GameNotificationEventHandler.getInstance().fireEvent(this.noMoneyGameNotificationEvent);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    //@Throws(Exception.constructor)
    addWayPoint(layerInterface) {
        var stickyAssociatedAdvandedRtsLayer = this.stickyAssociatedRtsLayer;
        ;
        var list = stickyAssociatedAdvandedRtsLayer.getWaypointBehavior().getOwnedWaypointList();
        ;
        RTSLayerUtil.getInstance().destroyAndClear(list);
        list.add(layerInterface);
        if (this.isPrimaryWaypointCreator) {
            PrimaryWaypointHelper.getInstance().setWaypointLayer(layerInterface);
        }
        this.WAYPOINT_EVENT.setRtsLayer(layerInterface);
        WaypointEventHandlerFactory.getInstance(layerInterface.getGroupInterface()[0]).fireEvent(this.WAYPOINT_EVENT);
    }
}
