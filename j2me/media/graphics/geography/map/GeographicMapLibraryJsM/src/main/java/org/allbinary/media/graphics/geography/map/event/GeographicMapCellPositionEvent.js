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
//not GWT import const CellPosition = globalThis.org.allbinary.graphics.CellPosition;
import { CellPositionFactory } from '../../../../../../../org/allbinary/graphics/CellPositionFactory.js';
//not GWT import const CellPositionFactory = globalThis.org.allbinary.graphics.CellPositionFactory;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { AllBinaryEventObject } from '../../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GeographicMapCellPositionEvent extends AllBinaryEventObject {
    constructor(anyType = {}, geographicMapCellPosition) {
        super(anyType);
        this.geographicMapCellPosition = CellPositionFactory.getInstance().NONE;
        //For kotlin this is before the body of the constructor.
        this.geographicMapCellPosition = geographicMapCellPosition;
    }
    init(anyType = {}) {
        this.setSource(anyType);
    }
    setGeographicMapCellPosition(geographicMapCellPosition) {
        this.geographicMapCellPosition = geographicMapCellPosition;
    }
    getGeographicMapCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellPosition;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("CellPositionEvent: ");
        stringBuffer.append("\nGeographicMapCellPosition: ");
        stringBuffer.append(StringUtil.getInstance().toString(this.getGeographicMapCellPosition()));
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
