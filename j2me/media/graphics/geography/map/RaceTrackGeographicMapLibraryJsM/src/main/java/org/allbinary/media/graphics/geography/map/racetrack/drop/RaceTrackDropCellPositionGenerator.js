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
import { Exception } from '../../../../../../../../java/lang/Exception.js';
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
import { GeographicMapCellTypeFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
//not GWT import const GeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellTypeFactory;
import { BaseDropCellPositionGenerator } from '../../../../../../../../org/allbinary/media/graphics/geography/map/drop/BaseDropCellPositionGenerator.js';
//not GWT import const BaseRaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.BaseRaceTrackGeographicMap;
import { NullRaceTrackGeographicMap } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/NullRaceTrackGeographicMap.js';
//not GWT import const RaceTrackGeographicMapInterface = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapInterface;
import { RaceTrackRoadsGeographicMapCellHistoryFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/racetrack/RaceTrackRoadsGeographicMapCellHistoryFactory.js';
//not GWT import const RaceTrackRoadsGeographicMapCellHistoryFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackRoadsGeographicMapCellHistoryFactory;
import { GameTickTimeDelayHelperFactory } from '../../../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;
import { TimeDelayHelper } from '../../../../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RaceTrackDropCellPositionGenerator extends BaseDropCellPositionGenerator {
    constructor() {
        super();
        this.list = new BasicArrayListD();
        this.STRAIGHTAWAY = 4;
        this.raceTrackGeographicMap = NullRaceTrackGeographicMap.NULL_RACE_TRACK_GEOGRAPHIC_MAP;
        this.raceTrackGeographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance();
        this.basicArrayListUtil = BasicArrayListUtil.getInstance();
        this.timeDelayHelper = new TimeDelayHelper(10000);
    }
    init() {
        this.list.clear();
    }
    //@Throws(Exception.constructor)
    isDropAllowedAt(geographicMapCellPosition) {
        var raceTrackGeographicMapCellType = this.raceTrackGeographicMap.getCellTypeAt(geographicMapCellPosition);
        ;
        var raceTrackGeographicMapCellTypeFactory = this.raceTrackGeographicMapCellTypeFactory;
        ;
        if (raceTrackGeographicMapCellType == raceTrackGeographicMapCellTypeFactory.HORIZONTAL_STRAIGHT_ROAD_CELL_TYPE || raceTrackGeographicMapCellType == raceTrackGeographicMapCellTypeFactory.VERTICAL_STRAIGHT_ROAD_CELL_TYPE) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    update(allBinaryGameLayerManager, geographicMapInterface) {
        this.init();
        var baseRaceTrackGeographicMap = geographicMapInterface;
        ;
        this.raceTrackGeographicMap = baseRaceTrackGeographicMap;
        this.raceTrackGeographicMapCellTypeFactory = baseRaceTrackGeographicMap.getGeographicMapCellTypeFactory();
        var roadGeographicMapCellHistory = RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance();
        ;
        var trackedList = roadGeographicMapCellHistory.getTracked();
        ;
        var geographicMapCellPosition;
        ;
        var lastIndex = trackedList.size() - 1;
        ;
        var total = 0;
        ;
        var ahead = 0;
        ;
        for (var index = lastIndex; index > 0; index--) {
            geographicMapCellPosition = trackedList.get(index);
            total = 0;
            ahead = index;
            while (this.isDropAllowedAt(trackedList.get(ahead))) {
                total++;
                if (total > this.STRAIGHTAWAY) {
                    this.list.add(geographicMapCellPosition);
                    break;
                }
                ahead++;
                if (ahead > lastIndex) {
                    break;
                }
            }
        }
        var size = this.list.size();
        ;
        for (var index = size - 1; index >= 0; index--) {
            this.drop(allBinaryGameLayerManager, index);
        }
    }
    //@Throws(Exception.constructor)
    processTick(allBinaryLayerManager) {
        if (this.timeDelayHelper.isTime(GameTickTimeDelayHelperFactory.getInstance().startTime)) {
            var index = this.basicArrayListUtil.getRandomIndex(this.list);
            ;
            this.drop(allBinaryLayerManager, index);
        }
    }
    //@Throws(Exception.constructor)
    drop(allBinaryLayerManager, index) {
        throw new Exception(CommonStrings.getInstance().NOT_IMPLEMENTED);
    }
}
