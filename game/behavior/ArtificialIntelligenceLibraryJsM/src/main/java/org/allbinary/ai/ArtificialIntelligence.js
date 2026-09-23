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
import { Object } from '../../../java/lang/Object.js';
//not GWT import - same folder const ArtificialIntelligenceInterface
export class ArtificialIntelligence extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ArtificialIntelligence.instance;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    processAI(layerManager) {
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 1;
    }
}
ArtificialIntelligence.AI_ID = 2;
ArtificialIntelligence.instance = new ArtificialIntelligence();
