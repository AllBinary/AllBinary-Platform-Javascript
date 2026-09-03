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
//not plain js import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GeographicMapCellHistoryProgressBase } from './GeographicMapCellHistoryProgressBase.js';
//not GWT import const GeographicMapCellHistoryProgressBase = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistoryProgressBase;
import { GeographicMapCellHistory } from './GeographicMapCellHistory.js';
//not GWT import const GeographicMapCellHistory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellHistory;
export class GeographicMapCellHistoryProgress extends GeographicMapCellHistoryProgressBase {
    constructor(geographicMapCellHistoryArray) {
        super();
        this.totalVisitedArray = NullUtil.getInstance().NULL_INT_ARRAY;
        this.geographicMapCellHistoryArray = GeographicMapCellHistory.NULL_GEOGRPAHIC_MAP_HISTORY_ARRAY;
        this.geographicMapCellHistoryArray = geographicMapCellHistoryArray;
        this.init();
    }
    init() {
        this.totalVisitedArray = new Array(this.geographicMapCellHistoryArray.length);
    }
    isAnyProgress() {
        var isProgressing = false;
        ;
        var size = this.geographicMapCellHistoryArray.length;
        ;
        var currentTotalVisited = 0;
        ;
        var totalVisited = 0;
        ;
        for (var index = 0; index < size; index++) {
            totalVisited = this.geographicMapCellHistoryArray[index].getTotalVisited();
            currentTotalVisited = this.totalVisitedArray[index];
            if (currentTotalVisited < totalVisited) {
                isProgressing = true;
                this.totalVisitedArray[index] = totalVisited;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return isProgressing;
    }
}
