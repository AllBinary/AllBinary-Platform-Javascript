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
import { GroupCommonFactory } from '../../../../../../../../org/allbinary/game/identification/GroupCommonFactory.js';
//not GWT import const GroupCommonFactory
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const Direction
import { DirectionFactory } from '../../../../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionFactory
import { BasicGroupFactory } from '../../../../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
//not GWT import const BasicGroupFactory
import { AllBinaryGameLayerManager } from '../../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager
import { LayerCoveringCellPositionsUtil } from '../../../../../../../../org/allbinary/game/layer/geographic/map/LayerCoveringCellPositionsUtil.js';
//not GWT import const AllBinaryLayerManager
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not GWT import const GeographicMapCellType
import { GeographicMapDirectionUtil } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js';
//not GWT import const GeographicMapDirectionUtil
import { SimpleGeographicMapCellPositionFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const DropCellPositionGeneratorInterface
import { DropCellPositionHistory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
//not GWT import const RaceTrackGeographicMapCellTypeFactory
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RaceTrackDropCellPositionGenerator } from './RaceTrackDropCellPositionGenerator.js';
//sameFolderImports - not GWT import - same folder const RaceTrackDropCellPositionGenerator
import { RaceTrackAdjacentDropLayerFactory } from './RaceTrackAdjacentDropLayerFactory.js';
//sameFolderImports - not GWT import - same folder const RaceTrackAdjacentDropLayerFactory
export class RaceTrackAdjacentDropCellPositionGenerator extends RaceTrackDropCellPositionGenerator {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RaceTrackAdjacentDropCellPositionGenerator.SINGLETON;
    }
    constructor() {
        super();
        this.layerCoveringCellPositionsUtil = LayerCoveringCellPositionsUtil.getInstance();
        this.groupCommonFactory = GroupCommonFactory.getInstance();
        this.surroundingCellPositions = new Array(4);
        this.hashtable = StdUtil.getInstance().createHashtable();
        this.geographicMapDirectionUtil = GeographicMapDirectionUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    getFirstNonRoadAdjacentCellPosition(column, row) {
        let nonRoadGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        ;
        let geographicMapCellPositionFactory = this.raceTrackGeographicMap.getGeographicMapCellPositionFactory();
        ;
        this.surroundingCellPositions[0] = geographicMapCellPositionFactory.getAt(column, row - 1);
        this.surroundingCellPositions[1] = geographicMapCellPositionFactory.getAt(column, row + 1);
        this.surroundingCellPositions[2] = geographicMapCellPositionFactory.getAt(column - 1, row);
        this.surroundingCellPositions[3] = geographicMapCellPositionFactory.getAt(column + 1, row);
        let baseRaceTrackGeographicMap = this.raceTrackGeographicMap;
        ;
        let raceTrackGeographicMapCellTypeFactory = baseRaceTrackGeographicMap.getGeographicMapCellTypeFactory();
        ;
        let geographicMapCellPosition;
        ;
        let raceTrackGeographicMapCellType;
        ;
        for (let index = this.surroundingCellPositions.length; --index >= 0;) {
            geographicMapCellPosition = this.surroundingCellPositions[index];
            raceTrackGeographicMapCellType = this.raceTrackGeographicMap.getCellTypeAt(geographicMapCellPosition);
            if (!raceTrackGeographicMapCellTypeFactory.isPath(raceTrackGeographicMapCellType)) {
                nonRoadGeographicMapCellPosition = geographicMapCellPosition;
                break;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return nonRoadGeographicMapCellPosition;
    }
    //@Throws(Exception.constructor)
    update(allBinaryGameLayerManager, geographicMapInterface) {
        this.hashtable.put(AllBinaryGameLayerManager.ID, allBinaryGameLayerManager);
        super.update(allBinaryGameLayerManager, geographicMapInterface);
    }
    //@Throws(Exception.constructor)
    drop(allBinaryLayerManager, index) {
        let geographicMapCellPosition = this.list.get(index);
        ;
        let randomGeographicMapCellPosition = this.getFirstNonRoadAdjacentCellPosition(geographicMapCellPosition.getColumn(), geographicMapCellPosition.getRow());
        ;
        if (randomGeographicMapCellPosition ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        let dropCellPositionHistory = DropCellPositionHistory.getInstance();
        ;
        if (!dropCellPositionHistory.isCellPositionWithDrop(geographicMapCellPosition)) {
            let direction = this.geographicMapDirectionUtil.getDirectionFromCellPositionToAdjacentCellPosition(randomGeographicMapCellPosition, geographicMapCellPosition);
            ;
            let objectCanBeNull = this.hashtable.get(this.groupCommonFactory.ID);
            ;
            if (objectCanBeNull !=
                null) {
            }
            else {
                this.hashtable.put(this.groupCommonFactory.ID, BasicGroupFactory.getInstance().NONE_ARRAY);
            }
            this.hashtable.put(DirectionFactory.getInstance().NAME, direction);
            let point = randomGeographicMapCellPosition.getPoint();
            ;
            let x = point.getX();
            ;
            let y = point.getY();
            ;
            let z = point.getZ();
            ;
            let layerInterface = RaceTrackAdjacentDropLayerFactory.getInstance().getRandomInstance().getNextInstance(hashtable, x, y, z);
            ;
            let baseRaceTrackGeographicMap = this.raceTrackGeographicMap;
            ;
            let list = this.layerCoveringCellPositionsUtil.getAll(baseRaceTrackGeographicMap, randomGeographicMapCellPosition, layerInterface, new BasicArrayListD());
            ;
            if (dropCellPositionHistory.anyCellPositionWithDrop(list)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            let geographicMapCellType;
            ;
            for (let index2 = list.size(); --index2 >= 0;) {
                geographicMapCellType = this.raceTrackGeographicMap.getCellTypeAt(list.get(index2));
                if (this.raceTrackGeographicMapCellTypeFactory.isPath(geographicMapCellType)) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return;
                }
            }
            dropCellPositionHistory.addAll(list, layerInterface);
            allBinaryLayerManager.append(layerInterface);
        }
    }
}
RaceTrackAdjacentDropCellPositionGenerator.SINGLETON = new RaceTrackAdjacentDropCellPositionGenerator();
