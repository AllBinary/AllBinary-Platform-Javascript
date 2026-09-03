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
import { RuntimeException } from '../../../../../../../java/lang/RuntimeException.js';
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;
//not plain js import { NullUtil } from '../../../../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
import { GeographicMapCellTypeFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellTypeFactory.js';
//not GWT import const PathFindingInfo = globalThis.org.allbinary.media.graphics.geography.pathfinding.PathFindingInfo;
import { PathFindingNode } from '../../../../../../../org/allbinary/media/graphics/geography/pathfinding/PathFindingNode.js';
//not GWT import const GeographicMapCellPositionFactoryInitVisitorInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPositionFactoryInitVisitorInterface;
//not plain js import { CommonSeps } from '../../../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RaceTrackRoadsGeographicMapCellHistoryFactory } from './RaceTrackRoadsGeographicMapCellHistoryFactory.js';
//not GWT import const RaceTrackRoadsGeographicMapCellHistoryFactory = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackRoadsGeographicMapCellHistoryFactory;
export class BasePathFindingInfoFactory extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    //@Throws(Exception.constructor)
    init(geographicMapInterface, pathFindingInfo, mapArray) {
        //inner=true member= isStatic=
        class RaceTrackGeographicMapCellPositionFactoryInitVisitor extends Object {
            constructor() {
                super();
                var raceTrackGeographicMapCellTypeFactory = geographicMapInterface.getGeographicMapCellTypeFactory();
                ;
                this.startLineId = raceTrackGeographicMapCellTypeFactory.getStartType();
                this.finishLineId = raceTrackGeographicMapCellTypeFactory.getEndType();
            }
            //@Throws(Exception.constructor)
            visit(tiledLayer, cellPosition) {
                var row = cellPosition.getRow();
                ;
                var column = cellPosition.getColumn();
                ;
                try {
                    var cellTypeId = mapArray[row][column];
                    ;
                    var geographicCellType = geographicMapInterface.getCellTypeFromMapCellTypeInt(cellTypeId);
                    ;
                    if (geographicCellType == this.startLineId) {
                        BasePathFindingInfoFactory.prototype.addStartPathFindingNode(pathFindingInfo, cellPosition);
                    }
                    if (geographicCellType == this.finishLineId) {
                        if (geographicCellType == this.startLineId) {
                            BasePathFindingInfoFactory.prototype.addEndPathFindingNode(pathFindingInfo, geographicMapInterface.getGeographicMapCellPositionFactoryInterface().getInstance(geographicMapInterface, cellPosition.getColumn(), cellPosition.getRow(), tiledLayer.getColumns(), tiledLayer.getRows(), tiledLayer.getCellWidth(), tiledLayer.getCellHeight()));
                        }
                        else {
                            BasePathFindingInfoFactory.prototype.addEndPathFindingNode(pathFindingInfo, cellPosition);
                        }
                    }
                    var raceTrackGeographicMapCellTypeFactory = geographicMapInterface.getGeographicMapCellTypeFactory();
                    ;
                    var geographicMapCellTypeFactory = GeographicMapCellTypeFactory.getInstance();
                    ;
                    if (raceTrackGeographicMapCellTypeFactory.isPath(geographicMapCellTypeFactory.get(geographicCellType))) {
                        RaceTrackRoadsGeographicMapCellHistoryFactory.getInstance().track(cellPosition);
                    }
                    else {
                    }
                    //: 
                }
                catch (e) {
                    var commonSeps = CommonSeps.getInstance();
                    ;
                    logUtil.put(new StringMaker().append(commonSeps.BRACKET_OPEN).appendint(row).append(commonSeps.BRACKET_CLOSE).append(commonSeps.BRACKET_OPEN).appendint(column).append("] in [").appendint(mapArray.length).append(commonSeps.BRACKET_CLOSE).append(commonSeps.BRACKET_OPEN).appendint(mapArray[0].length).append(commonSeps.BRACKET_CLOSE).toString(), this, "visit", e);
                    throw e;
                }
            }
        }
        geographicMapInterface.getGeographicMapCellPositionFactory().visit(new RaceTrackGeographicMapCellPositionFactoryInitVisitor());
    }
    //@Throws(Exception.constructor)
    addStartPathFindingNode(pathFindingInfo, startGeographicMapCellPosition) {
        pathFindingInfo.addStartPathFindingNode(new PathFindingNode(NullUtil.getInstance().NULL_OBJECT, startGeographicMapCellPosition));
    }
    //@Throws(Exception.constructor)
    addEndPathFindingNode(pathFindingInfo, endGeographicMapCellPosition) {
        pathFindingInfo.addEndPathFindingNode(new PathFindingNode(NullUtil.getInstance().NULL_OBJECT, endGeographicMapCellPosition));
    }
    //@Throws(Exception.constructor)
    getInstancePathFindingInfo(geographicMapInterface, graphArray) {
        throw new RuntimeException();
    }
}
