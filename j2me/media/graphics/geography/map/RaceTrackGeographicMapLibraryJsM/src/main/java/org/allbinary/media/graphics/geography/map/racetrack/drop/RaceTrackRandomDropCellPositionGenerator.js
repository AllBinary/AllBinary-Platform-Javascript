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
//not GWT import const AllBinaryTiledLayer
import { DropLayerFactory } from '../../../../../../../../org/allbinary/game/layer/drop/DropLayerFactory.js';
//not GWT import const DropLayerFactory
import { PickupLayerCircularStaticPool } from '../../../../../../../../org/allbinary/game/layer/pickup/PickupLayerCircularStaticPool.js';
//not GWT import const RaceTrackPickupLayer
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
//not GWT import const GeographicMapCellPosition
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RaceTrackDropCellPositionGenerator } from './RaceTrackDropCellPositionGenerator.js';
//not GWT import - same folder const RaceTrackDropCellPositionGenerator
export class RaceTrackRandomDropCellPositionGenerator extends RaceTrackDropCellPositionGenerator {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RaceTrackRandomDropCellPositionGenerator.SINGLETON;
    }
    constructor() {
        super();
        this.myRandomFactory = MyRandomFactory.getInstance();
        this.cellsPerRowOrColumn = 3;
        this.totalCells = this.cellsPerRowOrColumn * this.cellsPerRowOrColumn;
        this.rowArray = [0, 1, 2, 0, 1, 2, 0, 1, 2];
        this.columnArray = [0, 0, 0, 1, 1, 1, 2, 2, 2];
        this.cellWidth = 0;
        this.cellHeight = 0;
    }
    //@Throws(Exception.constructor)
    update(allBinaryGameLayerManager, geographicMapInterface) {
        super.update(allBinaryGameLayerManager, geographicMapInterface);
        var tiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        ;
        this.cellWidth = tiledLayer.getCellWidth() / this.cellsPerRowOrColumn;
        this.cellHeight = tiledLayer.getCellHeight() / this.cellsPerRowOrColumn;
    }
    //@Throws(Exception.constructor)
    drop(allBinaryLayerManager, index) {
        var geographicMapCellPosition = this.list.get(index);
        ;
        var point = geographicMapCellPosition.getPoint();
        ;
        var randomCell = this.myRandomFactory.getAbsoluteNextInt(this.totalCells);
        ;
        var row = this.rowArray[randomCell];
        ;
        var column = this.columnArray[randomCell];
        ;
        var x = point.getX() + (row * this.cellWidth);
        ;
        var y = point.getY() + (column * this.cellHeight);
        ;
        var pickedUpLayerInterfaceFactory = DropLayerFactory.getInstance().getRandomInstance();
        ;
        var tiledLayer = this.raceTrackGeographicMap.getAllBinaryTiledLayer();
        ;
        var pickupLayer = PickupLayerCircularStaticPool.getInstance().getInstanceXYZ(pickedUpLayerInterfaceFactory, x, y, tiledLayer.getZP() + 3);
        ;
        pickupLayer.setTiledLayer(tiledLayer);
        allBinaryLayerManager.append(pickupLayer);
    }
}
RaceTrackRandomDropCellPositionGenerator.SINGLETON = new RaceTrackRandomDropCellPositionGenerator();
