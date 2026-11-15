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
//not GWT import const Graphics
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NullIndexedAnimation } from './NullIndexedAnimation.js';
//sameFolderImports - not GWT import - same folder const NullIndexedAnimation
import { IndexedAnimationBehavior } from './IndexedAnimationBehavior.js';
//sameFolderImports - not GWT import - same folder const IndexedAnimationBehavior
export class NullIndexedAnimationInner extends NullIndexedAnimation {
    constructor() {
        super(new IndexedAnimationBehavior(1, 250));
        //For kotlin this is before the body of the constructor.
    }
    paintXY(graphics, x, y) {
    }
}
