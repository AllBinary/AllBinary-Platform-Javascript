/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2003 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import const RTSFormInput
import { MultiPlayerGameLayer } from '../../../../org/allbinary/game/multiplayer/layer/MultiPlayerGameLayer.js';
//not GWT import const IndexedAnimation
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory
import { NullIndexedAnimationFactory } from '../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
//not GWT import const CaptionAnimationHelperBase
import { DestroyedLayerProcessor } from '../../../../org/allbinary/game/combat/destroy/DestroyedLayerProcessor.js';
//not GWT import const DestroyedLayerProcessor
import { Health } from '../../../../org/allbinary/game/health/Health.js';
//not GWT import const Group
import { GroupFactory } from '../../../../org/allbinary/game/identification/GroupFactory.js';
//not GWT import const GameInputProcessor
import { GameInputProcessorUtil } from '../../../../org/allbinary/game/input/GameInputProcessorUtil.js';
//not GWT import const GameKeyEventSourceInterface
import { InputFactory } from '../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory
import { NullRTSFormInputFactory } from '../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
//not GWT import const NullRTSFormInputFactory
import { Waypoint2LogHelper } from '../../../../org/allbinary/game/layer/waypoint/Waypoint2LogHelper.js';
//not GWT import const Waypoint2LogHelper
import { WaypointLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointLogHelper.js';
//not GWT import const WaypointLogHelper
import { WaypointRunnableLogHelper } from '../../../../org/allbinary/game/layer/waypoint/WaypointRunnableLogHelper.js';
//not GWT import const TrackingEvent
import { TileLayerPositionIntoViewPosition } from '../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js';
//not GWT import const Rectangle
import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const RectangleFactory
import { ScrollSelectionForm } from '../../../../org/allbinary/graphics/form/ScrollSelectionForm.js';
//not GWT import const BasicGeographicMap
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
import { ViewPositionEventHandler } from '../../../../org/allbinary/view/event/ViewPositionEventHandler.js';
//not GWT import const ViewPositionEventHandler
import { RemoteInfo } from '../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
//not GWT import const RemoteInfo
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { LayerDistanceUtil } from '../../../../org/allbinary/math/LayerDistanceUtil.js';
//not GWT import const GeographicMapCompositeInterface
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not GWT import - same folder const PathFindingLayerInterface
import { RTSLayer2LogHelper } from './RTSLayer2LogHelper.js';
//not GWT import - same folder const GeographicMapCellPositionAreaBase
import { GeographicMapCellPositionArea } from './GeographicMapCellPositionArea.js';
//not GWT import - same folder const RTSPlayerLayerInterface
import { RTSLayerUtil } from './RTSLayerUtil.js';
//not GWT import - same folder const SelectionHudPaintable
export class RTSLayer extends MultiPlayerGameLayer {
    //@Throws(Exception.constructor)
    static createSimulatedInstance(remoteInfo) {
        var nullAnimationInterfaceFactoryInterface = NullAnimationFactory.getFactoryInstance();
        ;
        var nullIndexedAnimationInterfaceFactoryInterface = NullIndexedAnimationFactory.getFactoryInstance();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new RTSLayer(RemoteInfo.REMOTE_INFO, GroupFactory.getInstance().NULL_GROUP_ARRAY, StringUtil.getInstance().EMPTY_STRING, StringUtil.getInstance().EMPTY_STRING, Health.NULL_HEALTH, NullRTSFormInputFactory.getInstance(), nullAnimationInterfaceFactoryInterface, nullIndexedAnimationInterfaceFactoryInterface, nullAnimationInterfaceFactoryInterface, nullAnimationInterfaceFactoryInterface, nullIndexedAnimationInterfaceFactoryInterface, NullIndexedAnimationFactory.getFactoryInstance(), RectangleFactory.SINGLETON, 0, 0, new TileLayerPositionIntoViewPosition());
    }
    static getMinStaticType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 1;
    }
    static getMaxStaticType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 4;
    }
    static isRTSLayer(layerInterface) {
        if (layerInterface.getType() >= RTSLayer.getMinStaticType() && layerInterface.getType() <= RTSLayer.getMaxStaticType()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    constructor(remoteInfo, groupInterface, rootName, name, healthInterface, rtsFormInput, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, viewPosition) {
        super(remoteInfo, groupInterface, name, rectangle, viewPosition);
        this.debug = true;
        this.showMoreCaptionStates = this.debug;
        this.inputProcessorArray = new Array(InputFactory.getInstance().MAX);
        this.rtsLayer2LogHelper = RTSLayer2LogHelper.getInstance();
        this.waypointLogHelperP = WaypointLogHelper.getInstance();
        this.waypoint2LogHelperP = Waypoint2LogHelper.getInstance();
        this.waypointRunnableLogHelperP = WaypointRunnableLogHelper.getInstance();
        this.buildFrameTimeHelper = new TimeDelayHelper(50);
        this.fireTimeHelper = new TimeDelayHelper(700);
        this.hashtable = StdUtil.getInstance().createHashtable();
        this.BUILD_VALUE = 63;
        this.healthInterface = Health.NULL_HEALTH;
        this.level = 1;
        this.maxLevel = 1;
        this.hackVerticleBuild = this.BUILD_VALUE;
        this.slightAngle = 0;
        this.percentCompleteP = 0;
        this.destroyed = false;
        this.selected = false;
        this.rtsLayerUtil = RTSLayerUtil.getInstance();
        this.layerDistanceUtil = LayerDistanceUtil.getInstance();
        //For kotlin this is before the body of the constructor.
        this.initInputProcessors();
        this.rootName = rootName;
        this.healthInterface = healthInterface;
        this.rtsFormInput = rtsFormInput;
        this.setPosition(x, y, this.z);
        this.verticleBuildAnimationInterface = verticleBuildAnimationInterfaceFactoryInterface.getInstance(0);
        this.buildAnimationInterface = buildAnimationInterfaceFactoryInterface.getInstance(0);
        this.baseAnimationInterface = baseAnimationInterfaceFactoryInterface.getInstance(0);
        this.emptyAnimationInterface = emptyAnimationInterfaceFactoryInterface.getInstance(0);
        this.indexedButShouldBeRotationAnimationInterface = animationInterfaceFactoryInterface.getInstance(0);
        this.initAnimationInterface = this.indexedButShouldBeRotationAnimationInterface;
        this.destroyAnimationInterface = proceduralAnimationInterfaceFactoryInterface.getInstanceAnimation(this.indexedButShouldBeRotationAnimationInterface);
        var animation = NullAnimationFactory.getFactoryInstance().getInstance(0);
        ;
        this.rangeAnimation = animation;
        this.initRangeAnimation = animation;
        this.sensorRangeAnimation = animation;
        this.initSensorRangeAnimation = animation;
        this.animationInterface = this.initAnimationInterface;
        this.geographicMapCellPositionAreaBase = new GeographicMapCellPositionArea(this);
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
        var geographicMapCompositeInterface = this.allBinaryGameLayerManagerP;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        var tiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        ;
        var viewPosition2 = this.getViewPosition();
        ;
        viewPosition2.setTiledLayer(tiledLayer);
        this.updateWaypointBehavior(geographicMapInterface);
    }
    //@Throws(Exception.constructor)
    updateWaypointBehavior(geographicMapInterface) {
        this.geographicMapCellPositionAreaBase.update(geographicMapInterface);
    }
    //@Throws(Exception.constructor)
    construct(rtsPlayerLayerInterface) {
        ViewPositionEventHandler.getInstance().addListener(this);
        this.animationInterface = this.buildAnimationInterface;
        this.hackVerticleBuild = 0;
    }
    select() {
        this.rangeAnimation = this.initRangeAnimation;
        this.sensorRangeAnimation = this.initSensorRangeAnimation;
        this.setSelected(true);
    }
    deselect() {
        var animation = NullAnimationFactory.getFactoryInstance().getInstance(0);
        ;
        this.rangeAnimation = animation;
        this.sensorRangeAnimation = animation;
        this.setSelected(false);
    }
    setSelected(selected) {
        this.selected = selected;
    }
    isSelected() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.selected;
    }
    getPercentComplete() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.percentCompleteP;
    }
    getScrollSelectionForm() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ScrollSelectionForm.getNullScrollSelectionForm();
        ;
    }
    initInputProcessors() {
        GameInputProcessorUtil.init(this.inputProcessorArray);
    }
    //@Throws(Exception.constructor)
    processBuiltTick(allBinaryLayerManager) {
        this.animationInterface = this.indexedButShouldBeRotationAnimationInterface;
    }
    processTick(allBinaryLayerManager) {
        try {
            if (this.isCompleted()) {
                this.processBuiltTick(allBinaryLayerManager);
            }
            else {
                this.build();
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "processTick", e);
        }
    }
    //@Throws(Exception.constructor)
    processInput(layerManager) {
    }
    reload() {
    }
    onMovement(trackingEvent) {
    }
    //@Throws(Exception.constructor)
    onMovementFound(trackingEvent) {
    }
    paint(graphics) {
        super.paintFirst(graphics);
        var viewPosition = this.getViewPosition();
        ;
        var viewX = viewPosition.getX();
        ;
        var viewY = viewPosition.getY();
        ;
        this.getAnimationInterface().paintXY(graphics, viewX, viewY);
    }
    //@Throws(Exception.constructor)
    damage(damage, damageType) {
    }
    getSourceId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RTSLayer.id;
    }
    downgrade() {
        this.rtsLayerUtil.downgrade(this);
    }
    upgrade() {
        this.rtsLayerUtil.upgrade(this);
    }
    isCompleted() {
        if (this.hackVerticleBuild < this.BUILD_VALUE) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    //@Throws(Exception.constructor)
    build() {
        if (this.buildFrameTimeHelper.isTimeTNT()) {
            this.animationInterface = this.buildAnimationInterface;
            this.verticleBuildAnimationInterface.nextFrame();
            this.hackVerticleBuild++;
        }
        this.percentCompleteP = 100 * this.hackVerticleBuild / this.BUILD_VALUE;
        this.getHudPaintable().updateInfo();
    }
    isSelfUpgradeable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    getCost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsLayerUtil.getCost(this);
        ;
    }
    getDowngradeCost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsLayerUtil.getDowngradeCost(this);
        ;
    }
    getUpgradeCost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsLayerUtil.getUpgradeCost(this);
        ;
    }
    isUpgradeable() {
        if (this.getLevel() < this.getMaxLevel()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    isDowngradeable() {
        if (this.getLevel() > 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    getLevel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.level;
    }
    setLevel(level) {
        this.level = level;
    }
    getVerticleBuildAnimationInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.verticleBuildAnimationInterface;
    }
    getAnimationInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterface;
    }
    setAnimationInterface(animationInterface) {
        this.animationInterface = animationInterface;
    }
    //@Throws(Exception.constructor)
    setTarget(targetGameLayer) {
        var anotherTargetDistance = this.layerDistanceUtil.getDistance(this, targetGameLayer);
        ;
        var waypointBehaviorBase = this.getWaypointBehavior();
        ;
        waypointBehaviorBase.setTargetWithDistance(targetGameLayer, anotherTargetDistance);
    }
    createHudPaintable() {
        throw new RuntimeException();
    }
    getHudPaintable() {
        throw new RuntimeException();
    }
    getMaxLevel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxLevel;
    }
    setMaxLevel(maxLevel) {
        this.maxLevel = maxLevel;
    }
    getHealthInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.healthInterface;
    }
    setHealthInterface(healthInterface) {
        this.healthInterface = healthInterface;
    }
    getRTSFormInput() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsFormInput;
    }
    //@Throws(Exception.constructor)
    isDestroyed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.destroyed;
    }
    //@Throws(Exception.constructor)
    setDestroyed(destroyed) {
        this.destroyed = destroyed;
        if (this.isDestroyed()) {
            DestroyedLayerProcessor.getInstance().add(this);
            ViewPositionEventHandler.getInstance().removeListener(this);
        }
    }
    getEndGeographicMapCellPositionList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellPositionAreaBase.getOccupyingGeographicMapCellPositionList();
        ;
    }
    getGeographicMapCellPositionArea() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellPositionAreaBase;
    }
    shouldHandleStartSameAsEnd() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    //@Throws(Exception.constructor)
    handleCost(ownerLayer) {
    }
    getWaypointBehavior() {
        throw new RuntimeException();
    }
    getParentLayer() {
        throw new RuntimeException();
    }
    getRTSLayer2LogHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsLayer2LogHelper;
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
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getCaptionAnimationHelper() {
        throw new RuntimeException();
    }
    isShowMoreCaptionStates() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.showMoreCaptionStates;
    }
    //@Throws(Exception.constructor)
    init(geographicMapCellHistory, geographicMapCellPositionBasicArrayList) {
    }
    //@Throws(Exception.constructor)
    getCurrentGeographicMapCellPosition() {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    getTopLeftGeographicMapCellPosition() {
        throw new RuntimeException();
    }
    getMoveOutOfBuildAreaPath(geographicMapCellPosition) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    setClosestGeographicMapCellHistory(pathsList) {
    }
    teleportTo(geographicMapCellPosition) {
    }
    //@Throws(Exception.constructor)
    setLoad(resource) {
    }
    //@Throws(Exception.constructor)
    getSurroundingGeographicMapCellPositionList() {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    trackTo(reason) {
    }
    //@Throws(Exception.constructor)
    trackToDXY(dx, dy) {
    }
    isWaypointListEmptyOrOnlyTargets() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getTrackingEvent() {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    buildingChase(allbinaryLayer, cellPosition) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    allStop() {
    }
    implmentsTickableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    implmentsGameInputInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    getRootName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rootName;
    }
    getRotationAnimationInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.indexedButShouldBeRotationAnimationInterface;
    }
    setFrame(index) {
        this.getRotationAnimationInterface().setFrame(index);
    }
    setRotationAnimationInterface(rotationAnimationInterface) {
        this.indexedButShouldBeRotationAnimationInterface = rotationAnimationInterface;
    }
}
RTSLayer.id = 0;
RTSLayer.MAIN_INDEX = 0;
RTSLayer.SECONDARY_INDEX = 1;
