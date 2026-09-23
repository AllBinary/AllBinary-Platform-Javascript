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
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const AnimationInterfaceFactoryInterface
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory
import { NullIndexedAnimationFactory } from '../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
//not GWT import const Direction
import { DirectionFactory } from '../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionFactory
import { GameTypeFactory } from '../../../../org/allbinary/game/GameTypeFactory.js';
//not GWT import const DestroyedEvent
import { DestroyedEventHandler } from '../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js';
//not GWT import const DestroyedEventListenerInterface
import { Health } from '../../../../org/allbinary/game/health/Health.js';
//not GWT import const Group
import { GroupFactory } from '../../../../org/allbinary/game/identification/GroupFactory.js';
//not GWT import const GroupFactory
import { GameKeyEventFactory } from '../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const GameKeyEventFactory
import { NullRTSFormInputFactory } from '../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
//not GWT import const RTSFormInput
import { BuildingEventHandler } from '../../../../org/allbinary/game/layer/building/event/BuildingEventHandler.js';
//not GWT import const BuildingEventHandler
import { UnitLayer } from '../../../../org/allbinary/game/layer/unit/UnitLayer.js';
//not GWT import const UnitLayer
import { Waypoint2LogHelper } from '../../../../org/allbinary/game/layer/waypoint/Waypoint2LogHelper.js';
//not GWT import const Waypoint2LogHelper
import { Waypoint2SelectedLogHelper } from '../../../../org/allbinary/game/layer/waypoint/Waypoint2SelectedLogHelper.js';
//not GWT import const WaypointBase
import { WaypointLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointLogHelper.js';
//not GWT import const WaypointLogHelper
import { WaypointRunnableLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointRunnableLogHelper.js';
//not GWT import const WaypointRunnableLogHelper
import { WaypointRunnableSelectedLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointRunnableSelectedLogHelper.js';
//not GWT import const WaypointRunnableSelectedLogHelper
import { WaypointSelectedLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointSelectedLogHelper.js';
//not GWT import const WaypointSelectedLogHelper
import { RemoteInfo } from '../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
//not GWT import const RemoteInfo
import { NullTickable } from '../../../../org/allbinary/game/tick/NullTickable.js';
//not GWT import const TickableInterface
import { TileLayerPositionIntoViewPosition } from '../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js';
//not GWT import const Rectangle
import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const AllBinaryLayer
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AngleInfo
import { FrameUtil } from '../../../../org/allbinary/math/FrameUtil.js';
//not GWT import const GeographicMapCompositeInterface
import { GeographicMapDirectionUtil } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js';
//not GWT import const GeographicMapDirectionUtil
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import const ViewPositionBase
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RTSLayer } from './RTSLayer.js';
//not GWT import - same folder const RTSLayer
import { NullPathFindingLayer } from './NullPathFindingLayer.js';
//not GWT import - same folder const NullPathFindingLayer
import { AdvancedRTSProperties } from './AdvancedRTSProperties.js';
//not GWT import - same folder const PathFindingLayerInterface
import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';
//not GWT import - same folder const RTSPlayerLayerInterface
import { RTSLayerUtil } from './RTSLayerUtil.js';
//not GWT import - same folder const RTSLayerUtil
export class AdvancedRTSGameLayer extends RTSLayer {
    //@Throws(Exception.constructor)
    static createSimulated() {
        var nullAnimationInterfaceFactoryInterface = NullAnimationFactory.getFactoryInstance();
        ;
        var nullIndexedAnimationInterfaceFactoryInterface = NullIndexedAnimationFactory.getFactoryInstance();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AdvancedRTSGameLayer(RemoteInfo.REMOTE_INFO, NullPathFindingLayer.NULL_PATH_FINDING_LAYER, AdvancedRTSProperties.createPropertiesSimulated(), GroupFactory.getInstance().NULL_GROUP_ARRAY, StringUtil.getInstance().EMPTY_STRING, StringUtil.getInstance().EMPTY_STRING, Health.NULL_HEALTH, NullRTSFormInputFactory.getInstance(), nullAnimationInterfaceFactoryInterface, nullIndexedAnimationInterfaceFactoryInterface, nullAnimationInterfaceFactoryInterface, nullAnimationInterfaceFactoryInterface, nullIndexedAnimationInterfaceFactoryInterface, NullIndexedAnimationFactory.getFactoryInstance(), RectangleFactory.SINGLETON, 0, 0, new TileLayerPositionIntoViewPosition());
    }
    constructor(remoteInfo, parentLayer, advancedRTSProperties, groupInterface, rootName, name, healthInterface, rtsFormInput, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, viewPosition) {
        super(remoteInfo, groupInterface, rootName, name, healthInterface, rtsFormInput, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, viewPosition);
        this.parentLayer = NullPathFindingLayer.NULL_PATH_FINDING_LAYER;
        this.waypointBehaviorBase = NullTickable.getInstance();
        //For kotlin this is before the body of the constructor.
        this.setVisible(false);
        this.setWaypointBehavior(new WaypointBehaviorBase());
        this.shakeListener = advancedRTSProperties.shakeListener;
        this.vibration = advancedRTSProperties.vibration;
        this.duration = advancedRTSProperties.duration;
        this.setParentLayer(parentLayer);
    }
    //@Throws(Exception.constructor)
    updateWaypointBehavior(geographicMapInterface) {
        super.updateWaypointBehavior(geographicMapInterface);
        this.getWaypointBehavior().getWaypoint().setAllBinaryGameLayerManager(this.allBinaryGameLayerManagerP);
    }
    initVisibility(rtsPlayerLayerInterface) {
        var advancedRTSPlayerLayerInterface = rtsPlayerLayerInterface;
        ;
        if (advancedRTSPlayerLayerInterface.isLocalPlayer() || advancedRTSPlayerLayerInterface.getGameType() == GameTypeFactory.getInstance().BOT) {
            this.setVisible(true);
        }
        else {
            this.setVisible(false);
        }
    }
    //@Throws(Exception.constructor)
    construct(rtsPlayerLayerInterface) {
        super.construct(rtsPlayerLayerInterface);
        this.initVisibility(rtsPlayerLayerInterface);
        BuildingEventHandler.getInstance().addListenerInterface(this.getWaypointBehavior().getWaypoint());
    }
    //@Throws(Exception.constructor)
    setDestroyed(destroyed) {
        super.setDestroyed(destroyed);
        if (this.isDestroyed()) {
            BuildingEventHandler.getInstance().removeListener(this.getWaypointBehavior().getWaypoint());
            BuildingEventHandler.getInstance().removeListener(this);
            DestroyedEventHandler.getInstance().addListener(this);
            RTSLayerUtil.getInstance().destroyAndClear(this.getWaypointBehavior().getOwnedWaypointList());
        }
    }
    getParentLayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.parentLayer;
    }
    setParentLayer(parentLayer) {
        this.parentLayer = parentLayer;
    }
    getWaypointBehavior() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.waypointBehaviorBase;
    }
    setWaypointBehavior(unitWaypointHelper) {
        this.waypointBehaviorBase = unitWaypointHelper;
    }
    getWaypointLogHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.waypointLogHelperP;
    }
    getWaypoint2LogHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.waypoint2LogHelperP;
    }
    getWaypointRunnableLogHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.waypointRunnableLogHelperP;
    }
    shouldAddWaypointFromBuilding() {
        if (this.parentLayer != NullPathFindingLayer.NULL_PATH_FINDING_LAYER) {
            var parentAdvancedRTSGameLayer = this.parentLayer;
            ;
            if (parentAdvancedRTSGameLayer.getType() != UnitLayer.getStaticType()) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isWaypointListEmptyOrOnlyTargets() {
        if (this.getType() != UnitLayer.getStaticType()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    buildingChase(allbinaryLayer, cellPosition) {
        var geographicMapCellPosition = this.getCurrentGeographicMapCellPosition();
        ;
        var buildingDirection = GeographicMapDirectionUtil.getInstance().getDirectionFromCellPositionToAdjacentCellPosition(geographicMapCellPosition, cellPosition);
        ;
        var angleInfo = this.getRotationAnimationInterface().getAngleInfoP();
        ;
        var angle = FrameUtil.getInstance().adjustAngleToFrameAngle(angleInfo.getAngle() + 90);
        ;
        var gameKeyEventFactory = GameKeyEventFactory.getInstance();
        ;
        if (buildingDirection == DirectionFactory.getInstance().UP) {
            this.rtsLayer2LogHelper.buildingAbove(this);
            if (angle > 180 && angle < 360) {
                this.rtsLayer2LogHelper.buildingChaseLeft(this, angle);
                this.getGameKeyEventList().add(gameKeyEventFactory.getInstanceForKey(this, Canvas.LEFT));
                if (angle <= 190) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
            else {
                this.rtsLayer2LogHelper.buildingChaseRight(this, angle);
                this.getGameKeyEventList().add(gameKeyEventFactory.getInstanceForKey(this, Canvas.RIGHT));
                if (angle >= 170) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
        }
        else if (buildingDirection == DirectionFactory.getInstance().DOWN) {
            this.rtsLayer2LogHelper.buildingDown(this);
            if (angle > 180 && angle < 360) {
                this.rtsLayer2LogHelper.buildingChaseLeft(this, angle);
                this.getGameKeyEventList().add(gameKeyEventFactory.getInstanceForKey(this, Canvas.RIGHT));
                if (angle > 315) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
            else {
                this.rtsLayer2LogHelper.buildingChaseRight(this, angle);
                this.getGameKeyEventList().add(gameKeyEventFactory.getInstanceForKey(this, Canvas.LEFT));
                if (angle < 45) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
        }
        else if (buildingDirection == DirectionFactory.getInstance().LEFT) {
            this.rtsLayer2LogHelper.buildingLeft();
            if (angle > 90 && angle < 270) {
                this.rtsLayer2LogHelper.buildingChaseDown(this, angle);
                this.getGameKeyEventList().add(gameKeyEventFactory.getInstanceForKey(this, Canvas.LEFT));
                if (angle < 135) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
            else {
                this.rtsLayer2LogHelper.buildingChaseUp(this, angle);
                this.getGameKeyEventList().add(gameKeyEventFactory.getInstanceForKey(this, Canvas.RIGHT));
                if (angle > 45) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
        }
        else if (buildingDirection == DirectionFactory.getInstance().RIGHT) {
            this.rtsLayer2LogHelper.buildingRight();
            if (angle > 90 && angle < 270) {
                this.rtsLayer2LogHelper.buildingChaseDown(this, angle);
                this.getGameKeyEventList().add(gameKeyEventFactory.getInstanceForKey(this, Canvas.RIGHT));
                if (angle > 225) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
            else {
                this.rtsLayer2LogHelper.buildingChaseUp(this, angle);
                this.getGameKeyEventList().add(gameKeyEventFactory.getInstanceForKey(this, Canvas.LEFT));
                if (angle < 315 && angle > 180) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return true;
                }
            }
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    getSurroundingGeographicMapCellPositionList() {
        var geographicMapCompositeInterface = this.allBinaryGameLayerManagerP;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        this.geographicMapCellPositionAreaBase.update(geographicMapInterface);
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellPositionAreaBase.getSurroundingGeographicMapCellPositionList();
        ;
    }
    setSelected(selected) {
        super.setSelected(selected);
        if (this.debug) {
            if (selected) {
                this.waypointLogHelperP = WaypointSelectedLogHelper.getInstance();
                this.waypoint2LogHelperP = Waypoint2SelectedLogHelper.getInstance();
                this.waypointRunnableLogHelperP = WaypointRunnableSelectedLogHelper.getInstance();
            }
            else {
                this.waypointLogHelperP = WaypointLogHelper.getInstance();
                this.waypoint2LogHelperP = Waypoint2LogHelper.getInstance();
                this.waypointRunnableLogHelperP = WaypointRunnableLogHelper.getInstance();
            }
        }
    }
    onDestroyed(destroyedEvent) {
        try {
            var layerInterface = destroyedEvent.getLayerInterface();
            ;
            if (layerInterface == this) {
                DestroyedEventHandler.getInstance().removeListener(this);
                var waypoint = this.getWaypointBehavior().getWaypoint();
                ;
                waypoint.reset();
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "onDestroyed", e);
        }
    }
}
