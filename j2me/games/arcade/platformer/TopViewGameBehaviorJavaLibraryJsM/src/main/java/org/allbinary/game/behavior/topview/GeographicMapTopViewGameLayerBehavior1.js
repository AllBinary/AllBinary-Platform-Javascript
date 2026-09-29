/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { MultiGeographicMapBehavior } from '../../../../../org/allbinary/media/graphics/geography/map/MultiGeographicMapBehavior.js';
//not GWT import const AllBinaryTiledLayer
import { GravityUtil } from '../../../../../org/allbinary/game/physics/acceleration/GravityUtil.js';
//not GWT import const AllBinaryLayer
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const GeographicMapCellType
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GeographicMapTopViewLayerBehavior } from './GeographicMapTopViewLayerBehavior.js';
//not GWT import - same folder const TopViewCharacterInterface
export class GeographicMapTopViewGameLayerBehavior1 extends GeographicMapTopViewLayerBehavior {
    constructor(maxGravityActionIndex, autoStepBlocks, offsetY) {
        super(maxGravityActionIndex);
        this.logUtil = LogUtil.getInstance();
        this.gravityUtil = GravityUtil.getInstance();
        this.geographicMapBehavior = new MultiGeographicMapBehavior();
        //For kotlin this is before the body of the constructor.
        this.autoStepBlocks = autoStepBlocks;
        this.offsetY = offsetY;
    }
    //@Throws(Exception.constructor)
    gravity(velocityProperties, geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition) {
        if (geographicMapCellPosition !=
            null) {
            this.geographicMapBehavior.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition);
            var hasSolidBlock = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray);
            ;
            if (!hasSolidBlock) {
                this.gravityUtil.process(velocityProperties, this.gravityUtil.GAME_GRAVITY_VELOCITY);
                velocityProperties.limitXYToForwardAndReverseMaxVelocity();
                this.gravity();
            }
            else {
            }
        }
    }
    //@Throws(Exception.constructor)
    getPosition(geographicMapInterfaceArray, layer, x, y) {
        var xCellPosition = layer.getXP() + -x + layer.getWidth();
        ;
        var yCellPosition = layer.getYP() + -y + layer.getHeight();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapInterfaceArray[0].getCellPositionAtXYNoThrow(xCellPosition, yCellPosition);
        ;
    }
    //@Throws(Exception.constructor)
    getLeftPosition(geographicMapInterfaceArray, layer) {
        var xCellPosition = layer.getXP();
        ;
        var yCellPosition = layer.getYP() + layer.getHeight();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapInterfaceArray[0].getCellPositionAtXYNoThrow(xCellPosition, yCellPosition);
        ;
    }
    //@Throws(Exception.constructor)
    getRightPosition(geographicMapInterfaceArray, layer) {
        var xCellPosition = layer.getXP() + layer.getWidth();
        ;
        var yCellPosition = layer.getYP() + layer.getHeight();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapInterfaceArray[0].getCellPositionAtXYNoThrow(xCellPosition, yCellPosition);
        ;
    }
    //@Throws(Exception.constructor)
    getGeographicMapCellPositionIfNotSolidBlockOrOffMapLocation(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer, x, y) {
        var geographicMapCellPosition = this.getPosition(geographicMapInterfaceArray, layer, x, y);
        ;
        if (this.previousGeographicMapCellPosition != geographicMapCellPosition && geographicMapCellPosition !=
            null) {
            var possibleStepGeographicMapCellPosition = geographicMapCellPosition;
            ;
            var tiledLayer = geographicMapInterfaceArray[0].getAllBinaryTiledLayer();
            ;
            if (possibleStepGeographicMapCellPosition.getColumn() > 0 && possibleStepGeographicMapCellPosition.getRow() > 0 && possibleStepGeographicMapCellPosition.getColumn() < tiledLayer.getColumns() && possibleStepGeographicMapCellPosition.getRow() < tiledLayer.getRows()) {
                this.geographicMapBehavior.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, possibleStepGeographicMapCellPosition);
                var hasSolidBlock = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray);
                ;
                if (hasSolidBlock) {
                    velocityProperties.getVelocityXBasicDecimalP().setint(0);
                    this.previousGeographicMapCellPosition =
                        null;
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return null;
                }
                else {
                    this.previousGeographicMapCellPosition = possibleStepGeographicMapCellPosition;
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return possibleStepGeographicMapCellPosition;
                }
            }
        }
        this.previousGeographicMapCellPosition =
            null;
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    //@Throws(Exception.constructor)
    moveAndLand(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition, velocityProperties, layer, x, y) {
        if (geographicMapCellPosition !=
            null) {
            layer = layerlayer;
            layer.
                terrainMove(geographicMapInterfaceArray, geographicMapCellTypeArray, x, y);
        }
        else {
        }
    }
    //@Throws(Exception.constructor)
    move(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer, x, y) {
        var geographicMapCellPosition = this.getGeographicMapCellPositionIfNotSolidBlockOrOffMapLocation(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer, x, y);
        ;
        this.moveAndLand(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition, velocityProperties, layer, x, y);
        if (geographicMapCellPosition ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    //@Throws(Exception.constructor)
    left(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer) {
        var geographicMapCellPosition = this.getLeftPosition(geographicMapInterfaceArray, layer);
        ;
        if (geographicMapCellPosition !=
            null) {
            var possibleStepGeographicMapCellPosition = geographicMapInterfaceArray[0].getGeographicMapCellPositionFactory().getAt(geographicMapCellPosition.getColumn(), geographicMapCellPosition.getRow() - 1);
            ;
            this.geographicMapBehavior.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, possibleStepGeographicMapCellPosition);
            var hasSolidBlock = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray);
            ;
            if (hasSolidBlock) {
                if (this.autoStepBlocks) {
                    layer = layerlayer;
                    layer.
                        leftp();
                }
                else {
                    velocityProperties.getVelocityXBasicDecimalP().setint(0);
                }
            }
            else {
                layer = layerlayer;
                layer.
                    leftp();
            }
        }
    }
    //@Throws(Exception.constructor)
    right(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer) {
        var geographicMapCellPosition = this.getRightPosition(geographicMapInterfaceArray, layer);
        ;
        if (geographicMapCellPosition !=
            null) {
            var possibleStepGeographicMapCellPosition = geographicMapInterfaceArray[0].getGeographicMapCellPositionFactory().getAt(geographicMapCellPosition.getColumn(), geographicMapCellPosition.getRow() - 1);
            ;
            this.geographicMapBehavior.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, possibleStepGeographicMapCellPosition);
            var hasSolidBlock = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray);
            ;
            if (hasSolidBlock) {
                if (this.autoStepBlocks) {
                    layer = layerlayer;
                    layer.
                        rightp();
                }
                else {
                    velocityProperties.getVelocityXBasicDecimalP().setint(0);
                }
            }
            else {
                layer = layerlayer;
                layer.
                    rightp();
            }
        }
    }
}
