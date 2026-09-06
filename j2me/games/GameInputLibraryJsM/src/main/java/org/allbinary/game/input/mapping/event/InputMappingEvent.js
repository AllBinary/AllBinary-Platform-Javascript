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
import { InputToGameKeyMapping } from '../../../../../../org/allbinary/game/input/mapping/InputToGameKeyMapping.js';
//not GWT import const InputToGameKeyMapping = globalThis.org.allbinary.game.input.mapping.InputToGameKeyMapping;
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class InputMappingEvent extends AllBinaryEventObject {
    constructor(anyType = {}) {
        super(anyType);
        this.inputToGameKeyMapping = InputToGameKeyMapping.getNullInstance();
        //For kotlin this is before the body of the constructor.
    }
    setInputToGameKeyMapping(inputToGameKeyMapping) {
        this.inputToGameKeyMapping = inputToGameKeyMapping;
    }
    getInputToGameKeyMapping() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.inputToGameKeyMapping;
    }
}
