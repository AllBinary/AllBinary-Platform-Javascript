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
//not GWT import const AllBinaryLayerManager
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameInputProcessor extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameInputProcessor.instance;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    processEvent(allbinaryLayerManager, gameKeyEvent) {
    }
    //@Throws(Exception.constructor)
    processReleasedEvent(allbinaryLayerManager, gameKeyEvent) {
    }
    //@Throws(Exception.constructor)
    processAnalog(allbinaryLayerManager, gameKeyEvent, analogValue) {
    }
    //@Throws(Exception.constructor)
    process(allbinaryLayerManager, keyAsInteger) {
    }
    //@Throws(Exception.constructor)
    processReleased(allbinaryLayerManager, keyAsInteger) {
    }
}
GameInputProcessor.instance = new GameInputProcessor();
