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
import { TiledLayer } from '../../../../../../../javax/microedition/lcdui/game/TiledLayer.js';
//not GWT import - same folder const RaceTrackData
export class TiledLayerFactory extends Object {
    getInstance(raceTrackData) {
        var mapArray = raceTrackData.getMapArray();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new TiledLayer(mapArray[0].length, mapArray.length, raceTrackData.getTileSetImage(), raceTrackData.getCellWidth(), raceTrackData.getCellHeight());
    }
    getMiniInstance(raceTrackData) {
        var mapArray = raceTrackData.getMapArray();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new TiledLayer(mapArray[0].length, mapArray.length, raceTrackData.getMiniTileSetImage(), raceTrackData.getMiniCellWidth(), raceTrackData.getMiniCellHeight());
    }
}
