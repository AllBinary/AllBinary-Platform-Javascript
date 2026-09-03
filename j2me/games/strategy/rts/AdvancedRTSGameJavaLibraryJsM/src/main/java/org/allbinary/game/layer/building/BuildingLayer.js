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
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { ExplosionBasicSound } from '../../../../../org/allbinary/ag/weapon/media/audio/ExplosionBasicSound.js';
//not GWT import const ExplosionBasicSound = globalThis.org.allbinary.ag.weapon.media.audio.ExplosionBasicSound;
import { NullAnimationFactory } from '../../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;
import { NullIndexedAnimationFactory } from '../../../../../org/allbinary/animation/NullIndexedAnimationFactory.js';
//not GWT import const NullIndexedAnimationFactory = globalThis.org.allbinary.animation.NullIndexedAnimationFactory;
import { GroupFactory } from '../../../../../org/allbinary/game/identification/GroupFactory.js';
//not GWT import const GroupFactory = globalThis.org.allbinary.game.identification.GroupFactory;
import { NullRTSFormInputFactory } from '../../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
//not GWT import const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;
import { VisibleCellPositionsSingleton } from '../../../../../org/allbinary/game/input/form/VisibleCellPositionsSingleton.js';
//not GWT import const VisibleCellPositionsSingleton = globalThis.org.allbinary.game.input.form.VisibleCellPositionsSingleton;
import { AdvancedRTSGameLayer } from '../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
//not GWT import const AdvancedRTSPlayerLayerInterface = globalThis.org.allbinary.game.layer.AdvancedRTSPlayerLayerInterface;
import { AdvancedRTSProperties } from '../../../../../org/allbinary/game/layer/AdvancedRTSProperties.js';
//not GWT import const AdvancedRTSProperties = globalThis.org.allbinary.game.layer.AdvancedRTSProperties;
import { CollidableRTSBehavior } from '../../../../../org/allbinary/game/layer/CollidableRTSBehavior.js';
//not GWT import const CollidableRTSBehavior = globalThis.org.allbinary.game.layer.CollidableRTSBehavior;
import { RTSLayerUtil } from '../../../../../org/allbinary/game/layer/RTSLayerUtil.js';
//not GWT import const SelectionHudPaintable = globalThis.org.allbinary.game.layer.SelectionHudPaintable;
import { Waypoint } from '../../../../../org/allbinary/game/layer/waypoint/Waypoint.js';
//not GWT import const Waypoint = globalThis.org.allbinary.game.layer.waypoint.Waypoint;
import { TileLayerPositionIntoViewPosition } from '../../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js';
//not GWT import const TileLayerPositionIntoViewPosition = globalThis.org.allbinary.game.view.TileLayerPositionIntoViewPosition;
import { RectangleFactory } from '../../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const RectangleFactory = globalThis.org.allbinary.graphics.RectangleFactory;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const Direction = globalThis.org.allbinary.direction.Direction;
import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DamageFloaters = globalThis.org.allbinary.game.combat.damage.DamageFloaters;
import { Health } from '../../../../../org/allbinary/game/health/Health.js';
//not GWT import const GeographicMapCellPositionAreaBase = globalThis.org.allbinary.game.layer.GeographicMapCellPositionAreaBase;
import { NullPathFindingLayer } from '../../../../../org/allbinary/game/layer/NullPathFindingLayer.js';
//not GWT import const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;
import { TrackingEventHandler } from '../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
import { SecondaryPlayerQueueFactory } from '../../../../../org/allbinary/media/audio/SecondaryPlayerQueueFactory.js';
//not GWT import const SecondaryPlayerQueueFactory = globalThis.org.allbinary.media.audio.SecondaryPlayerQueueFactory;
import { SelectSound } from '../../../../../org/allbinary/media/audio/SelectSound.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
import { GeographicMapDirectionUtil } from '../../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js';
//not GWT import const GeographicMapDirectionUtil = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapDirectionUtil;
import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
//not GWT import const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;
//not plain js import { BasicArrayListS } from '../../../../../org/allbinary/util/BasicArrayListS.js';
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
import { RemoteInfo } from '../../../../../org/allbinary/game/multiplayer/layer/RemoteInfo.js';
//not GWT import const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SimulatedBuildingPropertiesFactory } from './SimulatedBuildingPropertiesFactory.js';
//not GWT import const BuildingPropertiesFactory = globalThis.org.allbinary.game.layer.building.BuildingPropertiesFactory;
import { BuildingInfoHudPaintable } from './BuildingInfoHudPaintable.js';
//not GWT import const BuildingInfoHudPaintable = globalThis.org.allbinary.game.layer.building.BuildingInfoHudPaintable;
export class BuildingLayer extends AdvancedRTSGameLayer {
    //@Throws(Exception.constructor)
    static createSimulated() {
        var nullAnimationInterfaceFactoryInterface = NullAnimationFactory.getFactoryInstance();
        ;
        var nullIndexedAnimationInterfaceFactoryInterface = NullIndexedAnimationFactory.getFactoryInstance();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BuildingLayer(RemoteInfo.REMOTE_INFO, SimulatedBuildingPropertiesFactory.getInstance(), AdvancedRTSProperties.createPropertiesSimulated(), GroupFactory.getInstance().NULL_GROUP_ARRAY, StringUtil.getInstance().EMPTY_STRING, StringUtil.getInstance().EMPTY_STRING, Health.NULL_HEALTH, NullRTSFormInputFactory.getInstance(), nullAnimationInterfaceFactoryInterface, nullIndexedAnimationInterfaceFactoryInterface, nullAnimationInterfaceFactoryInterface, nullAnimationInterfaceFactoryInterface, nullIndexedAnimationInterfaceFactoryInterface, NullIndexedAnimationFactory.getFactoryInstance(), RectangleFactory.SINGLETON, 0, 0);
    }
    static getStaticType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 2;
    }
    constructor(remoteInfo, buildingPropertiesFactory, advancedRTSProperties, groupInterface, rootName, name, healthInterface, rtsFormInput, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y) {
        super(remoteInfo, NullPathFindingLayer.NULL_PATH_FINDING_LAYER, advancedRTSProperties, groupInterface, rootName, name, healthInterface, rtsFormInput, animationInterfaceFactoryInterface, emptyAnimationInterfaceFactoryInterface, baseAnimationInterfaceFactoryInterface, buildAnimationInterfaceFactoryInterface, verticleBuildAnimationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, new TileLayerPositionIntoViewPosition());
        this.buildingLevelCost = 0;
        this.productivity = 0;
        this.local = false;
        this.timeDelayHelper = new TimeDelayHelper(3000);
        //For kotlin this is before the body of the constructor.
        this.setCollidableInferface(new CollidableRTSBehavior(true));
        this.getWaypointBehavior().setWaypoint(new Waypoint(this, SelectSound.getInstance()));
        this.damageFloaters = buildingPropertiesFactory.getDamageFloaters(this);
        this.damageFloatersPaintableInterface = buildingPropertiesFactory.damageFloatersPaintableInterface;
        this.healthBar = buildingPropertiesFactory.getHealthBar(this);
        this.pathsHashtable = buildingPropertiesFactory.getHashtable();
        this.setMaxLevel(30);
        this.setProductivity(1);
        this.setEfficiency(this.calculateEfficiency());
        this.efficiencyPerLevel = buildingPropertiesFactory.getEfficiencyPerLevel(this);
        this.efficiency = this.efficiencyPerLevel;
        this.generateMoveOutOfBuildAreaPaths();
        this.trackingEvent = buildingPropertiesFactory.getTrackingEvent(this);
    }
    initVisibility(rtsPlayerLayerInterface) {
        var advancedRTSPlayerLayerInterface = rtsPlayerLayerInterface;
        ;
        if (advancedRTSPlayerLayerInterface.isLocalPlayer()) {
            this.local = true;
            this.addVisibility();
        }
        else {
            this.local = false;
        }
        super.initVisibility(rtsPlayerLayerInterface);
    }
    //@Throws(Exception.constructor)
    construct(rtsPlayerLayerInterface) {
        super.construct(rtsPlayerLayerInterface);
        TrackingEventHandler.getInstance().addListenerInterface(this);
    }
    onMovement(trackingEvent) {
        try {
            var layerInterface = trackingEvent.getLayerInterface();
            ;
            if (layerInterface.getGroupInterface()[0] != this.getGroupInterface()[0]) {
                layerInterface.onMovementFound(this.trackingEvent);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "onMovement", e);
        }
    }
    //@Throws(Exception.constructor)
    processBuiltTick(allBinaryLayerManager) {
        if (this.getHealthInterface().isDamaged()) {
            this.setAnimationInterface(this.destroyAnimationInterface);
        }
        if (!this.getHealthInterface().isAlive()) {
            if (this.isReadyForExplosion()) {
                var currentFrame = this.destroyAnimationInterface.getFrame();
                ;
                var size = this.destroyAnimationInterface.getSize() - 1;
                ;
                if (currentFrame == size && !this.timeDelayHelper.isTimeTNT()) {
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
                this.timeDelayHelper.setStartTimeTNT();
                this.setReadyForExplosion(true);
            }
        }
        else {
            super.processBuiltTick(allBinaryLayerManager);
        }
        this.indexedButShouldBeRotationAnimationInterface.nextFrame();
    }
    calculateEfficiency() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.efficiencyPerLevel;
    }
    getCost() {
        var total = RTSLayerUtil.getInstance().getCostExponential((this.getLevel() * this.getBuildingLevelCost()));
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round(total);
    }
    getDowngradeCost() {
        var downgradeCost = RTSLayerUtil.getInstance().getCostExponential(((this.getLevel() - 1) * this.getBuildingLevelCost()));
        ;
        this.logUtil.putF("Cost: " + downgradeCost, this, "getDowngradeCost");
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round(downgradeCost) * 9 / 10;
    }
    getUpgradeCost() {
        var upgradeCost = RTSLayerUtil.getInstance().getCostExponential(((this.getLevel() + 1) * this.getBuildingLevelCost()));
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round(upgradeCost);
    }
    downgrade() {
        super.downgrade();
        this.setProductivity(this.getProductivity() - 1);
        this.setEfficiency(this.getEfficiency() - this.calculateEfficiency());
        this.getHealthInterface().setMaxHealth(this.getHealthInterface().getMaxHealth() - ((this.getLevel() + 1) * 100));
    }
    upgrade() {
        super.upgrade();
        this.setProductivity(this.getProductivity() + 1);
        this.setEfficiency(this.getEfficiency() + this.calculateEfficiency());
        this.getHealthInterface().setMaxHealth(this.getHealthInterface().getMaxHealth() + (this.getLevel() * 100));
    }
    getBuildingLevelCost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.buildingLevelCost;
    }
    setBuildingLevelCost(buildingLevelCost) {
        this.buildingLevelCost = buildingLevelCost;
    }
    getProductivity() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.productivity;
    }
    setProductivity(productivity) {
        this.productivity = productivity;
    }
    getEfficiency() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.efficiency;
    }
    setEfficiency(efficiency) {
        this.efficiency = efficiency;
    }
    //@Throws(Exception.constructor)
    generateMoveOutOfBuildAreaPaths() {
        var occupyList = this.geographicMapCellPositionAreaBase.getOccupyingGeographicMapCellPositionList();
        ;
        var surroundList = this.geographicMapCellPositionAreaBase.getSurroundingGeographicMapCellPositionList();
        ;
        var NO_DIRECTION = DirectionFactory.getInstance().NO_DIRECTION;
        ;
        var geographicMapDirectionUtil = GeographicMapDirectionUtil.getInstance();
        ;
        var pathsList;
        ;
        var occupyGeographicMapCellPosition;
        ;
        var surroundGeographicMapCellPosition;
        ;
        var list;
        ;
        for (var index2 = occupyList.size() - 1; index2 >= 0; index2--) {
            pathsList = new BasicArrayListD();
            occupyGeographicMapCellPosition = occupyList.get(index2);
            for (var index = surroundList.size() - 1; index >= 0; index--) {
                surroundGeographicMapCellPosition = surroundList.get(index);
                if (geographicMapDirectionUtil.getEightDirectionFromCellPositionToAdjacentCellPosition(surroundGeographicMapCellPosition, occupyGeographicMapCellPosition) != NO_DIRECTION) {
                    list = new BasicArrayListS(1);
                    list.add(surroundGeographicMapCellPosition);
                    pathsList.add(list);
                }
            }
            this.pathsHashtable.put(occupyGeographicMapCellPosition, pathsList);
        }
    }
    getMoveOutOfBuildAreaPath(geographicMapCellPosition) {
        var pathsList = this.pathsHashtable.get(geographicMapCellPosition);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return pathsList;
    }
    getEndGeographicMapCellPositionList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellPositionAreaBase.getSurroundingGeographicMapCellPositionList();
        ;
    }
    shouldHandleStartSameAsEnd() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    paint(graphics) {
        if (this.isVisible()) {
            super.paint(graphics);
            this.damageFloatersPaintableInterface.paint(graphics);
            this.healthBar.paint(graphics);
        }
    }
    //@Throws(Exception.constructor)
    damage(damage, damageType) {
        super.damage(damage, damageType);
        this.damageFloaters.add(damage);
        if (damage > 0)
            this.getHealthInterface().damage(damage);
    }
    //@Throws(Exception.constructor)
    getDamage(damageType) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    addVisibility() {
        var geographicMapCellPositionArea = this.geographicMapCellPositionAreaBase;
        ;
        var occupyList = geographicMapCellPositionArea.getOccupyingGeographicMapCellPositionList();
        ;
        VisibleCellPositionsSingleton.getInstance().addStationaryCellPositions(occupyList);
        var surroundList = geographicMapCellPositionArea.getSurroundingGeographicMapCellPositionList();
        ;
        VisibleCellPositionsSingleton.getInstance().addStationaryCellPositions(surroundList);
    }
    removeVisibility() {
        var occupyList = this.geographicMapCellPositionAreaBase.getOccupyingGeographicMapCellPositionList();
        ;
        VisibleCellPositionsSingleton.getInstance().removeStationaryCellPositions(occupyList);
        var surroundList = this.geographicMapCellPositionAreaBase.getSurroundingGeographicMapCellPositionList();
        ;
        VisibleCellPositionsSingleton.getInstance().removeStationaryCellPositions(surroundList);
    }
    //@Throws(Exception.constructor)
    setDestroyed(destroyed) {
        super.setDestroyed(destroyed);
        if (this.isDestroyed()) {
            DropCellPositionHistory.getInstance().removeAll(this);
            TrackingEventHandler.getInstance().removeListener(this);
            if (this.local) {
                this.removeVisibility();
            }
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
    createHudPaintable() {
        var buildingInfoHudPaintable = BuildingInfoHudPaintable.getInstance();
        ;
        buildingInfoHudPaintable.setBasicColorP(this.allBinaryGameLayerManagerP.getForegroundBasicColor());
        buildingInfoHudPaintable.setRtsLayer(this);
        //if statement needs to be on the same line and ternary does not work the same way.
        return buildingInfoHudPaintable;
    }
    getHudPaintable() {
        var buildingInfoHudPaintable = BuildingInfoHudPaintable.getInstance();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return buildingInfoHudPaintable;
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BuildingLayer.getStaticType();
        ;
    }
}
