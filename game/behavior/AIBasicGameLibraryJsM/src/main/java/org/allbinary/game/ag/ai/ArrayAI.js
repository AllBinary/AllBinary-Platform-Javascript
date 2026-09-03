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
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const BasicAI = globalThis.org.allbinary.game.ai.BasicAI;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ArrayAI extends BasicAI {
    constructor(artificialIntelligenceInterface, ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        //For kotlin this is before the body of the constructor.
        this.artificialIntelligenceInterfaceArray = artificialIntelligenceInterface;
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        var size = this.artificialIntelligenceInterfaceArray.length;
        ;
        for (var index = 0; index < size; index++) {
            this.artificialIntelligenceInterfaceArray[index].processAI(allBinaryLayerManager);
        }
    }
    getArtificialIntelligenceInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.artificialIntelligenceInterfaceArray;
    }
}
