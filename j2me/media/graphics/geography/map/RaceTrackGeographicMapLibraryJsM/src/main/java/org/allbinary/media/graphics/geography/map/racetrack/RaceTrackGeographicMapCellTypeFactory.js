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
import { GeographicMapCellType } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
//not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;
import { GeographicMapCellTypeFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
//not GWT import - same folder const RaceTrackGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellType;
import { RaceTrackGeographicMapCellTypes } from './RaceTrackGeographicMapCellTypes.js';
//not GWT import - same folder const RaceTrackGeographicMapCellTypes = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellTypes;
export class RaceTrackGeographicMapCellTypeFactory extends GeographicMapCellTypeFactory {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RaceTrackGeographicMapCellTypeFactory.instanceC;
    }
    constructor() {
        super();
        this.EMPTY_CELL_TYPE = new GeographicMapCellType(0, -1);
        this.EASY_CELL_TYPE = this.EMPTY_CELL_TYPE;
        this.FINISH_LINE_ROAD_CELL_TYPE = GeographicMapCellType.NULL_GEOGRAPHIC_MAP_CELL_TYPE;
        var raceTrackGeographicMapCellTypes = RaceTrackGeographicMapCellTypes.getInstance();
        ;
        this.BOTTOM_LEFT_TURN_ROAD_CELL_TYPE = raceTrackGeographicMapCellTypes.BOTTOM_LEFT_TURN_ROAD_CELL_TYPE;
        this.BOTTOM_RIGHT_TURN_ROAD_CELL_TYPE = raceTrackGeographicMapCellTypes.BOTTOM_RIGHT_TURN_ROAD_CELL_TYPE;
        this.TOP_LEFT_TURN_ROAD_CELL_TYPE = raceTrackGeographicMapCellTypes.TOP_LEFT_TURN_ROAD_CELL_TYPE;
        this.TOP_RIGHT_TURN_ROAD_CELL_TYPE = raceTrackGeographicMapCellTypes.TOP_RIGHT_TURN_ROAD_CELL_TYPE;
        this.HORIZONTAL_STRAIGHT_ROAD_CELL_TYPE = raceTrackGeographicMapCellTypes.HORIZONTAL_STRAIGHT_ROAD_CELL_TYPE;
        this.VERTICAL_STRAIGHT_ROAD_CELL_TYPE = raceTrackGeographicMapCellTypes.VERTICAL_STRAIGHT_ROAD_CELL_TYPE;
        this.START_LINE_ROAD_CELL_TYPE = raceTrackGeographicMapCellTypes.START_LINE_ROAD_CELL_TYPE;
        this.DEFAULT_FINISH_LINE_ROAD_CELL_TYPE = raceTrackGeographicMapCellTypes.DEFAULT_FINISH_LINE_ROAD_CELL_TYPE;
    }
    getStartType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.START_LINE_ROAD_CELL_TYPE.getType();
        ;
    }
    getEndType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.FINISH_LINE_ROAD_CELL_TYPE.getType();
        ;
    }
    getEmptyType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.EMPTY_CELL_TYPE.getType();
        ;
    }
    isPath(cellType) {
        if (cellType != this.EMPTY_CELL_TYPE && cellType != this.EASY_CELL_TYPE) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
RaceTrackGeographicMapCellTypeFactory.instanceC = new RaceTrackGeographicMapCellTypeFactory();
