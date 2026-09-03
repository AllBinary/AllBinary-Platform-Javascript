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
import { Object } from '../../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GeographicMapCellType } from './GeographicMapCellType.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
export class MultiGeographicMapBehavior extends Object {
    //@Throws(Exception.constructor)
    getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition) {
        var size = geographicMapInterfaceArray.length;
        ;
        var cellType = GeographicMapCellType.NULL_GEOGRAPHIC_MAP_CELL_TYPE;
        ;
        for (var index = size; --index >= 0;) {
            cellType = geographicMapInterfaceArray[index].getCellTypeAt(geographicMapCellPosition);
            geographicMapCellTypeArray[index] = cellType;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return geographicMapCellTypeArray;
    }
}
