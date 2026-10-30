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
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas
import { SteeringVisitor } from '../../../../../org/allbinary/game/layer/SteeringVisitor.js';
//not GWT import const CollidableCompositeLayer
import { CollidableRTSBehavior } from '../../../../../org/allbinary/game/layer/CollidableRTSBehavior.js';
//not GWT import const CollidableRTSBehavior
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const AllBinaryTiledLayer
import { TiledLayerUtil } from '../../../../../org/allbinary/game/layer/TiledLayerUtil.js';
//not GWT import const TiledLayerUtil
import { LayerPartialCellPositionsUtil } from '../../../../../org/allbinary/game/layer/geographic/map/LayerPartialCellPositionsUtil.js';
//not GWT import const LayerPartialCellPositionsUtil
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const GeographicMapCompositeInterface
import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
//not GWT import const DropCellPositionHistory
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { UnitLayer } from './UnitLayer.js';
export class CollidableUnitBehavior extends CollidableRTSBehavior {
    constructor(collidable) {
        super(collidable);
        //inner= member=true isStatic=
        this.SimpleSteeringVisitor = (() => {
            const outer$CollidableUnitBehavior = this;
            return class extends SteeringVisitor {
                visit(anyType) {
                    let logUtil = LogUtil.getInstance();
                    ;
                    try {
                        let ownerLayer = anyType;
                        ;
                        if (this.getList().size() > 0) {
                            let allbinaryLayer = this.getList().get(0);
                            ;
                            let clear = outer$CollidableUnitBehavior.steer(ownerLayer, allbinaryLayer);
                            ;
                            if (clear) {
                                this.getList().clear();
                                //if statement needs to be on the same line and ternary does not work the same way.
                                return NullUtil.getInstance().NULL_OBJECT;
                            }
                            //if statement needs to be on the same line and ternary does not work the same way.
                            return BooleanFactory.getInstance().TRUE;
                        }
                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance().NULL_OBJECT;
                    }
                    catch (caught) {
                        {
                            const e = caught;
                            let commonStrings = CommonStrings.getInstance();
                            ;
                            logUtil.put(commonStrings.EXCEPTION, this, "visit", e);
                            //if statement needs to be on the same line and ternary does not work the same way.
                            return NullUtil.getInstance().NULL_OBJECT;
                        }
                    }
                }
            };
        })();
        this.layerPartialCellPositionsUtil = LayerPartialCellPositionsUtil.getInstance();
        this.simpleSteeringVisitor = new this.SimpleSteeringVisitor();
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    collideNone(ownerLayer, collidableInterfaceCompositeInterface) {
        this.chase(ownerLayer, collidableInterfaceCompositeInterface);
        let rtsLayer = collidableInterfaceCompositeInterface;
        ;
        if (rtsLayer.getType() == UnitLayer.getStaticType()) {
            this.collideUnit(ownerLayer, rtsLayer);
        }
    }
    //@Throws(Exception.constructor)
    steer(ownerLayer, collidableInterfaceCompositeInterface) {
        let ownerUnitLayer = ownerLayer;
        ;
        let unitLayer = collidableInterfaceCompositeInterface;
        ;
        let angleInfo2 = unitLayer.getRotationAnimationInterface().getAngleInfoP();
        ;
        let angleInfo = ownerUnitLayer.getRotationAnimationInterface().getAngleInfoP();
        ;
        let angle = angleInfo.getAngle() - angleInfo2.getAngle();
        ;
        if (angle < 90 || angle > 270) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else if (angle >= 90 || angle <= 270) {
            ownerUnitLayer.getGameKeyEventList().add(GameKeyEventFactory.getInstance().getInstanceForKey(ownerUnitLayer, Canvas.RIGHT));
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        throw new Exception("Error");
    }
    //@Throws(Exception.constructor)
    chase(ownerLayer, collidableInterfaceCompositeInterface) {
        let rtsLayer = collidableInterfaceCompositeInterface;
        ;
        if (rtsLayer.getType() == UnitLayer.getStaticType()) {
            if (!this.simpleSteeringVisitor.getList().contains(collidableInterfaceCompositeInterface)) {
                this.simpleSteeringVisitor.getList().add(collidableInterfaceCompositeInterface);
            }
            let ownerUnitLayer = ownerLayer;
            ;
            let list = ownerUnitLayer.getUnitWaypointBehavior().getSteeringVisitorList();
            ;
            if (!list.contains(this.simpleSteeringVisitor)) {
                list.add(this.simpleSteeringVisitor);
            }
        }
    }
    //@Throws(Exception.constructor)
    collideUnit(ownerLayer, unitLayer) {
        let ownerUnitLayer = ownerLayer;
        ;
        let partialPositionList = UnitLayer.getPartialpositionlist();
        ;
        let geographicMapCompositeInterface = ownerUnitLayer.allBinaryGameLayerManagerP;
        ;
        let geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        let basicGeographicMap = geographicMapInterface;
        ;
        let dropCellPositionHistory = DropCellPositionHistory.getInstance();
        ;
        let tiledLayerUtil = TiledLayerUtil.getInstance();
        ;
        let tiledLayer = basicGeographicMap.getAllBinaryTiledLayer();
        ;
        if (ownerLayer.getXP() < unitLayer.getXP() && ownerLayer.getX2() > unitLayer.getXP()) {
            let diff = ownerLayer.getWidth() + 1;
            ;
            this.layerPartialCellPositionsUtil.getAllDXY(basicGeographicMap, ownerLayer, -diff, 0, partialPositionList);
            if (!dropCellPositionHistory.anyCellPositionWithDrop(partialPositionList)) {
                let x = unitLayer.getXP() - diff;
                ;
                let y = ownerLayer.getYP();
                ;
                x = tiledLayerUtil.keepOnMapX(tiledLayer, x, ownerLayer.getWidth());
                y = tiledLayerUtil.keepOnMapY(tiledLayer, y, ownerLayer.getHeight());
                ownerLayer.setPosition(x, y, ownerLayer.getZP());
            }
            this.layerPartialCellPositionsUtil.getAllDXY(basicGeographicMap, unitLayer, diff, 0, partialPositionList);
            if (!dropCellPositionHistory.anyCellPositionWithDrop(partialPositionList)) {
                let x = unitLayer.getXP() + diff;
                ;
                let y = unitLayer.getYP();
                ;
                x = tiledLayerUtil.keepOnMapX(tiledLayer, x, unitLayer.getWidth());
                y = tiledLayerUtil.keepOnMapY(tiledLayer, y, unitLayer.getHeight());
                unitLayer.setPosition(x, y, unitLayer.getZP());
            }
        }
        if (ownerLayer.getYP() < unitLayer.getYP() && ownerLayer.getY2() > unitLayer.getYP()) {
            let diff = ownerLayer.getHeight() + 1;
            ;
            this.layerPartialCellPositionsUtil.getAllDXY(basicGeographicMap, ownerLayer, 0, -diff, partialPositionList);
            if (!dropCellPositionHistory.anyCellPositionWithDrop(partialPositionList)) {
                let x = ownerLayer.getXP();
                ;
                let y = unitLayer.getYP() - diff;
                ;
                x = tiledLayerUtil.keepOnMapX(tiledLayer, x, ownerLayer.getWidth());
                y = tiledLayerUtil.keepOnMapY(tiledLayer, y, ownerLayer.getHeight());
                ownerLayer.setPosition(x, y, ownerLayer.getZP());
            }
            this.layerPartialCellPositionsUtil.getAllDXY(basicGeographicMap, unitLayer, 0, diff, partialPositionList);
            if (!dropCellPositionHistory.anyCellPositionWithDrop(partialPositionList)) {
                let x = unitLayer.getXP();
                ;
                let y = unitLayer.getYP() + diff;
                ;
                x = tiledLayerUtil.keepOnMapX(tiledLayer, x, unitLayer.getWidth());
                y = tiledLayerUtil.keepOnMapY(tiledLayer, y, unitLayer.getHeight());
                unitLayer.setPosition(x, y, unitLayer.getZP());
            }
        }
    }
}
