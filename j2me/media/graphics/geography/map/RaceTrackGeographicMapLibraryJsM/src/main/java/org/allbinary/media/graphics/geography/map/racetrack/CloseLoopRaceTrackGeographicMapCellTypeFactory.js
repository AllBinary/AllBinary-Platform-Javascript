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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RaceTrackGeographicMapCellTypeFactory } from './RaceTrackGeographicMapCellTypeFactory.js';
//not GWT import - same folder const RaceTrackGeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellTypeFactory;
import { EmptyRaceRaceTrackGeographicMapCellTypeFactory } from './EmptyRaceRaceTrackGeographicMapCellTypeFactory.js';
//not GWT import - same folder const EmptyRaceRaceTrackGeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.EmptyRaceRaceTrackGeographicMapCellTypeFactory;
export class CloseLoopRaceTrackGeographicMapCellTypeFactory extends RaceTrackGeographicMapCellTypeFactory {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CloseLoopRaceTrackGeographicMapCellTypeFactory.instanceC;
    }
    constructor() {
        super();
        this.EMPTY_CELL_TYPE = EmptyRaceRaceTrackGeographicMapCellTypeFactory.getInstance().EMPTY_CELL_TYPE;
        this.EASY_CELL_TYPE = this.EMPTY_CELL_TYPE;
        this.FINISH_LINE_ROAD_CELL_TYPE = this.START_LINE_ROAD_CELL_TYPE;
    }
}
CloseLoopRaceTrackGeographicMapCellTypeFactory.instanceC = new CloseLoopRaceTrackGeographicMapCellTypeFactory();
