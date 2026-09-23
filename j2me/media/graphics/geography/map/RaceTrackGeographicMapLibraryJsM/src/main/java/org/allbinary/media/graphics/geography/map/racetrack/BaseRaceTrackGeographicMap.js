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
import { Exception } from '../../../../../../../java/lang/Exception.js';
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const AllBinaryTiledLayer
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { BasicGeographicMap } from '../../../../../../../org/allbinary/media/graphics/geography/map/BasicGeographicMap.js';
//not GWT import - same folder const RaceTrackData
export class BaseRaceTrackGeographicMap extends BasicGeographicMap {
    constructor(raceTrackInfo, raceTrackData, tiledLayer, miniGeographicMap, geographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory, geographicMapCellTypeFactory) {
        super(raceTrackInfo.getId(), raceTrackInfo.getName(), raceTrackData.getCellTypeIdToGeographicMapCellTypeArray(), tiledLayer, raceTrackInfo.getForegroundBasicColor(), raceTrackInfo.getBackgroundBasicColor(), geographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory, geographicMapCellTypeFactory);
        this.logUtil = LogUtil.getInstance();
        //For kotlin this is before the body of the constructor.
        this.raceTrackInfo = raceTrackInfo;
        this.raceTrackData = raceTrackData;
        this.miniGeographicMap = miniGeographicMap;
        var miniTiledLayer = this.miniGeographicMap.getAllBinaryTiledLayer();
        ;
        if (miniTiledLayer.getColumns() != this.getGeographicMapCellPositionFactory().getColumns()) {
            var error = new StringMaker().append("RaceTrackMap has incorrect Mini Map columns: ").appendint(miniTiledLayer.getColumns()).append(" != ").appendint(this.getGeographicMapCellPositionFactory().getColumns()).toString();
            ;
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.putF(commonStrings.EXCEPTION, this, commonStrings.CONSTRUCTOR);
            throw new Exception(error);
        }
        if (miniTiledLayer.getRows() != this.getGeographicMapCellPositionFactory().getRows()) {
            var error = "RaceTrackMap has incorrect Mini Map rows";
            ;
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.putF(commonStrings.EXCEPTION, this, commonStrings.CONSTRUCTOR);
            throw new Exception(error);
        }
    }
    getRaceTrackInfo() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.raceTrackInfo;
    }
    setRaceTrackInfo(aRaceTrackInfo) {
        this.raceTrackInfo = aRaceTrackInfo;
    }
    setMiniBasicGeographicMap(miniBasicGeographicMap) {
        this.miniGeographicMap = miniBasicGeographicMap;
    }
    getMiniBasicGeographicMap() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.miniGeographicMap;
    }
    getRaceTrackData() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.raceTrackData;
    }
    setRaceTrackData(raceTrackData) {
        this.raceTrackData = raceTrackData;
    }
}
