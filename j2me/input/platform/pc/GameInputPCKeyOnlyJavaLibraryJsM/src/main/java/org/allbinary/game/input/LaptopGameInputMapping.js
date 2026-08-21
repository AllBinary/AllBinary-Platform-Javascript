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
import { PCGameInputMapping } from './PCGameInputMapping.js';
import { LaptopDefaultGameInputMapping } from './LaptopDefaultGameInputMapping.js';
export class LaptopGameInputMapping extends PCGameInputMapping {
    getDefault() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new LaptopDefaultGameInputMapping().getInputMapping();
        ;
    }
}
