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
import { RuntimeException } from '../../../../../../java/lang/RuntimeException.js';
import { Integer } from '../../../../../../java/lang/Integer.js';
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { SmallIntegerSingletonFactory } from '../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GeographicMapCellTypeFactory } from './GeographicMapCellTypeFactory.js';
//not GWT import const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;
export class GeographicMapCellType extends Object {
    constructor(type, reset) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.type = type;
        if (type != Integer.MIN_VALUE) {
            var geographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance();
            ;
            var geographicMapCellTypeArray = geographicMapCellTypeFactory.getGeographicMapCellTypeArray();
            ;
            if (geographicMapCellTypeArray[type] ==
                null
                || reset == 1) {
                geographicMapCellTypeArray[type] = this;
            }
            else {
                if (reset != -1) {
                    throw new RuntimeException();
                }
            }
        }
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.type;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SmallIntegerSingletonFactory.getInstance().getAt(this.type).toString();
        ;
    }
}
GeographicMapCellType.NULL_GEOGRAPHIC_MAP_CELL_TYPE_ARRAY = [];
GeographicMapCellType.NULL_GEOGRAPHIC_MAP_CELL_TYPE = new GeographicMapCellType(Integer.MIN_VALUE, 0);
