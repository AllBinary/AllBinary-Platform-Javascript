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
/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const BasicTopViewGeographicMapCellTypeFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TopViewCharacterBehavior extends Object {
    //@Throws(Exception.constructor)
    terrainEvent(layer, direction, x, y, geographicMapInterfaceArray, geographicMapCellPosition) {
    }
    terrainMove(layer, geographicMapInterfaceArray, x, y) {
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
}
