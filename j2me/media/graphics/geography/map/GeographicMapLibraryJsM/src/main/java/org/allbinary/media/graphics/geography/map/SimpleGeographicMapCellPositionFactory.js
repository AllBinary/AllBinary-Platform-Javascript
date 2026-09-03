/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
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
//not GWT import const GeographicMapCellPositionFactoryInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionFactoryInterface;
import { GeographicMapCellPosition } from './GeographicMapCellPosition.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;
export class SimpleGeographicMapCellPositionFactory extends Object {
    getInstance(geographicMapInterface, i_column, i_row, columns, rows, width, height) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new GeographicMapCellPosition(i_column, i_row, columns, rows, width, height);
    }
}
SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION = new GeographicMapCellPosition(-1, -1, -1, -1, -1, -1);
