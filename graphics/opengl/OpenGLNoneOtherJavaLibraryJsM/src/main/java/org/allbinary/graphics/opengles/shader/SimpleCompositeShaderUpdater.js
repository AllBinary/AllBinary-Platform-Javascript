/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { CompositeShaderUpdater } from './CompositeShaderUpdater.js';
export class SimpleCompositeShaderUpdater extends CompositeShaderUpdater {
    constructor(uniformBlockArray, uniformArray, attributeArray, attributeHandleArray) {
        super(uniformBlockArray, uniformArray, attributeArray, attributeHandleArray);
        //For kotlin this is before the body of the constructor.
    }
}
