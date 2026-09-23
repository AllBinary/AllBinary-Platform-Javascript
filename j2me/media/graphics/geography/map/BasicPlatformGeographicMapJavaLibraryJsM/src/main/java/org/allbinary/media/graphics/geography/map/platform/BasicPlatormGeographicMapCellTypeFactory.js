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
//not GWT import const Enumeration
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { GeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
//not GWT import const GeographicMapCellType
import { GeographicMapCellTypeFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
//not GWT import const GeographicMapCellTypeFactory
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { EnumerationUtil } 
const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicPlatormGeographicMapCellType } from './BasicPlatormGeographicMapCellType.js';
//not GWT import - same folder const BasicPlatormGeographicMapCellType
export class BasicPlatormGeographicMapCellTypeFactory extends GeographicMapCellTypeFactory {
    constructor(tileTypeToTileIdsMap, maxTileId) {
        super();
        this.enumerationUtil = EnumerationUtil.getInstance();
        var commonStrings = CommonStrings.getInstance();
        ;
        this.logUtil.putF(commonStrings.START, this, commonStrings.INIT);
        this.maxTileId = maxTileId;
        new GeographicMapCellType(0, 0);
        var BLOCK_CELL_TYPE = BasicPlatormGeographicMapCellType.createType(1);
        ;
        var JUMP_THRU_CELL_TYPE = BLOCK_CELL_TYPE;
        ;
        var LADDER_CELL_TYPE = BLOCK_CELL_TYPE;
        ;
        var PLATFORM = "Platform";
        ;
        var JUMP_TRHU = "JumpThru";
        ;
        var LADDER = "Ladder";
        ;
        var enumeration = tileTypeToTileIdsMap.keys();
        ;
        var idsWithTypeList;
        ;
        var key;
        ;
        var basicPlatormGeographicMapCellType;
        ;
        while (this.enumerationUtil.hasMoreElements(enumeration)) {
            key = this.enumerationUtil.nextElement(enumeration);
            this.logUtil.putF(key, this, commonStrings.INIT);
            idsWithTypeList = tileTypeToTileIdsMap.get(key);
            basicPlatormGeographicMapCellType = new BasicPlatormGeographicMapCellType(idsWithTypeList);
            if (key === PLATFORM) {
                BLOCK_CELL_TYPE = basicPlatormGeographicMapCellType;
            }
            if (key === JUMP_TRHU) {
                JUMP_THRU_CELL_TYPE = basicPlatormGeographicMapCellType;
            }
            if (key === LADDER) {
                LADDER_CELL_TYPE = basicPlatormGeographicMapCellType;
            }
        }
        this.BLOCK_CELL_TYPE = BLOCK_CELL_TYPE;
        this.JUMP_THRU_CELL_TYPE = JUMP_THRU_CELL_TYPE;
        this.LADDER_CELL_TYPE = LADDER_CELL_TYPE;
        new GeographicMapCellType(this.maxTileId - 1, 0);
        new GeographicMapCellType(this.maxTileId - 2, 0);
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
        return 0;
    }
    isPath(cellType) {
        if (cellType.getType() == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
