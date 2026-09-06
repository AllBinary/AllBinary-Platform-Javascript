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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { TiledLayer } 
const TiledLayer = globalThis.javax.microedition.lcdui.game.TiledLayer;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//not GWT import const RaceTrackInfo = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackInfo;
import { TiledLayerFactory } from '../../../../org/allbinary/media/graphics/geography/map/racetrack/TiledLayerFactory.js';
//not GWT import - same folder const AllBinaryTiledLayer = globalThis.org.allbinary.game.layer.AllBinaryTiledLayer;
import { AllBinaryJ2METiledLayer } from './AllBinaryJ2METiledLayer.js';
//not GWT import - same folder const AllBinaryJ2METiledLayer = globalThis.org.allbinary.game.layer.AllBinaryJ2METiledLayer;
export class AllBinaryTiledLayerFactory extends Object {
    //@Throws(Exception.constructor)
    getInstance(raceTrackInfo, raceTrackData) {
        var allbinaryTiledLayer;
        ;
        var tiledLayer = new TiledLayerFactory().getInstance(raceTrackData);
        ;
        allbinaryTiledLayer = new AllBinaryJ2METiledLayer(raceTrackData.getId(), tiledLayer, raceTrackData.getMapArray(), BasicColorFactory.getInstance().RED.intValue());
        allbinaryTiledLayer.setCells(raceTrackData.getMapArray());
        //if statement needs to be on the same line and ternary does not work the same way.
        return allbinaryTiledLayer;
    }
    //@Throws(Exception.constructor)
    getMiniInstance(raceTrackData) {
        var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        ;
        var tiledLayer = new TiledLayerFactory().getMiniInstance(raceTrackData);
        ;
        var allbinaryTiledLayer = new AllBinaryJ2METiledLayer(smallIntegerSingletonFactory.getAt(raceTrackData.getId().intValue() + 100 + 1), tiledLayer, raceTrackData.getMapArray(), BasicColorFactory.getInstance().RED.intValue());
        ;
        allbinaryTiledLayer.setCells(raceTrackData.getMapArray());
        //if statement needs to be on the same line and ternary does not work the same way.
        return allbinaryTiledLayer;
    }
}
