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
import { Object } from '../../../../../../java/lang/Object.js';
//not GWT import - same folder const GeologicalGeographicMapCellPosition
export class GeologicalGeographicMapCellPositionFactoryInitVisitor extends Object {
    //@Throws(Exception.constructor)
    visit(tiledLayer, cellPosition) {
        var geologicalGeographicMapCellPosition = cellPosition;
        ;
        geologicalGeographicMapCellPosition.getGeologicalResource().init();
    }
}
