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
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const GeographicMapCellTypeFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseRaceTrackGeographicMap } from './BaseRaceTrackGeographicMap.js';
//not GWT import - same folder const CustomMapGeneratorBase
import { BasicGeographicMapFactory } from './BasicGeographicMapFactory.js';
//not GWT import - same folder const CustomMapGeneratorBaseFactory
export class RaceTrackGeographicMap extends BaseRaceTrackGeographicMap {
    constructor(raceTrackInfo, raceTrackData, tiledLayerFactoryInterface, geographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory, geographicMapCellTypeFactory, customMapGeneratorBaseFactory) {
        super(raceTrackInfo, raceTrackData, tiledLayerFactoryInterface.getInstance(raceTrackInfo, raceTrackData), new BasicGeographicMapFactory().getInstance(raceTrackInfo, raceTrackData, tiledLayerFactoryInterface, geographicMapCellPositionFactoryInterface, geographicMapCellTypeFactory), geographicMapCellPositionFactoryInterface, geographicMapCellPositionBaseFactory, geographicMapCellTypeFactory);
        //For kotlin this is before the body of the constructor.
        this.customMapGenerator = customMapGeneratorBaseFactory.create(this);
    }
    getCustomMapGenerator() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.customMapGenerator;
    }
    //@Throws(Exception.constructor)
    isValid(geographicMapCellPosition) {
        var customMapArray = this.customMapGenerator.getCustomMapArray();
        ;
        if (geographicMapCellPosition.getColumn() >= customMapArray[0].length) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append("Column: ");
            stringBuffer.appendint(geographicMapCellPosition.getColumn());
            stringBuffer.append(" not in: ");
            stringBuffer.appendint(customMapArray[0].length);
            this.logUtil.putF(stringBuffer.toString(), this, this.commonStrings.IS_VALID);
            if (geographicMapCellPosition.getColumn() == customMapArray[0].length) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
            else {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        else if (geographicMapCellPosition.getRow() > customMapArray.length) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append("Row: ");
            stringBuffer.appendint(geographicMapCellPosition.getRow());
            stringBuffer.append(" not in: ");
            stringBuffer.appendint(customMapArray.length);
            this.logUtil.putF(stringBuffer.toString(), this, this.commonStrings.IS_VALID);
            if (geographicMapCellPosition.getRow() == customMapArray.length) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
            else {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
}
