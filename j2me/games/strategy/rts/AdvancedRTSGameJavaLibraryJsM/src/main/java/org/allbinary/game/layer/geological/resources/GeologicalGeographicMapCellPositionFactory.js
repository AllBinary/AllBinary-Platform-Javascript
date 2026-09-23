/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2002 AllBinary
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
//not GWT import const AllBinaryTiledLayer
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
//not GWT import const GeographicMapCellPositionFactoryInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GeologicalGeographicMapCellPosition } from './GeologicalGeographicMapCellPosition.js';
//not GWT import - same folder const GeologicalGeographicMapCellPosition
import { GeologicalResource } from './GeologicalResource.js';
//not GWT import - same folder const GeologicalResource
export class GeologicalGeographicMapCellPositionFactory extends Object {
    constructor(resourcePerMapCellType) {
        super();
        this.resourcePerMapCellType = resourcePerMapCellType;
    }
    //@Throws(Exception.constructor)
    getInstance(geographicMapInterface, i_column, i_row, columns, rows, width, height) {
        var tiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        ;
        var resources = this.resourcePerMapCellType[tiledLayer.getCell(i_column, i_row)] + MyRandomFactory.getInstance().getAbsoluteNextInt(1000);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new GeologicalGeographicMapCellPosition(i_column, i_row, columns, rows, width, height, new GeologicalResource(resources));
    }
}
