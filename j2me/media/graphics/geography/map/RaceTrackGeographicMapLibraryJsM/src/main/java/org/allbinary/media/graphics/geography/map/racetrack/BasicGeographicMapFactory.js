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
import { BasicColorFactory } from '../../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { SmallIntegerSingletonFactory } from '../../../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
import { BasicGeographicMap } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import const BasicGeographicMap
import { GeographicMapCellPositionBaseFactory } from '../../../../../../../org/allbinary/media/graphics/geography/map/GeographicMapCellPositionBaseFactory.js';
//not GWT import - same folder const AllBinaryTiledLayerFactoryInterface
export class BasicGeographicMapFactory extends Object {
    //@Throws(Exception.constructor)
    getInstance(raceTrackInfo, raceTrackData, tiledLayerFactoryInterface, geographicMapCellPositionFactoryInterface, geographicMapCellTypeFactory) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new BasicGeographicMap(SmallIntegerSingletonFactory.getInstance().getAt(raceTrackInfo.getId().intValue() + 100 + 1), raceTrackInfo.getName(), raceTrackData.getCellTypeIdToGeographicMapCellTypeArray(), tiledLayerFactoryInterface.getMiniInstance(raceTrackData), BasicColorFactory.getInstance().CLEAR_COLOR, BasicColorFactory.getInstance().CLEAR_COLOR, geographicMapCellPositionFactoryInterface, new GeographicMapCellPositionBaseFactory(), geographicMapCellTypeFactory);
    }
}
