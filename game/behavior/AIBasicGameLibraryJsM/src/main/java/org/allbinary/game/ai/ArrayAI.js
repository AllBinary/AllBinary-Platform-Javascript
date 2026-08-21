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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicAI } from './BasicAI.js';
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
