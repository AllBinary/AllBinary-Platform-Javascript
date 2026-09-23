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
//not GWT import const AllBinaryLayerManager
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SequenceAI } from './SequenceAI.js';
//not GWT import - same folder const SequenceAI
export class ComboSequenceAI extends SequenceAI {
    constructor(artificialIntelligenceInterface, ownerLayerInterface, gameInput) {
        super(artificialIntelligenceInterface, ownerLayerInterface, gameInput);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        var artificialIntelligenceInterfaceArray = this.getArtificialIntelligenceInterface();
        ;
        var size = artificialIntelligenceInterfaceArray.length;
        ;
        for (var index = 0; index < size; index++) {
            this.setIndex(index);
            super.processAI(allBinaryLayerManager);
        }
    }
}
