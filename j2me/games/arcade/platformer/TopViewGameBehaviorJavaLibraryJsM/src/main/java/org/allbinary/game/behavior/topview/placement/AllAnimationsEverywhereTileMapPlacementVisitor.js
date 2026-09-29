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
//not GWT import const TiledMap
//Current folder imports from return types, extended types, and scope (deduplicated)
import { TileMapPlacementVisitor } from './TileMapPlacementVisitor.js';
//not GWT import - same folder const TileMapPlacementVisitor
export class AllAnimationsEverywhereTileMapPlacementVisitor extends TileMapPlacementVisitor {
    visit(lastMap, mapData) {
        var size = mapData.length;
        ;
        var size2 = mapData[0].length - 7;
        ;
        for (var index = 0; index < size; index++) {
            for (var index2 = 0; index2 < size2;) {
                mapData[index][index2] = 1;
                mapData[index][index2 + 1] = 17;
                mapData[index][index2 + 2] = 33;
                mapData[index][index2 + 3] = 49;
                mapData[index][index2 + 4] = 65;
                mapData[index][index2 + 5] = 81;
                mapData[index][index2 + 6] = 97;
            }
        }
    }
}
