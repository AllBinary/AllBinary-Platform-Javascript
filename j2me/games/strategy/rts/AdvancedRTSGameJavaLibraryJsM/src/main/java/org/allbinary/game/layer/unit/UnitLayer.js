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
import { Math } from '../../../../../java/lang/Math.js';
import { Integer } from '../../../../../java/lang/Integer.js';
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Graphics
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil
import { ExplosionBasicSound } from '../../../../../org/allbinary/ag/weapon/media/audio/ExplosionBasicSound.js';
//not GWT import const AnimationInterfaceFactoryInterface
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
//not GWT import const IndexedAnimation
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory
import { NullIndexedAnimationFactory } from '../../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
//not GWT import const RotationAnimation
import { CaptionAnimationHelper } from '../../../../../org/allbinary/animation/caption/CaptionAnimationHelper.js';
//not GWT import const CaptionAnimationHelperBase
import { AdjustedCircleAnimation } from '../../../../../org/allbinary/animation/vector/AdjustedCircleAnimation.js';
//not GWT import const Direction
import { DamageFloaters } from '../../../../../org/allbinary/game/combat/damage/DamageFloaters.js';
//not GWT import const DamageFloaters
import { PtsDamageFloaters } from '../../../../../org/allbinary/game/combat/damage/PtsDamageFloaters.js';
//not GWT import const WeaponProperties
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { GameFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
//not GWT import const GameFeatureFactory
import { BasicHudFactory } from '../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
//not GWT import const Health
import { HealthBar } from '../../../../../org/allbinary/game/health/HealthBar.js';
//not GWT import const HealthBar
import { HealthBarTwodAnimation } from '../../../../../org/allbinary/game/health/HealthBarTwodAnimation.js';
//not GWT import const Group
import { GroupCommonFactory } from '../../../../../org/allbinary/game/identification/GroupCommonFactory.js';
//not GWT import const GroupCommonFactory
import { GameKeyEvent } from '../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const GameKeyEventFactory
import { GameKeyEventUtil } from '../../../../../org/allbinary/game/input/event/GameKeyEventUtil.js';
//not GWT import const GameKeyEventUtil
import { VisibleCellPositionsSingleton } from '../../../../../org/allbinary/game/input/form/VisibleCellPositionsSingleton.js';
//not GWT import const VisibleCellPositionsSingleton
import { WaypointRTSFormInput } from '../../../../../org/allbinary/game/input/form/WaypointRTSFormInput.js';
//not GWT import const WaypointRTSFormInput
import { AdvancedRTSGameLayer } from '../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
//not GWT import const AdvancedRTSProperties
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryTiledLayer
import { CaptionResources } from '../../../../../org/allbinary/game/layer/CaptionResources.js';
//not GWT import const CaptionResources
import { LinePathRelativeAnimation } from '../../../../../org/allbinary/game/layer/LinePathRelativeAnimation.js';
//not GWT import const LinePathRelativeAnimation
import { PathAnimation } from '../../../../../org/allbinary/game/layer/PathAnimation.js';
//not GWT import const PathFindingLayerInterface
import { RTSLayer2LogHelper } from '../../../../../org/allbinary/game/layer/RTSLayer2LogHelper.js';
//not GWT import const RTSLayer2LogHelper
import { RTSLayer2SelectedLogHelper } from '../../../../../org/allbinary/game/layer/RTSLayer2SelectedLogHelper.js';
//not GWT import const RTSLayerEvent
import { RTSLayerHudPaintable } from '../../../../../org/allbinary/game/layer/RTSLayerHudPaintable.js';
//not GWT import const RTSLayerHudPaintable
import { RTSLayerLogHelper } from '../../../../../org/allbinary/game/layer/RTSLayerLogHelper.js';
//not GWT import const RTSLayerLogHelper
import { RTSLayerSelectedLogHelper } from '../../../../../org/allbinary/game/layer/RTSLayerSelectedLogHelper.js';
//not GWT import const SelectionHudPaintable
import { SensorActionFactory } from '../../../../../org/allbinary/game/layer/SensorActionFactory.js';
//not GWT import const SteeringVisitor
import { TiledLayerUtil } from '../../../../../org/allbinary/game/layer/TiledLayerUtil.js';
//not GWT import const BuildingLayer
import { BuildingEventHandler } from '../../../../../org/allbinary/game/layer/building/event/BuildingEventHandler.js';
//not GWT import const BuildingEventListenerInterface
import { CapitalEvent } from '../../../../../org/allbinary/game/layer/capital/event/CapitalEvent.js';
//not GWT import const CapitalEvent
import { CapitalEventHandlerFactory } from '../../../../../org/allbinary/game/layer/capital/event/CapitalEventHandlerFactory.js';
//not GWT import const CapitalEventHandlerFactory
import { LayerPartialCellPositionsUtil } from '../../../../../org/allbinary/game/layer/geographic/map/LayerPartialCellPositionsUtil.js';
//not GWT import const LayerPartialCellPositionsUtil
import { SpecialDownGameInputProcessor } from '../../../../../org/allbinary/game/layer/special/SpecialDownGameInputProcessor.js';
//not GWT import const SpecialDownGameInputProcessor
import { SpecialFireGameInputProcessor } from '../../../../../org/allbinary/game/layer/special/SpecialFireGameInputProcessor.js';
//not GWT import const SpecialFireGameInputProcessor
import { SpecialLeftGameInputProcessor } from '../../../../../org/allbinary/game/layer/special/SpecialLeftGameInputProcessor.js';
//not GWT import const SpecialLeftGameInputProcessor
import { SpecialRightGameInputProcessor } from '../../../../../org/allbinary/game/layer/special/SpecialRightGameInputProcessor.js';
//not GWT import const SpecialRightGameInputProcessor
import { SpecialUpGameInputProcessor } from '../../../../../org/allbinary/game/layer/special/SpecialUpGameInputProcessor.js';
//not GWT import const SpecialUpGameInputProcessor
import { MultipassNoCacheWaypoint } from '../../../../../org/allbinary/game/layer/waypoint/MultipassNoCacheWaypoint.js';
//not GWT import const MultipassNoCacheWaypoint
import { NoCacheWaypoint } from '../../../../../org/allbinary/game/layer/waypoint/NoCacheWaypoint.js';
//not GWT import const WaypointBase
import { WaypointEventHandlerFactory } from '../../../../../org/allbinary/game/layer/waypoint/event/WaypointEventHandlerFactory.js';
//not GWT import const VelocityProperties
import { TrackingEvent } from '../../../../../org/allbinary/game/tracking/TrackingEvent.js';
//not GWT import const TrackingEvent
import { TrackingEventHandler } from '../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
//not GWT import const TrackingEventListenerInterface
import { CellPositionFactory } from '../../../../../org/allbinary/graphics/CellPositionFactory.js';
//not GWT import const Rectangle
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const AllBinaryLayerManager
import { Layer } from '../../../../../org/allbinary/layer/Layer.js';
//not GWT import const LayerInterfaceFactoryInterface
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
import { BasicDecimal } from '../../../../../org/allbinary/logic/math/BasicDecimal.js';
//not GWT import const BasicDecimal
import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
import { AngleFactory } from '../../../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleInfo
import { FrameUtil } from '../../../../../org/allbinary/math/FrameUtil.js';
//not GWT import const FrameUtil
import { LayerDistanceUtil } from '../../../../../org/allbinary/math/LayerDistanceUtil.js';
//not GWT import const NamedAngle
import { AttackSound } from '../../../../../org/allbinary/media/audio/AttackSound.js';
//not GWT import const AttackSound
import { SecondaryPlayerQueueFactory } from '../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
//not GWT import const GeographicMapCompositeInterface
import { SimpleGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory
import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
//not GWT import const RaceTrackGeographicMap
//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//not GWT import const ViewPositionBase
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CollidableUnitBehavior } from './CollidableUnitBehavior.js';
//not GWT import - same folder const CollidableUnitBehavior
import { UnitWaypointBehavior2 } from './UnitWaypointBehavior2.js';
//not GWT import - same folder const UnitWaypointBehavior
export class UnitLayer extends AdvancedRTSGameLayer {
    static getStaticType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 1;
    }
    static getPartialpositionlist() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return UnitLayer.partialPositionList;
    }
    constructor(remoteInfo, parentLayer, advancedRTSProperties, groupInterface, rootName, name, vehicleProperties, healthInterface, maxResourceLoad, moveSoundInterface, waypointLayerInterfaceFactoryInterface, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, decalAnimationInterfaceFactoryInterface, resourceAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, direction, x, y, z, viewPosition) {
        super(remoteInfo, parentLayer, advancedRTSProperties, groupInterface, rootName, name, healthInterface, new WaypointRTSFormInput(groupInterface, true), animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, viewPosition);
        this.basicColorFactory = BasicColorFactory.getInstance();
        this.groupCommonFactory = GroupCommonFactory.getInstance();
        this.layerPartialCellPositionsUtil = LayerPartialCellPositionsUtil.getInstance();
        this.layerDistanceUtil = LayerDistanceUtil.getInstance();
        this.angleFactory = AngleFactory.getInstance();
        this.cellPositionFactory = CellPositionFactory.getInstance();
        this.accelerationBasicDecimal = new BasicDecimal(1600);
        this.decelerationBasicDecimal = new BasicDecimal(-1000);
        this.resourceAnimation = NullIndexedAnimationFactory.getFactoryInstance().getInstance(0);
        this.pathAnimation = NullAnimationFactory.getFactoryInstance().getInstance(0);
        this.captionAnimationHelper = new CaptionAnimationHelper(FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(CaptionResources.getInstance().RESOURCE).getInstance(0), -23, -25, 6, 0);
        this.resourceLoad = 0;
        this.weaponRange = 0;
        this.rtsLogHelper = RTSLayerLogHelper.getInstance();
        this.movementAngle = this.angleFactory.NOT_ANGLE;
        this.steeringInsideGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.sensorGeographicMapCellPositionList = new BasicArrayListD();
        this.CAPITAL_EVENT = new CapitalEvent(this);
        //For kotlin this is before the body of the constructor.
        this.setCollidableInferface(new CollidableUnitBehavior(true));
        this.waypointLayerInterfaceFactoryInterface = waypointLayerInterfaceFactoryInterface;
        this.maxResourceLoad = maxResourceLoad.toShort();
        this.moveSoundInterface = moveSoundInterface;
        if (Features.getInstance().isFeature(GameFeatureFactory.getInstance().DAMAGE_FLOATERS)) {
            this.damageFloaters = new PtsDamageFloaters(this);
            this.damageFloatersPaintableInterface = this.damageFloaters;
        }
        else {
            this.damageFloatersPaintableInterface = NullPaintable.getInstance();
            this.damageFloaters = new DamageFloaters();
        }
        if (Features.getInstance().isFeature(GameFeatureFactory.getInstance().HEALTH_BARS)) {
            this.healthBar = new HealthBar(this, this.getHealthInterface(), new HealthBarTwodAnimation(this, BasicHudFactory.getInstance().BOTTOMLEFT), -1);
        }
        else {
            this.healthBar = NullPaintable.getInstance();
        }
        this.decalAnimation = decalAnimationInterfaceFactoryInterface.getInstance(0);
        this.initResourceAnimation = resourceAnimationInterfaceFactoryInterface.getInstance(0);
        this.initResourceAnimation.setFrameByDirection(direction);
        this.decalAnimation.setFrameByDirection(direction);
        this.rotationAnimationInterfaceP = this.indexedButShouldBeRotationAnimationInterface;
        this.rotationAnimationInterfaceP.setFrameByDirection(direction);
        this.setMaxLevel(12);
        this.vehicleProperties = vehicleProperties;
        this.trackingEvent = new TrackingEvent(this);
        this.initPathAnimation = new PathAnimation(this, LinePathRelativeAnimation.getInstance());
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
        this.initPathAnimation.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
    }
    //@Throws(Exception.constructor)
    updateWaypointBehavior(geographicMapInterface) {
        var hashtable = StdUtil.getInstance().createHashtable();
        ;
        hashtable.put(this.groupCommonFactory.ID, this.getGroupInterface());
        hashtable.put(Layer.ID, this);
        hashtable.put(AllBinaryGameLayerManager.ID, this.allBinaryGameLayerManagerP);
        this.setWaypointBehavior(new UnitWaypointBehavior2(this, this.waypointLayerInterfaceFactoryInterface.getNextInstance(hashtable, this.x, this.y, this.z)));
        var features = Features.getInstance();
        ;
        var waypoint = J2MEUtil.isHTML()
            ?
                new MultipassNoCacheWaypoint(this, AttackSound.getInstance())
            :
                new NoCacheWaypoint(this, AttackSound.getInstance());
        ;
        ;
        this.getWaypointBehavior().setWaypoint(waypoint);
        super.updateWaypointBehavior(geographicMapInterface);
        this.initRangeHack();
    }
    //@Throws(Exception.constructor)
    construct(rtsPlayerLayerInterface) {
        super.construct(rtsPlayerLayerInterface);
        TrackingEventHandler.getInstance().addListenerInterface(this);
        WaypointEventHandlerFactory.getInstance(this.getGroupInterface()[0]).addListenerInterface(this.getUnitWaypointBehavior());
        BuildingEventHandler.getInstance().addListenerInterface(this);
        this.getUnitWaypointBehavior().setCurrentPathGeographicMapCellPosition(this.getCurrentGeographicMapCellPosition());
        this.updateSensorGeographicMapCellPositionList();
        this.getUnitWaypointBehavior().setLastPathGeographicMapCellPosition(this.getUnitWaypointBehavior().getCurrentPathGeographicMapCellPosition());
    }
    //@Throws(Exception.constructor)
    updateSensorGeographicMapCellPositionList() {
        if (VisibleCellPositionsSingleton.getInstance().shouldProcess()) {
            var currentGeographicMapCellPosition = this.getCurrentGeographicMapCellPosition();
            ;
            this.sensorGeographicMapCellPositionList.clear();
            this.sensorGeographicMapCellPositionList.add(currentGeographicMapCellPosition);
            var sensorRange = this.weaponRange * UnitLayer.SENSOR_RANGE_MULTIPLIER;
            ;
            var geographicMapCompositeInterface = this.allBinaryGameLayerManagerP;
            ;
            var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
            ;
            var tiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
            ;
            var totalCells = (sensorRange / tiledLayer.getCellHeight()) / 2;
            ;
            var geographicMapCellPositionFactory = geographicMapInterface.getGeographicMapCellPositionFactory();
            ;
            var column = currentGeographicMapCellPosition.getColumn();
            ;
            var row = currentGeographicMapCellPosition.getRow();
            ;
            var lastColumn = column + totalCells;
            ;
            var lastRow = row + totalCells;
            ;
            if (lastColumn > tiledLayer.getColumns()) {
                lastColumn = tiledLayer.getColumns();
            }
            if (lastRow > tiledLayer.getRows()) {
                lastRow = tiledLayer.getRows();
            }
            var firstColumn = column - totalCells;
            ;
            var firstRow = row - totalCells;
            ;
            if (firstColumn < 0) {
                firstColumn = 0;
            }
            if (firstRow < 0) {
                firstRow = 0;
            }
            for (var index = lastColumn - 1; index >= firstColumn; index--) {
                for (var index2 = lastRow - 1; index2 >= firstRow; index2--) {
                    var geographicMapCellPosition = geographicMapCellPositionFactory.getAt(index, index2);
                    ;
                    if (!this.sensorGeographicMapCellPositionList.contains(geographicMapCellPosition)) {
                        this.sensorGeographicMapCellPositionList.add(geographicMapCellPosition);
                    }
                }
            }
        }
    }
    getSensorGeographicMapCellPositionList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sensorGeographicMapCellPositionList;
    }
    select() {
        this.pathAnimation = this.initPathAnimation;
        super.select();
    }
    deselect() {
        this.pathAnimation = NullAnimationFactory.getFactoryInstance().getInstance(0);
        super.deselect();
    }
    setSelected(selected) {
        super.setSelected(selected);
        if (selected) {
            if (this.debug) {
                this.rtsLogHelper = RTSLayerSelectedLogHelper.getInstance();
            }
            this.rtsLayer2LogHelper = RTSLayer2SelectedLogHelper.getInstance();
        }
        else {
            if (this.debug) {
                this.rtsLogHelper = RTSLayerLogHelper.getInstance();
            }
            this.rtsLayer2LogHelper = RTSLayer2LogHelper.getInstance();
        }
    }
    //@Throws(Exception.constructor)
    setClosestGeographicMapCellHistory(pathsList) {
        this.rtsLogHelper.setClosestGeographicMapCellHistory(this, pathsList);
        var closestIndex = -1;
        ;
        var shortestDistance = Integer.MAX_VALUE;
        ;
        var currentDistance = Integer.MAX_VALUE;
        ;
        for (var index = pathsList.size() - 1; index >= 0; index--) {
            var geographicMapCellPositionBasicArrayList = pathsList.get(index);
            ;
            var geographicMapCellPosition = geographicMapCellPositionBasicArrayList.get(geographicMapCellPositionBasicArrayList.size() - 1);
            ;
            currentDistance = this.layerDistanceUtil.getDistanceAt(this, geographicMapCellPosition.getMidPoint());
            if (currentDistance < shortestDistance) {
                shortestDistance = currentDistance;
                closestIndex = index;
            }
        }
        if (closestIndex >= 0) {
            var geographicMapCellPositionBasicArrayList = pathsList.get(closestIndex);
            ;
            var geographicMapCellPosition = geographicMapCellPositionBasicArrayList.get(0);
            ;
            this.teleportTo(geographicMapCellPosition);
        }
    }
    //@Throws(Exception.constructor)
    init(geographicMapCellHistory, geographicMapCellPositionBasicArrayList) {
        geographicMapCellHistory.trackAll(geographicMapCellPositionBasicArrayList);
    }
    onMovement(trackingEvent) {
        try {
            var layerInterface = trackingEvent.getLayerInterface();
            ;
            if (layerInterface.getGroupInterface()[0] != this.getGroupInterface()[0]) {
                this.getUnitWaypointBehavior().getPossibleTargetList().add(layerInterface);
                layerInterface.onMovementFound(this.getTrackingEvent());
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "onMovement", e);
        }
    }
    //@Throws(Exception.constructor)
    onMovementFound(trackingEvent) {
        var layerInterface = trackingEvent.getLayerInterface();
        ;
        if (layerInterface.getGroupInterface()[0] != this.getGroupInterface()[0]) {
            this.getUnitWaypointBehavior().getPossibleTargetList().add(layerInterface);
        }
    }
    initRangeHack() {
        var basicWeaponPart = this.getPartInterfaceArray()[0];
        ;
        var weaponProperties = basicWeaponPart.getWeaponProperties();
        ;
        this.weaponRange = weaponProperties.getRange();
        this.initRangeAnimation = AdjustedCircleAnimation.createW(this.weaponRange, this.weaponRange, this.getWidth(), this.basicColorFactory.GREEN);
        var sensorRange = this.weaponRange * UnitLayer.SENSOR_RANGE_MULTIPLIER;
        ;
        this.initSensorRangeAnimation = AdjustedCircleAnimation.createW(sensorRange, sensorRange, this.getWidth(), this.basicColorFactory.RED);
        this.getUnitWaypointBehavior().initRange(this.weaponRange);
        this.fireTimeHelper.delay = (Math.round(weaponProperties.getReloadTime()));
    }
    //@Throws(Exception.constructor)
    processBuiltTick(allBinaryLayerManager) {
        if (!this.getHealthInterface().isAlive()) {
            if (this.isReadyForExplosion()) {
                var currentFrame = this.destroyAnimationInterface.getFrame();
                ;
                var size = this.destroyAnimationInterface.getSize() - 1;
                ;
                if (currentFrame == size) {
                    if (!this.getHealthInterface().isAlive()) {
                        this.setDestroyed(true);
                    }
                }
                else {
                    this.destroyAnimationInterface.nextFrame();
                }
            }
            else {
                this.setAnimationInterface(this.destroyAnimationInterface);
                SecondaryPlayerQueueFactory.getInstance().add(ExplosionBasicSound.getInstance());
                this.shakeListener.onSmallShakeEvent();
                this.vibration.vibrate(this.duration, 0, 0);
                this.setReadyForExplosion(true);
            }
        }
        else {
            super.processBuiltTick(allBinaryLayerManager);
        }
        this.captionAnimationHelper.tick();
        this.getUnitWaypointBehavior().processTick(allBinaryLayerManager);
    }
    teleportTo(geographicMapCellPosition) {
        var point = geographicMapCellPosition.getMidPoint();
        ;
        this.setPosition(point.getX() - this.getHalfWidth(), point.getY() - this.getHalfHeight(), this.z);
    }
    //@Throws(Exception.constructor)
    getCurrentGeographicMapCellPosition() {
        var geographicMapCompositeInterface = this.allBinaryGameLayerManagerP;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        var geographicMapCellPosition = geographicMapInterface.getCellPositionAtXY(this.x + this.getHalfWidth(), this.y + this.getHalfHeight());
        ;
        var raceTrackGeographicMap = geographicMapInterface;
        ;
        if (!raceTrackGeographicMap.isValid(geographicMapCellPosition)) {
            throw new Exception("Position is not really on the map: " + geographicMapCellPosition);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapCellPosition;
    }
    //@Throws(Exception.constructor)
    fire(layerManager, gameKeyEvent) {
        if (this.fireTimeHelper.isTimeTNT()) {
            this.fireAll(layerManager);
        }
        else {
            this.reload();
        }
    }
    //@Throws(Exception.constructor)
    left() {
        this.initResourceAnimation.previousRotation();
        this.decalAnimation.previousRotation();
        this.rotationAnimationInterfaceP.previousRotation();
    }
    //@Throws(Exception.constructor)
    right() {
        this.initResourceAnimation.nextRotation();
        this.decalAnimation.nextRotation();
        this.rotationAnimationInterfaceP.nextRotation();
    }
    down() {
        var velocityProperties = this.getVehicleProperties().getVelocityProperties();
        ;
        if (!velocityProperties.isOverXYMaxForwardVelocity()) {
            this.accelerate(this.decelerationBasicDecimal);
        }
    }
    up() {
        var velocityProperties = this.getVehicleProperties().getVelocityProperties();
        ;
        if (!velocityProperties.isOverXYMaxForwardVelocity()) {
            this.accelerate(this.accelerationBasicDecimal);
        }
    }
    initInputProcessors() {
        this.inputProcessorArray[Canvas.RIGHT] = new SpecialRightGameInputProcessor(this);
        this.inputProcessorArray[Canvas.LEFT] = new SpecialLeftGameInputProcessor(this);
        this.inputProcessorArray[Canvas.KEY_NUM0] = new SpecialFireGameInputProcessor(this);
        this.inputProcessorArray[Canvas.KEY_POUND] = this.inputProcessorArray[Canvas.KEY_NUM0];
        this.inputProcessorArray[Canvas.DOWN] = new SpecialDownGameInputProcessor(this);
        this.inputProcessorArray[Canvas.UP] = new SpecialUpGameInputProcessor(this);
        super.initInputProcessors();
    }
    //@Throws(Exception.constructor)
    processInput(layerManager) {
        var list = this.getGameKeyEventList();
        ;
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            var anyType = list.get(index);
            ;
            var key = GameKeyEventUtil.getKey(anyType);
            ;
            this.inputProcessorArray[key].processEvent(layerManager, GameKeyEvent.NONE);
        }
        list.clear();
        this.groundFriction();
        this.move();
    }
    accelerate(accelerate) {
        this.getVehicleProperties().getVelocityProperties().addVelocityi(accelerate.getUnscaled(), Math.round(this.rotationAnimationInterfaceP.getAngleInfoP().getAngle()), 90);
    }
    //@Throws(Exception.constructor)
    fireAll(layerManager) {
        var angleInfo = this.rotationAnimationInterfaceP.getAngleInfoP();
        ;
        var angle = Math.round((angleInfo.getAngle() + this.slightAngle));
        ;
        this.hashtable.put(SmallIntegerSingletonFactory.getInstance().getAt(1), SmallIntegerSingletonFactory.getInstance().getAt(Math.round(AngleFactory.getInstance().getAt(angle).getValue())));
        var salvoInterface = this.getPartInterfaceArray()[0];
        ;
        salvoInterface.process(layerManager, angle, 90);
    }
    downgrade() {
        if (this.getLevel() > 1) {
            super.downgrade();
        }
    }
    upgrade() {
        super.upgrade();
        this.initRangeHack();
    }
    groundFriction() {
        var vehicleFrictionProperties = this.getVehicleProperties().getVehicleFrictionProperties();
        ;
        this.getVehicleProperties().getVehicleFrictionProperties().friction(this.getVehicleProperties().getVelocityProperties(), vehicleFrictionProperties.getTireFrictionNominator());
    }
    //@Throws(Exception.constructor)
    trackTo(reason) {
        var waypointBehaviorBase = this.waypointBehaviorBase;
        ;
        var nextUnvisitedPathGeographicMapCellPosition = waypointBehaviorBase.getNextUnvisitedPathGeographicMapCellPosition();
        ;
        var point = nextUnvisitedPathGeographicMapCellPosition.getMidPoint();
        ;
        var dx = (this.getXP() + this.getHalfWidth()) - point.getX();
        ;
        var dy = (this.getYP() + this.getHalfHeight()) - point.getY();
        ;
        this.rtsLogHelper.trackTo(this, nextUnvisitedPathGeographicMapCellPosition, dx, dy, reason);
        this.trackToDXY(dx, dy);
    }
    //@Throws(Exception.constructor)
    trackToDXY(dx, dy) {
        var angleOfTarget = 0;
        ;
        this.trackToDXYTargetAngle(dx, dy, angleOfTarget);
    }
    //@Throws(Exception.constructor)
    turnTo(dx, dy, targetAngle) {
        var waypointBehaviorBase = this.waypointBehaviorBase;
        ;
        var nextUnvisitedPathGeographicMapCellPosition = waypointBehaviorBase.getNextUnvisitedPathGeographicMapCellPosition();
        ;
        var evading = false;
        ;
        if (this.getUnitWaypointBehavior().getSensorAction() == SensorActionFactory.getInstance().EVADE) {
            this.rtsLogHelper.evade(this);
            evading = true;
            targetAngle += 180;
        }
        var angleInfo = this.rotationAnimationInterfaceP.getAngleInfoP();
        ;
        var angle = FrameUtil.getInstance().adjustAngleToFrameAngle(angleInfo.getAngle() - 270);
        ;
        this.rtsLogHelper.turnTo(this, dx, dy, angleInfo, angle, this.movementAngle, evading, targetAngle);
        var gameKeyEventFactory = GameKeyEventFactory.getInstance();
        ;
        if (dx == 0 && dy == 0) {
            this.rtsLogHelper.doneMoving(this);
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else if ((Math.round(this.movementAngle.getValue())) == angle) {
            if (dx > 0 && this.movementAngle == this.angleFactory.LEFT) {
                this.rtsLogHelper.movingLeft(this);
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            if (dx < 0 && this.movementAngle == this.angleFactory.RIGHT) {
                this.rtsLogHelper.movingRight(this);
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            if (dy > 0 && this.movementAngle == this.angleFactory.UP) {
                this.rtsLogHelper.movingUp(this);
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            if (dy < 0 && this.movementAngle == this.angleFactory.DOWN) {
                this.rtsLogHelper.movingDown(this);
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
            this.rtsLogHelper.currentMoveEnded(this);
            if (this.movementAngle == this.angleFactory.LEFT || this.movementAngle == this.angleFactory.RIGHT) {
                this.handleDeltalY(dx, dy);
            }
            else if (this.movementAngle == this.angleFactory.UP || this.movementAngle == this.angleFactory.DOWN) {
                this.handleDeltalX(dx, dy);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            if (nextUnvisitedPathGeographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION) {
                if (this.steeringInsideGeographicMapCellPosition != nextUnvisitedPathGeographicMapCellPosition) {
                    if (Math.abs(dx) > Math.abs(dy) && dy != 0) {
                        this.handleDeltalY(dx, dy);
                    }
                    else if (dx != 0) {
                        this.handleDeltalX(dx, dy);
                    }
                    else {
                        this.handleDeltalY(dx, dy);
                    }
                }
                var deltaAngle2 = this.movementAngle.getValue() - angle;
                ;
                if (deltaAngle2 > 0) {
                    this.rtsLogHelper.rotateRight(this);
                    this.getGameKeyEventList().add(gameKeyEventFactory.getInstanceForKey(this, Canvas.RIGHT));
                }
                else {
                    this.rtsLogHelper.rotateLeft(this);
                    this.getGameKeyEventList().add(gameKeyEventFactory.getInstanceForKey(this, Canvas.LEFT));
                }
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
            else {
                this.rtsLogHelper.noRotation(this);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    handleDeltalX(dx, dy) {
        var waypointBehaviorBase = this.waypointBehaviorBase;
        ;
        var nextUnvisitedPathGeographicMapCellPosition = waypointBehaviorBase.getNextUnvisitedPathGeographicMapCellPosition();
        ;
        if (dx > 0) {
            this.movementAngle = this.angleFactory.LEFT;
            this.steeringInsideGeographicMapCellPosition = nextUnvisitedPathGeographicMapCellPosition;
        }
        else {
            this.movementAngle = this.angleFactory.RIGHT;
            this.steeringInsideGeographicMapCellPosition = nextUnvisitedPathGeographicMapCellPosition;
        }
        this.rtsLogHelper.handle(this, this.movementAngle);
    }
    handleDeltalY(dx, dy) {
        var waypointBehaviorBase = this.waypointBehaviorBase;
        ;
        var nextUnvisitedPathGeographicMapCellPosition = waypointBehaviorBase.getNextUnvisitedPathGeographicMapCellPosition();
        ;
        if (dy > 0) {
            this.movementAngle = this.angleFactory.UP;
            this.steeringInsideGeographicMapCellPosition = nextUnvisitedPathGeographicMapCellPosition;
        }
        else {
            this.movementAngle = this.angleFactory.DOWN;
            this.steeringInsideGeographicMapCellPosition = nextUnvisitedPathGeographicMapCellPosition;
        }
        this.rtsLogHelper.handle(this, this.movementAngle);
    }
    //@Throws(Exception.constructor)
    trackToDXYTargetAngle(dx, dy, targetAngle) {
        var list = this.getUnitWaypointBehavior().getSteeringVisitorList();
        ;
        if (list.size() > 0) {
            for (var index = list.size() - 1; index >= 0; index--) {
                var steeringVisitor = list.get(index);
                ;
                var anyType = steeringVisitor.visit(this);
                ;
                if (anyType ==
                    null) {
                    list.removeAt(index);
                }
            }
            this.fireOrMove();
        }
        else if (!this.turnTo(dx, dy, targetAngle)) {
            this.fireOrMove();
        }
    }
    //@Throws(Exception.constructor)
    fireOrMove() {
        var gameKeyEventFactory = GameKeyEventFactory.getInstance();
        ;
        if (this.getUnitWaypointBehavior().needToMove()) {
            this.rtsLayer2LogHelper.steeringUp(this);
            if (this.showMoreCaptionStates && !this.captionAnimationHelper.isShowing()) {
                this.captionAnimationHelper.update(UnitLayer.MOVE, this.basicColorFactory.GREEN);
            }
            this.getGameKeyEventList().add(gameKeyEventFactory.getInstanceForKey(this, Canvas.UP));
        }
        else {
            this.captionAnimationHelper.update(CommonPhoneStrings.getInstance().FIRE, this.basicColorFactory.RED);
            this.rtsLayer2LogHelper.steeringFireOrStop(this);
            this.allStop();
            this.getGameKeyEventList().add(gameKeyEventFactory.getInstanceForKey(this, Canvas.KEY_NUM0));
            TrackingEventHandler.getInstance().fireEvent(this.getTrackingEvent());
        }
    }
    move() {
        try {
            var velocityProperties = this.getVehicleProperties().getVelocityProperties();
            ;
            var velocityXScaled = velocityProperties.getVelocityXBasicDecimalP().getScaled();
            ;
            var velocityYScaled = velocityProperties.getVelocityYBasicDecimalP().getScaled();
            ;
            this.getUnitWaypointBehavior().move();
            if (velocityXScaled != 0 || velocityYScaled != 0) {
                this.getUnitWaypointBehavior().setMoving(true);
                var geographicMapCompositeInterface = this.allBinaryGameLayerManagerP;
                ;
                var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
                ;
                this.layerPartialCellPositionsUtil.getAllDXY(geographicMapInterface, this, Math.round(velocityXScaled), Math.round(velocityYScaled), UnitLayer.getPartialpositionlist());
                var cellPosition = DropCellPositionHistory.getInstance().getCellPositionWithDrop(UnitLayer.getPartialpositionlist());
                ;
                if (cellPosition == this.cellPositionFactory.NONE) {
                    var tiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
                    ;
                    var tiledLayerUtil = TiledLayerUtil.getInstance();
                    ;
                    var x = this.x + Math.round(velocityXScaled);
                    ;
                    var y = this.y + Math.round(velocityYScaled);
                    ;
                    x = tiledLayerUtil.keepOnMapX(tiledLayer, x, this.getWidth());
                    y = tiledLayerUtil.keepOnMapY(tiledLayer, y, this.getHeight());
                    this.setPosition(x, y, this.z);
                }
                else {
                    var allbinaryLayer = DropCellPositionHistory.getInstance().getLayerInterface(cellPosition);
                    ;
                    this.getUnitWaypointBehavior().setMovingFromStopped(false);
                    this.getUnitWaypointBehavior().addBuildingChase(allbinaryLayer, cellPosition);
                }
            }
            if (this.getUnitWaypointBehavior().isMoving()) {
                TrackingEventHandler.getInstance().fireEvent(this.getTrackingEvent());
            }
            else {
                this.getUnitWaypointBehavior().setMovingFromStopped(false);
            }
            if (this.getUnitWaypointBehavior().isMovingFromStopped() && this.isVisible()) {
                SecondaryPlayerQueueFactory.getInstance().add(this.moveSoundInterface);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "move", e);
        }
    }
    allStop() {
        var velocityProperties = this.getVehicleProperties().getVelocityProperties();
        ;
        velocityProperties.getVelocityXBasicDecimalP().setint(0);
        velocityProperties.getVelocityYBasicDecimalP().setint(0);
    }
    paint(graphics) {
        if (this.isVisible()) {
            super.paint(graphics);
            var viewPosition = this.getViewPosition();
            ;
            var viewX = viewPosition.getX();
            ;
            var viewY = viewPosition.getY();
            ;
            this.decalAnimation.paintXY(graphics, viewX, viewY);
            this.rangeAnimation.paintXY(graphics, viewX, viewY);
            this.sensorRangeAnimation.paintXY(graphics, viewX, viewY);
            this.damageFloatersPaintableInterface.paint(graphics);
            this.healthBar.paint(graphics);
            this.captionAnimationHelper.paintXY(graphics, viewX, viewY);
            this.pathAnimation.paintXY(graphics, viewX, viewY);
            this.resourceAnimation.paintXY(graphics, viewX, viewY);
        }
    }
    //@Throws(Exception.constructor)
    onBuildingEvent(event) {
        var buildingLayer = event.getRtsLayer();
        ;
        this.getUnitWaypointBehavior().moveAwayFromBuilding(buildingLayer);
    }
    getVehicleProperties() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.vehicleProperties;
    }
    //@Throws(Exception.constructor)
    damage(damage, damageType) {
        super.damage(damage, damageType);
        this.damageFloaters.add(damage);
        if (damage > 0) {
            this.getHealthInterface().damage(damage);
        }
    }
    //@Throws(Exception.constructor)
    getDamage(damageType) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    //@Throws(Exception.constructor)
    setDestroyed(destroyed) {
        this.logUtil.putF(this.commonStrings.START, this, "setDestroyed");
        super.setDestroyed(destroyed);
        if (this.isDestroyed()) {
            WaypointEventHandlerFactory.getInstance(this.getGroupInterface()[0]).removeListener(this.getUnitWaypointBehavior());
            TrackingEventHandler.getInstance().removeListener(this);
            BuildingEventHandler.getInstance().removeListener(this);
            if (!this.getHealthInterface().isAlive()) {
                var damage = this.getHealthInterface().getMaxHealth();
                ;
                if (damage > 10) {
                    SecondaryPlayerQueueFactory.getInstance().add(ExplosionBasicSound.getInstance());
                    if (damage < 100) {
                        this.shakeListener.onSmallShakeEvent();
                        this.vibration.vibrate(this.duration, 0, 0);
                    }
                    else if (damage < 1000) {
                        this.shakeListener.onMediumShakeEvent();
                        this.vibration.vibrate(this.duration * 2, 0, 0);
                    }
                    else if (damage < 3000) {
                        this.shakeListener.onLargeShakeEvent();
                        this.vibration.vibrate(this.duration * 4, 0, 0);
                    }
                }
            }
        }
    }
    getLoad() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.resourceLoad;
    }
    //@Throws(Exception.constructor)
    clearResourceAnimation() {
        this.resourceAnimation = NullIndexedAnimationFactory.getFactoryInstance().getInstance(0);
    }
    //@Throws(Exception.constructor)
    setLoad(resource) {
        if (resource > 0) {
            this.resourceAnimation = this.initResourceAnimation;
        }
        else {
            this.clearResourceAnimation();
        }
        this.resourceLoad = resource;
    }
    addLoad(resource) {
        this.resourceLoad += resource;
    }
    //@Throws(Exception.constructor)
    handleCost(ownerLayer) {
        if (this.getLoad() > 0) {
            this.CAPITAL_EVENT.setValue(this.getLoad());
            CapitalEventHandlerFactory.getInstance(ownerLayer.getGroupInterface()[0]).fireEvent(this.CAPITAL_EVENT);
            this.setLoad(0);
        }
    }
    createHudPaintable() {
        var rtsLayerHudPaintable = RTSLayerHudPaintable.getInstance();
        ;
        rtsLayerHudPaintable.setBasicColorP(this.allBinaryGameLayerManagerP.getForegroundBasicColor());
        rtsLayerHudPaintable.setRtsLayer(this);
        //if statement needs to be on the same line and ternary does not work the same way.
        return rtsLayerHudPaintable;
    }
    getHudPaintable() {
        var rtsLayerHudPaintable = RTSLayerHudPaintable.getInstance();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return rtsLayerHudPaintable;
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return UnitLayer.getStaticType();
        ;
    }
    getUnitWaypointBehavior() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getWaypointBehavior();
    }
    getTrackingEvent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.trackingEvent;
    }
    getCaptionAnimationHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.captionAnimationHelper;
    }
    isSelfUpgradeable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getMaxResourceLoad() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxResourceLoad;
    }
}
UnitLayer.partialPositionList = new BasicArrayListS(4);
UnitLayer.SENSOR_RANGE_MULTIPLIER = 6;
UnitLayer.MOVE = "Moving";
