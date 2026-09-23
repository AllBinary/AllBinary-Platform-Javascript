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
import { SmallIntegerSingletonFactory } from '../../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
import { GeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
//not GWT import const GeographicMapCellType
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicPlatormGeographicMapCellType extends Object {
    static createType(type) {
        var types = new BasicArrayListS(1);
        ;
        types.add(SmallIntegerSingletonFactory.getInstance().getAt(type));
        var basicPlatormGeographicMapCellType = new BasicPlatormGeographicMapCellType(types);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return basicPlatormGeographicMapCellType;
    }
    constructor(types) {
        super();
        var size = types.size();
        ;
        var typeArray = new Array(size);
        ;
        var typeAsInteger;
        ;
        var type = 0;
        ;
        for (var index = 0; index < size; index++) {
            typeAsInteger = types.get(index);
            type = typeAsInteger.intValue();
            new GeographicMapCellType(type, 0);
            typeArray[index] = type;
        }
        this.types = typeArray;
    }
    isType(type) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hasType(type.getType());
        ;
    }
    hasType(type) {
        var size = types.length;
        ;
        for (var index = 0; index < size; index++) {
            if (this.types[index] == type) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
