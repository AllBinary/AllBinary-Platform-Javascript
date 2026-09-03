/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2002 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *    Created By: Travis Berthelot
*/
//not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { BasicGeographicMap } from '../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.BasicGeographicMap;
import { GeographicMapCellType } from '../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellType.js';
//not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryGameLayerManager } from './AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;
export class FakeLayerManager extends AllBinaryGameLayerManager {
    constructor(gameInfo) {
        super(BasicColorFactory.getInstance().BLACK, BasicColorFactory.getInstance().WHITE, gameInfo);
        this.geographicMapInterfaceArray = BasicGeographicMap.NULL_BASIC_GEOGRAPHIC_MAP_ARRAY;
        this.geographicMapCellTypeArray = GeographicMapCellType.NULL_GEOGRAPHIC_MAP_CELL_TYPE_ARRAY;
        //For kotlin this is before the body of the constructor.
    }
    getGeographicMapInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapInterfaceArray;
    }
    setGeographicMapInterface(geographicMapInterfaceArray) {
        this.geographicMapInterfaceArray = geographicMapInterfaceArray;
        this.geographicMapCellTypeArray = new Array(this.geographicMapInterfaceArray.length);
    }
    geographicMapCellTypeArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.geographicMapCellTypeArray;
    }
}
