/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { MultiGeographicMapBehavior } from '../../../../../org/allbinary/media/graphics/geography/map/MultiGeographicMapBehavior.js';
//not GWT import const Direction
import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionFactory
import { BasicTerrainInfo } from '../../../../../org/allbinary/game/terrain/BasicTerrainInfo.js';
//not GWT import const TerrainEvent
import { TerrainEventCircularStaticPool } from '../../../../../org/allbinary/game/terrain/TerrainEventCircularStaticPool.js';
//not GWT import const TerrainEventCircularStaticPool
import { TerrainEventHandler } from '../../../../../org/allbinary/game/terrain/TerrainEventHandler.js';
//not GWT import const AllBinaryLayer
import { AngleFactory } from '../../../../../org/allbinary/math/AngleFactory.js';
//not GWT import const GeographicMapCellType
import { SimpleGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TopViewCharacterBehavior } from './TopViewCharacterBehavior.js';
//sameFolderImports - not GWT import - same folder const TopViewCharacterBehavior
export class NonPlayerTopViewCharacterBehavior extends TopViewCharacterBehavior {
    constructor() {
        super(...arguments);
        this.geographicMapBehavior = new MultiGeographicMapBehavior();
        this.CLIFF = new BasicTerrainInfo(AngleFactory.getInstance().DOWN);
    }
    //@Throws(Exception.constructor)
    terrainEvent(layer, direction, x, y, geographicMapInterfaceArray, geographicMapCellTypeArray, geographicMapCellPosition) {
        let maxColumns = geographicMapInterfaceArray[0].getAllBinaryTiledLayer().getColumns();
        ;
        if (geographicMapCellPosition.getColumn() > 0 && geographicMapCellPosition.getColumn() < maxColumns) {
            let nextTerrainGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
            ;
            let geographicMapCellPositionFactory = geographicMapInterfaceArray[0].getGeographicMapCellPositionFactory();
            ;
            if (direction == DirectionFactory.getInstance().LEFT) {
                nextTerrainGeographicMapCellPosition = geographicMapCellPositionFactory.getAt(geographicMapCellPosition.getColumn() - 1, geographicMapCellPosition.getRow());
            }
            else if (direction == DirectionFactory.getInstance().RIGHT) {
                nextTerrainGeographicMapCellPosition = geographicMapCellPositionFactory.getAt(geographicMapCellPosition.getColumn() + 1, geographicMapCellPosition.getRow());
            }
            this.geographicMapBehavior.getCellTypeAt(geographicMapInterfaceArray, geographicMapCellTypeArray, nextTerrainGeographicMapCellPosition);
            let hasSolidBlock = this.hasSolidBlock(geographicMapInterfaceArray, geographicMapCellTypeArray);
            ;
            if (!hasSolidBlock) {
                let terrainEvent = TerrainEventCircularStaticPool.getInstance().getNext(this.CLIFF);
                ;
                TerrainEventHandler.getInstance(layer).fireEvent(terrainEvent);
            }
        }
    }
    terrainMove(layer, geographicMapInterfaceArray, x, y) {
        layer.moveDXY(x, y);
    }
}
