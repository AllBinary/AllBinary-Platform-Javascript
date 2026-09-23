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
import { GeographicMapCellPosition } from '../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPosition.js';
//not GWT import - same folder const GeologicalResource
export class GeologicalGeographicMapCellPosition extends GeographicMapCellPosition {
    constructor(column, row, columns, rows, width, height, geologicalResource) {
        super(column, row, columns, rows, width, height);
        //For kotlin this is before the body of the constructor.
        this.geologicalResource = geologicalResource;
    }
    getGeologicalResource() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geologicalResource;
    }
}
