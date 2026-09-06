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
/* Generated Code Do Not Modify */
import { Object } from '../../../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CustomMapGeneratorBase } from './CustomMapGeneratorBase.js';
//not GWT import - same folder const RaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackGeographicMap;
export class CustomMapGeneratorBaseFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CustomMapGeneratorBaseFactory.instance;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    create(raceTrackGeographicMap) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new CustomMapGeneratorBase();
    }
}
CustomMapGeneratorBaseFactory.instance = new CustomMapGeneratorBaseFactory();
