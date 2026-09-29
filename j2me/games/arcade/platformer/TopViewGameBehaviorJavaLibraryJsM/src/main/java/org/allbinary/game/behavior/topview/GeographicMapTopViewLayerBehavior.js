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
//not GWT import const BasicTopViewGeographicMapCellTypeFactory
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TopViewGameLayerBehavior } from './TopViewGameLayerBehavior.js';
//not GWT import - same folder const TopViewGameLayerBehavior
export class GeographicMapTopViewLayerBehavior extends TopViewGameLayerBehavior {
    constructor(maxGravityActionIndex) {
        super(maxGravityActionIndex);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    getGeographicMapCellPositionIfNotSolidBlockOrOffMapLocation(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer, x, y) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    //@Throws(Exception.constructor)
    getGeographicMapCellPositionIfNotSolidBlockOrOffMap(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition, velocityProperties, layer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    //@Throws(Exception.constructor)
    getGeographicMapCellPositionFromListIfNotSolidBlockOrOffMap(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPositionList, velocityProperties, layer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    //@Throws(Exception.constructor)
    gravity(velocityProperties, geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition) {
    }
    //@Throws(Exception.constructor)
    left(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer) {
    }
    //@Throws(Exception.constructor)
    move(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer, x, y) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    moveAndLand(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition, velocityProperties, layer, x, y) {
    }
    //@Throws(Exception.constructor)
    right(geographicMapInterfaceArray, geographicMapCellTypeArray, velocityProperties, layer) {
    }
    hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray) {
        var size = geographicMapInterfaceArray.length;
        ;
        var basicTopViewGeographicMapCellTypeFactory;
        ;
        for (var index = 0; index < size; index++) {
            basicTopViewGeographicMapCellTypeFactory = geographicMapInterfaceArray[index].getGeographicMapCellTypeFactory();
            if (basicTopViewGeographicMapCellTypeFactory.BLOCK_CELL_TYPE.isType(geographicMapCellTypeArray[index])) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isOffMap(geographicMapInterfaceArray, geographicMapCellTypeArray) {
        var size = geographicMapInterfaceArray.length;
        ;
        var basicTopViewGeographicMapCellTypeFactory;
        ;
        for (var index = 0; index < size; index++) {
            basicTopViewGeographicMapCellTypeFactory = geographicMapInterfaceArray[index].getGeographicMapCellTypeFactory();
            if (basicTopViewGeographicMapCellTypeFactory.OFF_MAP_CELL_TYPE.isType(geographicMapCellTypeArray[index])) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
