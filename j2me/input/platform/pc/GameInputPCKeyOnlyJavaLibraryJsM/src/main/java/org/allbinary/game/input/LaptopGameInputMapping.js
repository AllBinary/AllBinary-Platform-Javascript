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
//not GWT import const InputToGameKeyMapping = globalThis.org.allbinary.game.input.mapping.InputToGameKeyMapping;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PCGameInputMapping } from './PCGameInputMapping.js';
//not GWT import - same folder const PCGameInputMapping = globalThis.org.allbinary.game.input.PCGameInputMapping;
import { LaptopDefaultGameInputMapping } from './LaptopDefaultGameInputMapping.js';
//not GWT import - same folder const LaptopDefaultGameInputMapping = globalThis.org.allbinary.game.input.LaptopDefaultGameInputMapping;
export class LaptopGameInputMapping extends PCGameInputMapping {
    getDefault() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new LaptopDefaultGameInputMapping().getInputMapping();
        ;
    }
}
