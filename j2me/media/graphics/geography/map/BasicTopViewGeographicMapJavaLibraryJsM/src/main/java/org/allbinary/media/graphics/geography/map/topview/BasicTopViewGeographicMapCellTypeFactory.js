/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;
import { GeographicMapCellTypeFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
//not GWT import const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;
import { RaceTrackGeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackGeographicMapCellType.js';
//not GWT import const RaceTrackGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellType;
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { HashtableUtil } from '../../../../../../../org/allbinary/util/HashtableUtil.js';
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicTopViewGeographicMapCellType } from './BasicTopViewGeographicMapCellType.js';
//not GWT import const BasicTopViewGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.topview.BasicTopViewGeographicMapCellType;
import { BasicTopViewGeographicMapStrings } from './BasicTopViewGeographicMapStrings.js';
//not GWT import const BasicTopViewGeographicMapStrings = globalThis.org.allbinary.media.graphics.geography.map.topview.BasicTopViewGeographicMapStrings;
export class BasicTopViewGeographicMapCellTypeFactory extends GeographicMapCellTypeFactory {
    constructor(tileTypeToTileIdsMap, maxTileId) {
        super();
        var commonStrings = CommonStrings.getInstance();
        ;
        this.logUtil.putF(commonStrings.START, this, commonStrings.CONSTRUCTOR);
        this.maxTileId = maxTileId;
        var basicTopViewGeographicMapStrings = BasicTopViewGeographicMapStrings.getInstance();
        ;
        var geographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance();
        ;
        var geographicMapCellTypeArray = geographicMapCellTypeFactory.getGeographicMapCellTypeArray();
        ;
        var type = 0;
        ;
        if (geographicMapCellTypeArray[type] ==
            null) {
            new RaceTrackGeographicMapCellType(CommonStrings.getInstance().UNKNOWN, type, 999, 0);
        }
        else {
        }
        var BLOCK_CELL_TYPE = BasicTopViewGeographicMapCellType.createType(basicTopViewGeographicMapStrings.DEFAULT, 1, 1);
        ;
        var OFF_MAP_CELL_TYPE = BLOCK_CELL_TYPE;
        ;
        var FLOOR_CELL_TYPE = BLOCK_CELL_TYPE;
        ;
        var DOOR_CELL_TYPE = BLOCK_CELL_TYPE;
        ;
        var STAIRS_UP_CELL_TYPE = BLOCK_CELL_TYPE;
        ;
        var STAIRS_DOWN_CELL_TYPE = BLOCK_CELL_TYPE;
        ;
        var OTHER_CELL_TYPE = BLOCK_CELL_TYPE;
        ;
        var keyArray = HashtableUtil.getInstance().getKeysAsArray(tileTypeToTileIdsMap);
        ;
        var size = keyArray.length;
        ;
        var idsWithTypeList;
        ;
        var key;
        ;
        var basicPlatormGeographicMapCellType;
        ;
        for (var index = 0; index < size; index++) {
            key = keyArray[index];
            idsWithTypeList = tileTypeToTileIdsMap.get(key);
            if (key === basicTopViewGeographicMapStrings.WALL) {
                basicPlatormGeographicMapCellType = new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings.WALL, idsWithTypeList, 1000);
                BLOCK_CELL_TYPE = basicPlatormGeographicMapCellType;
            }
            else if (key === basicTopViewGeographicMapStrings.OFF_MAP) {
                basicPlatormGeographicMapCellType = new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings.OFF_MAP, idsWithTypeList, 1001);
                OFF_MAP_CELL_TYPE = basicPlatormGeographicMapCellType;
            }
            else if (key === basicTopViewGeographicMapStrings.FLOOR) {
                basicPlatormGeographicMapCellType = new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings.FLOOR, idsWithTypeList, 1);
                FLOOR_CELL_TYPE = basicPlatormGeographicMapCellType;
            }
            else if (key === basicTopViewGeographicMapStrings.DOOR) {
                basicPlatormGeographicMapCellType = new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings.DOOR, idsWithTypeList, 1);
                DOOR_CELL_TYPE = basicPlatormGeographicMapCellType;
            }
            else if (key === basicTopViewGeographicMapStrings.STAIRS_UP) {
                basicPlatormGeographicMapCellType = new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings.STAIRS_UP, idsWithTypeList, 1);
                STAIRS_UP_CELL_TYPE = basicPlatormGeographicMapCellType;
            }
            else if (key === basicTopViewGeographicMapStrings.STAIRS_DOWN) {
                basicPlatormGeographicMapCellType = new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings.STAIRS_DOWN, idsWithTypeList, 1);
                STAIRS_DOWN_CELL_TYPE = basicPlatormGeographicMapCellType;
            }
            else if (key === basicTopViewGeographicMapStrings.OTHER) {
                basicPlatormGeographicMapCellType = new BasicTopViewGeographicMapCellType(basicTopViewGeographicMapStrings.OTHER, idsWithTypeList, 1);
                OTHER_CELL_TYPE = basicPlatormGeographicMapCellType;
            }
        }
        this.BLOCK_CELL_TYPE = BLOCK_CELL_TYPE;
        this.OFF_MAP_CELL_TYPE = OFF_MAP_CELL_TYPE;
        this.FLOOR_CELL_TYPE = FLOOR_CELL_TYPE;
        this.DOOR_CELL_TYPE = DOOR_CELL_TYPE;
        this.STAIRS_UP_CELL_TYPE = STAIRS_UP_CELL_TYPE;
        this.STAIRS_DOWN_CELL_TYPE = STAIRS_DOWN_CELL_TYPE;
        this.OTHER_CELL_TYPE = OTHER_CELL_TYPE;
        type = this.maxTileId - 1;
        if (geographicMapCellTypeArray[type] ==
            null) {
            new RaceTrackGeographicMapCellType(commonStrings.START, type, 1, 0);
        }
        else {
        }
        type = this.maxTileId - 2;
        if (geographicMapCellTypeArray[type] ==
            null) {
            new RaceTrackGeographicMapCellType(commonStrings.START, type, 1, 0);
        }
        else {
        }
    }
    getStartType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxTileId - 1;
    }
    getEndType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxTileId - 2;
    }
    getEmptyType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.FLOOR_CELL_TYPE.getTypes()[0];
    }
    isPath(cellType) {
        if (this.FLOOR_CELL_TYPE.isType(cellType)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append("key: WALL/BLOCK_CELL_TYPE: ").append(this.BLOCK_CELL_TYPE.toString()).append("key: FLOOR_CELL_TYPE: ").append(this.FLOOR_CELL_TYPE.toString()).append("key: OTHER_CELL_TYPE: ").append(this.OTHER_CELL_TYPE.toString()).append("key: OFF_MAP_CELL_TYPE: ").append(this.OFF_MAP_CELL_TYPE.toString()).append("key: DOOR_CELL_TYPE: ").append(this.DOOR_CELL_TYPE.toString()).append("key: STAIRS_DOWN_CELL_TYPE: ").append(this.STAIRS_DOWN_CELL_TYPE.toString()).append("key: STAIRS_UP_CELL_TYPE: ").append(this.STAIRS_UP_CELL_TYPE.toString()).toString();
        ;
    }
}
