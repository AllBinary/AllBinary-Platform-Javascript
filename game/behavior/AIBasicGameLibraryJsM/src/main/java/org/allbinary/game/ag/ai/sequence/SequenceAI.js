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
import { ArtificialIntelligence } from '../../../../../../org/allbinary/ai/ArtificialIntelligence.js';
//not GWT import const ArtificialIntelligenceTransitionInterface = globalThis.org.allbinary.ai.ArtificialIntelligenceTransitionInterface;
import { ArrayAI } from '../../../../../../org/allbinary/game/ag/ai/ArrayAI.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SequenceAI extends ArrayAI {
    constructor(artificialIntelligenceInterfaceArray, ownerLayerInterface, gameInput) {
        super(artificialIntelligenceInterfaceArray, ownerLayerInterface, gameInput);
        this.index = 0;
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        this.getArtificialIntelligenceInterface()[this.index].processAI(allBinaryLayerManager);
    }
    next() {
        this.index++;
        var artificialIntelligenceInterface = this.getSelectedArtificialIntelligenceInterface();
        ;
        if (artificialIntelligenceInterface.getId() == ArtificialIntelligence.AI_ID) {
            var artificialIntelligenceTransitionInterface = artificialIntelligenceInterface;
            ;
            artificialIntelligenceTransitionInterface.transition();
        }
    }
    getIndex() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.index;
    }
    setIndex(index) {
        this.index = index;
    }
    getSelectedArtificialIntelligenceInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getArtificialIntelligenceInterface()[this.index];
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SequenceAI.SEQUENCE_AI;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(super.toString());
        stringBuffer.append(" Selected AI: ");
        stringBuffer.append(StringUtil.getInstance().toString(this.getSelectedArtificialIntelligenceInterface()));
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
SequenceAI.SEQUENCE_AI = "Sequence AI";
