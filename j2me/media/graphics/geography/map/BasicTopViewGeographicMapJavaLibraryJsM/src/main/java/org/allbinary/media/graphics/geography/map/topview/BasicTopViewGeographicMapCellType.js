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
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const GeographicMapCellType
import { GeographicMapCellTypeFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
//not GWT import const GeographicMapCellTypeFactory
import { RaceTrackGeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js';
//not GWT import const RaceTrackGeographicMapCellType
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicTopViewGeographicMapCellType extends Object {
    static createType(name, type, cost) {
        var types = new BasicArrayListS(1);
        ;
        types.add(type);
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicTopViewGeographicMapCellType(name, types, cost);
    }
    constructor(name, types, cost) {
        super();
        this.logUtil = LogUtil.getInstance();
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
            if (GeographicMapCellTypeFactory.getInstance().getGeographicMapCellTypeArray()[type] ==
                null) {
                new RaceTrackGeographicMapCellType(name, type, cost, 0);
            }
            else {
            }
            typeArray[index] = type;
        }
        this.name = name;
        this.cost = cost;
        this.types = typeArray;
    }
    isType(type) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hasType(type.getType());
        ;
    }
    hasType(type) {
        var size = this.types.length;
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
    getTypes() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.types;
    }
    toString() {
        var stringMaker = new StringMaker();
        ;
        var size = this.types.length;
        ;
        for (var index = 0; index < size; index++) {
            stringMaker.appendint(this.types[index]).append(CommonSeps.getInstance().COMMA);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringMaker.toString();
        ;
    }
}
