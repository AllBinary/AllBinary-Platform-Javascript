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
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
import { GroupCommonFactory } from '../../../../../../../../org/allbinary/game/identification/GroupCommonFactory.js';
//not GWT import const GroupCommonFactory = globalThis.org.allbinary.game.identification.GroupCommonFactory;
//not plain js import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const Direction = globalThis.org.allbinary.direction.Direction;
import { DirectionFactory } from '../../../../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;
import { BasicGroupFactory } from '../../../../../../../../org/allbinary/game/identification/BasicGroupFactory.js';
//not GWT import const BasicGroupFactory = globalThis.org.allbinary.game.identification.BasicGroupFactory;
import { AllBinaryGameLayerManager } from '../../../../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;
import { LayerCoveringCellPositionsUtil } from '../../../../../../../../org/allbinary/game/layer/geographic/map/LayerCoveringCellPositionsUtil.js';
//not GWT import const LayerCoveringCellPositionsUtil = globalThis.org.allbinary.game.layer.geographic.map.LayerCoveringCellPositionsUtil;
//not plain js import { GPoint } from '../../../../../../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
import { StdUtil } from '../../../../../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const GeographicMapCellType = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellType;
import { GeographicMapDirectionUtil } from '../../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapDirectionUtil.js';
//not GWT import const GeographicMapDirectionUtil = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapDirectionUtil;
import { SimpleGeographicMapCellPositionFactory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const DropCellPositionGeneratorInterface = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionGeneratorInterface;
import { DropCellPositionHistory } from '../../../../../../../../org/allbinary/media/graphics/geography/map/drop/DropCellPositionHistory.js';
//not GWT import const RaceTrackGeographicMapCellTypeFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMapCellTypeFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RaceTrackDropCellPositionGenerator } from './RaceTrackDropCellPositionGenerator.js';
//not GWT import const RaceTrackDropCellPositionGenerator = globalThis.org.allbinary.media.graphics.geography.map.racetrack.drop.RaceTrackDropCellPositionGenerator;
import { RaceTrackAdjacentDropLayerFactory } from './RaceTrackAdjacentDropLayerFactory.js';
//not GWT import const RaceTrackAdjacentDropLayerFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.drop.RaceTrackAdjacentDropLayerFactory;
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
        var nonRoadGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        ;
        var geographicMapCellPositionFactory = this.raceTrackGeographicMap.getGeographicMapCellPositionFactory();
        ;
        this.surroundingCellPositions[0] = geographicMapCellPositionFactory.getAt(column, row - 1);
        this.surroundingCellPositions[1] = geographicMapCellPositionFactory.getAt(column, row + 1);
        this.surroundingCellPositions[2] = geographicMapCellPositionFactory.getAt(column - 1, row);
        this.surroundingCellPositions[3] = geographicMapCellPositionFactory.getAt(column + 1, row);
        var baseRaceTrackGeographicMap = this.raceTrackGeographicMap;
        ;
        var raceTrackGeographicMapCellTypeFactory = baseRaceTrackGeographicMap.getGeographicMapCellTypeFactory();
        ;
        var geographicMapCellPosition;
        ;
        var raceTrackGeographicMapCellType;
        ;
        for (var index = this.surroundingCellPositions.length; --index >= 0;) {
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
        var geographicMapCellPosition = this.list.get(index);
        ;
        var randomGeographicMapCellPosition = this.getFirstNonRoadAdjacentCellPosition(geographicMapCellPosition.getColumn(), geographicMapCellPosition.getRow());
        ;
        if (randomGeographicMapCellPosition ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var dropCellPositionHistory = DropCellPositionHistory.getInstance();
        ;
        if (!dropCellPositionHistory.isCellPositionWithDrop(geographicMapCellPosition)) {
            var direction = this.geographicMapDirectionUtil.getDirectionFromCellPositionToAdjacentCellPosition(randomGeographicMapCellPosition, geographicMapCellPosition);
            ;
            var objectCanBeNull = this.hashtable.get(this.groupCommonFactory.ID);
            ;
            if (objectCanBeNull !=
                null) {
            }
            else {
                this.hashtable.put(this.groupCommonFactory.ID, BasicGroupFactory.getInstance().NONE_ARRAY);
            }
            this.hashtable.put(DirectionFactory.getInstance().NAME, direction);
            var point = randomGeographicMapCellPosition.getPoint();
            ;
            var x = point.getX();
            ;
            var y = point.getY();
            ;
            var z = point.getZ();
            ;
            var layerInterface = RaceTrackAdjacentDropLayerFactory.getInstance().getRandomInstance().getNextInstance(hashtable, x, y, z);
            ;
            var baseRaceTrackGeographicMap = this.raceTrackGeographicMap;
            ;
            var list = this.layerCoveringCellPositionsUtil.getAll(baseRaceTrackGeographicMap, randomGeographicMapCellPosition, layerInterface, new BasicArrayListD());
            ;
            if (dropCellPositionHistory.anyCellPositionWithDrop(list)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
            var geographicMapCellType;
            ;
            for (var index2 = list.size(); --index2 >= 0;) {
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
