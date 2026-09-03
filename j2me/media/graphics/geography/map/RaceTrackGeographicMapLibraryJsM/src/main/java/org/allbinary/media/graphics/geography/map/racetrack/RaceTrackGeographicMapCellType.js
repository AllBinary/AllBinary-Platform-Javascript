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
//not plain js import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { GeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
//not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RaceTrackGeographicMapCellType extends GeographicMapCellType {
    constructor(name, type, travelCost, reset) {
        super(type, reset);
        //For kotlin this is before the body of the constructor.
        this.name = name;
        this.travelCost = travelCost;
    }
    getTravelCost() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.travelCost;
    }
}
