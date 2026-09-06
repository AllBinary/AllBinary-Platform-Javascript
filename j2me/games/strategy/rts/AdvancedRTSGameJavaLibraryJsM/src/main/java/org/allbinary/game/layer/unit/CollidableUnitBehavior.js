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
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
import { SteeringVisitor } from '../../../../../org/allbinary/game/layer/SteeringVisitor.js';
//not GWT import const CollidableCompositeLayer = globalThis.org.allbinary.game.layer.CollidableCompositeLayer;
import { CollidableRTSBehavior } from '../../../../../org/allbinary/game/layer/CollidableRTSBehavior.js';
//not GWT import const CollidableRTSBehavior = globalThis.org.allbinary.game.layer.CollidableRTSBehavior;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
import { GameKeyEventFactory } from '../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;
import { TiledLayerUtil } from '../../../../../org/allbinary/game/layer/TiledLayerUtil.js';
//not GWT import const TiledLayerUtil = globalThis.org.allbinary.game.layer.TiledLayerUtil;
import { LayerPartialCellPositionsUtil } from '../../../../../org/allbinary/game/layer/geographic/map/LayerPartialCellPositionsUtil.js';
//not GWT import const LayerPartialCellPositionsUtil = globalThis.org.allbinary.game.layer.geographic.map.LayerPartialCellPositionsUtil;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;
import { DropCellPositionHistory } from '../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
//not GWT import const DropCellPositionHistory = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionHistory;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { UnitLayer } from './UnitLayer.js';
//not GWT import - same folder const UnitLayer = globalThis.org.allbinary.game.layer.unit.UnitLayer;
//import { SimpleSteeringVisitor } from './SimpleSteeringVisitor.js';
//not GWT import - same folder const SimpleSteeringVisitor = globalThis.org.allbinary.game.layer.unit.SimpleSteeringVisitor;
export class CollidableUnitBehavior extends CollidableRTSBehavior {
    constructor(collidable) {
        super(collidable);
        this.layerPartialCellPositionsUtil = LayerPartialCellPositionsUtil.getInstance();
        //inner= member=true isStatic=
        this.SimpleSteeringVisitor = class extends SteeringVisitor {
            visit(anyType = {}) {
                var logUtil = LogUtil.getInstance();
                ;
                try {
                    var ownerLayer = anyType;
                    ;
                    if (this.getList().size() > 0) {
                        var allbinaryLayer = this.getList().get(0);
                        ;
                        var clear = CollidableUnitBehavior.prototype.steer(ownerLayer, allbinaryLayer);
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
                    //: 
                }
                catch (e) {
                    var commonStrings = CommonStrings.getInstance();
                    ;
                    logUtil.put(commonStrings.EXCEPTION, this, "visit", e);
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return NullUtil.getInstance().NULL_OBJECT;
                }
            }
        };
        this.simpleSteeringVisitor = new this.SimpleSteeringVisitor();
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    collideNone(ownerLayer, collidableInterfaceCompositeInterface) {
        this.chase(ownerLayer, collidableInterfaceCompositeInterface);
        var rtsLayer = collidableInterfaceCompositeInterface;
        ;
        if (rtsLayer.getType() == UnitLayer.getStaticType()) {
            this.collideUnit(ownerLayer, rtsLayer);
        }
    }
    //@Throws(Exception.constructor)
    steer(ownerLayer, collidableInterfaceCompositeInterface) {
        var ownerUnitLayer = ownerLayer;
        ;
        var unitLayer = collidableInterfaceCompositeInterface;
        ;
        var angleInfo2 = unitLayer.getRotationAnimationInterface().getAngleInfoP();
        ;
        var angleInfo = ownerUnitLayer.getRotationAnimationInterface().getAngleInfoP();
        ;
        var angle = angleInfo.getAngle() - angleInfo2.getAngle();
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
        var rtsLayer = collidableInterfaceCompositeInterface;
        ;
        if (rtsLayer.getType() == UnitLayer.getStaticType()) {
            if (!this.simpleSteeringVisitor.getList().contains(collidableInterfaceCompositeInterface)) {
                this.simpleSteeringVisitor.getList().add(collidableInterfaceCompositeInterface);
            }
            var ownerUnitLayer = ownerLayer;
            ;
            var list = ownerUnitLayer.getUnitWaypointBehavior().getSteeringVisitorList();
            ;
            if (!list.contains(this.simpleSteeringVisitor)) {
                list.add(this.simpleSteeringVisitor);
            }
        }
    }
    //@Throws(Exception.constructor)
    collideUnit(ownerLayer, unitLayer) {
        var ownerUnitLayer = ownerLayer;
        ;
        var partialPositionList = UnitLayer.getPartialpositionlist();
        ;
        var geographicMapCompositeInterface = ownerUnitLayer.allBinaryGameLayerManagerP;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        var basicGeographicMap = geographicMapInterface;
        ;
        var dropCellPositionHistory = DropCellPositionHistory.getInstance();
        ;
        var tiledLayerUtil = TiledLayerUtil.getInstance();
        ;
        var tiledLayer = basicGeographicMap.getAllBinaryTiledLayer();
        ;
        if (ownerLayer.getXP() < unitLayer.getXP() && ownerLayer.getX2() > unitLayer.getXP()) {
            var diff = ownerLayer.getWidth() + 1;
            ;
            this.layerPartialCellPositionsUtil.getAllDXY(basicGeographicMap, ownerLayer, -diff, 0, partialPositionList);
            if (!dropCellPositionHistory.anyCellPositionWithDrop(partialPositionList)) {
                var x = unitLayer.getXP() - diff;
                ;
                var y = ownerLayer.getYP();
                ;
                x = tiledLayerUtil.keepOnMapX(tiledLayer, x, ownerLayer.getWidth());
                y = tiledLayerUtil.keepOnMapY(tiledLayer, y, ownerLayer.getHeight());
                ownerLayer.setPosition(x, y, ownerLayer.getZP());
            }
            this.layerPartialCellPositionsUtil.getAllDXY(basicGeographicMap, unitLayer, diff, 0, partialPositionList);
            if (!dropCellPositionHistory.anyCellPositionWithDrop(partialPositionList)) {
                var x = unitLayer.getXP() + diff;
                ;
                var y = unitLayer.getYP();
                ;
                x = tiledLayerUtil.keepOnMapX(tiledLayer, x, unitLayer.getWidth());
                y = tiledLayerUtil.keepOnMapY(tiledLayer, y, unitLayer.getHeight());
                unitLayer.setPosition(x, y, unitLayer.getZP());
            }
        }
        if (ownerLayer.getYP() < unitLayer.getYP() && ownerLayer.getY2() > unitLayer.getYP()) {
            var diff = ownerLayer.getHeight() + 1;
            ;
            this.layerPartialCellPositionsUtil.getAllDXY(basicGeographicMap, ownerLayer, 0, -diff, partialPositionList);
            if (!dropCellPositionHistory.anyCellPositionWithDrop(partialPositionList)) {
                var x = ownerLayer.getXP();
                ;
                var y = unitLayer.getYP() - diff;
                ;
                x = tiledLayerUtil.keepOnMapX(tiledLayer, x, ownerLayer.getWidth());
                y = tiledLayerUtil.keepOnMapY(tiledLayer, y, ownerLayer.getHeight());
                ownerLayer.setPosition(x, y, ownerLayer.getZP());
            }
            this.layerPartialCellPositionsUtil.getAllDXY(basicGeographicMap, unitLayer, 0, diff, partialPositionList);
            if (!dropCellPositionHistory.anyCellPositionWithDrop(partialPositionList)) {
                var x = unitLayer.getXP();
                ;
                var y = unitLayer.getYP() + diff;
                ;
                x = tiledLayerUtil.keepOnMapX(tiledLayer, x, unitLayer.getWidth());
                y = tiledLayerUtil.keepOnMapY(tiledLayer, y, unitLayer.getHeight());
                unitLayer.setPosition(x, y, unitLayer.getZP());
            }
        }
    }
}
