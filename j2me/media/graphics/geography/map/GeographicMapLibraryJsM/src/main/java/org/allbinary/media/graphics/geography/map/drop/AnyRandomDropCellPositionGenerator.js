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
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const AllBinaryTiledLayer
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
//not GWT import const AllBinaryLayerManager
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not GWT import const BasicGeographicMap
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseDropCellPositionGenerator } from './BaseDropCellPositionGenerator.js';
//not GWT import - same folder const BaseDropCellPositionGenerator
export class AnyRandomDropCellPositionGenerator extends BaseDropCellPositionGenerator {
    constructor() {
        super(...arguments);
        this.list = new BasicArrayListD();
        this.geographicMapInterface = NullUtil.getInstance().NULL_OBJECT;
    }
    //@Throws(Exception.constructor)
    update(allBinaryGameLayerManager, geographicMapInterface) {
        this.geographicMapInterface = geographicMapInterface;
        var basicGeographicMapCellPositionFactory = geographicMapInterface.getGeographicMapCellPositionFactory();
        ;
        var randomFactory = MyRandomFactory.getInstance();
        ;
        var tiledLayer = geographicMapInterface.getAllBinaryTiledLayer();
        ;
        var total = tiledLayer.getColumns() * tiledLayer.getRows();
        ;
        var randomColumn = 0;
        ;
        var randomRow = 0;
        ;
        var geographicMapCellPosition;
        ;
        for (var index = total; --index >= 0;) {
            randomColumn = randomFactory.getAbsoluteNextInt(tiledLayer.getColumns());
            randomRow = randomFactory.getAbsoluteNextInt(tiledLayer.getRows());
            geographicMapCellPosition = basicGeographicMapCellPositionFactory.getAt(randomColumn, randomRow);
            if (this.isDropAllowedAt(geographicMapCellPosition)) {
                this.list.add(geographicMapCellPosition);
            }
        }
    }
    //@Throws(Exception.constructor)
    processTick(allBinaryLayerManager) {
    }
}
