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
import { Object } from '../../../../../../java/lang/Object.js';
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
import { SimpleGeographicMapCellPositionFactory } from '../../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GeographicMapCellPathHistoryInfo extends Object {
    constructor() {
        super(...arguments);
        this.previousGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.previousOnPathGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.nextUnvisitedOnPathGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.nextOnPathGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.nextChosenOnPathGeographicMapCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
    }
    getPreviousGeographicMapCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.previousGeographicMapCellPosition;
    }
    setPreviousGeographicMapCellPosition(previousGeographicMapCellPosition) {
        this.previousGeographicMapCellPosition = previousGeographicMapCellPosition;
    }
    getPreviousOnPathGeographicMapCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.previousOnPathGeographicMapCellPosition;
    }
    setPreviousOnPathGeographicMapCellPosition(previousOnPathGeographicMapCellPosition) {
        this.previousOnPathGeographicMapCellPosition = previousOnPathGeographicMapCellPosition;
    }
    getNextUnvisitedOnPathGeographicMapCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.nextUnvisitedOnPathGeographicMapCellPosition;
    }
    setNextUnvisitedOnPathGeographicMapCellPosition(nextUnvisitedOnPathGeographicMapCellPosition) {
        this.nextUnvisitedOnPathGeographicMapCellPosition = nextUnvisitedOnPathGeographicMapCellPosition;
    }
    getNextOnPathGeographicMapCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.nextOnPathGeographicMapCellPosition;
    }
    setNextOnPathGeographicMapCellPosition(nextOnPathGeographicMapCellPosition) {
        this.nextOnPathGeographicMapCellPosition = nextOnPathGeographicMapCellPosition;
    }
    getNextChosenOnPathGeographicMapCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.nextChosenOnPathGeographicMapCellPosition;
    }
    setNextChosenOnPathGeographicMapCellPosition(nextChosenOnPathGeographicMapCellPosition) {
        this.nextChosenOnPathGeographicMapCellPosition = nextChosenOnPathGeographicMapCellPosition;
    }
}
