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
import { Object } from '../../../../../../../java/lang/Object.js';
import { CellPositionFactory } from '../../../../../../../org/allbinary/graphics/CellPositionFactory.js';
//not GWT import const GeographicMapCellPositionTracking = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionTracking;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GeographicMapCellPositionEvent } from './GeographicMapCellPositionEvent.js';
//not GWT import - same folder const GeographicMapCellPositionEvent = globalThis.org.allbinary.media.graphics.geography.map.event.GeographicMapCellPositionEvent;
import { GeographicMapCellPositionEventHandler } from './GeographicMapCellPositionEventHandler.js';
//not GWT import - same folder const GeographicMapCellPositionEventHandler = globalThis.org.allbinary.media.graphics.geography.map.event.GeographicMapCellPositionEventHandler;
export class GeographicMapCellPositionEventUtil extends Object {
    constructor(anyType = {}) {
        super();
        this.geographicMapCellPositionEventHandler = GeographicMapCellPositionEventHandler.getInstance();
        this.geographicMapCellPositionEvent = new GeographicMapCellPositionEvent(anyType, CellPositionFactory.getInstance().NONE);
    }
    //@Throws(Exception.constructor)
    update(geographicMapCellPositionTracking) {
        this.geographicMapCellPositionEvent.setGeographicMapCellPosition(geographicMapCellPositionTracking.getCurrentGeographicMapCellPosition());
        this.geographicMapCellPositionEventHandler.fireEvent(this.geographicMapCellPositionEvent);
    }
    //@Throws(Exception.constructor)
    remove(geographicMapCellPositionTracking) {
        this.geographicMapCellPositionEvent.setGeographicMapCellPosition(geographicMapCellPositionTracking.getCurrentGeographicMapCellPosition());
        this.geographicMapCellPositionEventHandler.fireRemoveEvent(this.geographicMapCellPositionEvent);
    }
}
