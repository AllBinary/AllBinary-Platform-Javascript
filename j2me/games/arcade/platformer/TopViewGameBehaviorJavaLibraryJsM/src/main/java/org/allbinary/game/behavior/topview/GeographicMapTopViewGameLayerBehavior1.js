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
import { SimpleGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GeographicMapTopViewLayerBehavior } from './GeographicMapTopViewLayerBehavior.js';
//sameFolderImports - not GWT import - same folder const TopViewCharacterInterface
export class GeographicMapTopViewGameLayerBehavior1 extends GeographicMapTopViewLayerBehavior {
    constructor(maxGravityActionIndex, autoStepBlocks, offsetY) {
        super(maxGravityActionIndex);
        this.logUtil = LogUtil.getInstance();
        this.gravityUtil = GravityUtil.getInstance();
        this.geographicMapBehavior = new MultiGeographicMapBehavior();
        this.previousGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        //For kotlin this is before the body of the constructor.
        this.autoStepBlocks = autoStepBlocks;
        this.offsetY = offsetY;
    }
    //@Throws(Exception.constructor)
    gravity(velocityProperties, geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition) {
        if (geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION) {
            this.geographicMapBehavior.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition);
            let hasSolidBlock = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray);
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
        let xCellPosition = layer.getXP() + -x + layer.getWidth();
        ;
        let yCellPosition = layer.getYP() + -y + layer.getHeight();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapInterfaceArray[0].getCellPositionAtXYNoThrow(xCellPosition, yCellPosition);
        ;
    }
    //@Throws(Exception.constructor)
    getLeftPosition(geographicMapInterfaceArray, layer) {
        let xCellPosition = layer.getXP();
        ;
        let yCellPosition = layer.getYP() + layer.getHeight();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapInterfaceArray[0].getCellPositionAtXYNoThrow(xCellPosition, yCellPosition);
        ;
    }
    //@Throws(Exception.constructor)
    getRightPosition(geographicMapInterfaceArray, layer) {
        let xCellPosition = layer.getXP() + layer.getWidth();
        ;
        let yCellPosition = layer.getYP() + layer.getHeight();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapInterfaceArray[0].getCellPositionAtXYNoThrow(xCellPosition, yCellPosition);
        ;
    }
    //@Throws(Exception.constructor)
    getGeographicMapCellPositionIfNotSolidBlockOrOffMapLocation(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer, x, y) {
        let geographicMapCellPosition = this.getPosition(geographicMapInterfaceArray, layer, x, y);
        ;
        if (this.previousGeographicMapCellPosition != geographicMapCellPosition && geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION) {
            let possibleStepGeographicMapCellPosition = geographicMapCellPosition;
            ;
            let tiledLayer = geographicMapInterfaceArray[0].getAllBinaryTiledLayer();
            ;
            if (possibleStepGeographicMapCellPosition.getColumn() > 0 && possibleStepGeographicMapCellPosition.getRow() > 0 && possibleStepGeographicMapCellPosition.getColumn() < tiledLayer.getColumns() && possibleStepGeographicMapCellPosition.getRow() < tiledLayer.getRows()) {
                this.geographicMapBehavior.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, possibleStepGeographicMapCellPosition);
                let hasSolidBlock = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray);
                ;
                if (hasSolidBlock) {
                    velocityProperties.getVelocityXBasicDecimalP().setint(0);
                    this.previousGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
                }
                else {
                    this.previousGeographicMapCellPosition = possibleStepGeographicMapCellPosition;
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return possibleStepGeographicMapCellPosition;
                }
            }
        }
        this.previousGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        //if statement needs to be on the same line and ternary does not work the same way.
        return SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    }
    //@Throws(Exception.constructor)
    moveAndLand(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition, velocityProperties, layer, x, y) {
        if (geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION) {
            let topViewCharacterInterface = layer;
            ;
            topViewCharacterInterface.terrainMove(geographicMapInterfaceArray, geographicMapCellTypeArray, x, y);
        }
        else {
        }
    }
    //@Throws(Exception.constructor)
    move(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer, x, y) {
        let geographicMapCellPosition = this.getGeographicMapCellPositionIfNotSolidBlockOrOffMapLocation(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer, x, y);
        ;
        this.moveAndLand(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition, velocityProperties, layer, x, y);
        if (geographicMapCellPosition == SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION) {
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
        let geographicMapCellPosition = this.getLeftPosition(geographicMapInterfaceArray, layer);
        ;
        if (geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION) {
            let possibleStepGeographicMapCellPosition = geographicMapInterfaceArray[0].getGeographicMapCellPositionFactory().getAt(geographicMapCellPosition.getColumn(), geographicMapCellPosition.getRow() - 1);
            ;
            this.geographicMapBehavior.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, possibleStepGeographicMapCellPosition);
            let hasSolidBlock = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray);
            ;
            if (hasSolidBlock) {
                if (this.autoStepBlocks) {
                    let topViewCharacterInterface = layer;
                    ;
                    topViewCharacterInterface.leftp();
                }
                else {
                    velocityProperties.getVelocityXBasicDecimalP().setint(0);
                }
            }
            else {
                let topViewCharacterInterface = layer;
                ;
                topViewCharacterInterface.leftp();
            }
        }
    }
    //@Throws(Exception.constructor)
    right(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer) {
        let geographicMapCellPosition = this.getRightPosition(geographicMapInterfaceArray, layer);
        ;
        if (geographicMapCellPosition != SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION) {
            let possibleStepGeographicMapCellPosition = geographicMapInterfaceArray[0].getGeographicMapCellPositionFactory().getAt(geographicMapCellPosition.getColumn(), geographicMapCellPosition.getRow() - 1);
            ;
            this.geographicMapBehavior.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, possibleStepGeographicMapCellPosition);
            let hasSolidBlock = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray);
            ;
            if (hasSolidBlock) {
                if (this.autoStepBlocks) {
                    let topViewCharacterInterface = layer;
                    ;
                    topViewCharacterInterface.rightp();
                }
                else {
                    velocityProperties.getVelocityXBasicDecimalP().setint(0);
                }
            }
            else {
                let topViewCharacterInterface = layer;
                ;
                topViewCharacterInterface.rightp();
            }
        }
    }
}
