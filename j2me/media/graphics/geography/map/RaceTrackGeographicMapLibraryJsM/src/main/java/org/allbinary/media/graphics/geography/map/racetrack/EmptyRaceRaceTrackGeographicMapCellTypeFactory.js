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
//not plain js import { CommonStrings } from '../../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { PathFindingNodeCostInfoData } from '../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNodeCostInfoData.js';
//not GWT import const PathFindingNodeCostInfoData = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingNodeCostInfoData;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RaceTrackGeographicMapCellTypeFactory } from './RaceTrackGeographicMapCellTypeFactory.js';
//not GWT import const RaceTrackGeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellTypeFactory;
import { RaceTrackGeographicMapCellType } from './RaceTrackGeographicMapCellType.js';
//not GWT import const RaceTrackGeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellType;
export class EmptyRaceRaceTrackGeographicMapCellTypeFactory extends RaceTrackGeographicMapCellTypeFactory {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return EmptyRaceRaceTrackGeographicMapCellTypeFactory.instanceC;
    }
    constructor() {
        super();
        var commonStrings = CommonStrings.getInstance();
        ;
        this.EMPTY_CELL_TYPE = new RaceTrackGeographicMapCellType(commonStrings.EMPTY, 0, PathFindingNodeCostInfoData.getInstance().MAX_NODE_COST, 1);
        this.EASY_CELL_TYPE = new RaceTrackGeographicMapCellType("Easy", 19, 1, 0);
        this.FINISH_LINE_ROAD_CELL_TYPE = this.DEFAULT_FINISH_LINE_ROAD_CELL_TYPE;
    }
}
EmptyRaceRaceTrackGeographicMapCellTypeFactory.instanceC = new EmptyRaceRaceTrackGeographicMapCellTypeFactory();
