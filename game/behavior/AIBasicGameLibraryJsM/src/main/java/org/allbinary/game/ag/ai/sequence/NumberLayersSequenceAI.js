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
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SequenceAI } from './SequenceAI.js';
//not GWT import - same folder const SequenceAI = globalThis.org.allbinary.game.ag.ai.sequence.SequenceAI;
export class NumberLayersSequenceAI extends SequenceAI {
    constructor(numberOfEnemiesLeft, artificialIntelligenceInterface, ownerLayerInterface, gameInput) {
        super(artificialIntelligenceInterface, ownerLayerInterface, gameInput);
        //For kotlin this is before the body of the constructor.
        this.numberOfLayersLeft = numberOfEnemiesLeft;
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        if (this.getIndex() == 0) {
            if (allBinaryLayerManager.getSize() < this.numberOfLayersLeft) {
                this.setIndex(1);
            }
        }
        super.processAI(allBinaryLayerManager);
    }
}
