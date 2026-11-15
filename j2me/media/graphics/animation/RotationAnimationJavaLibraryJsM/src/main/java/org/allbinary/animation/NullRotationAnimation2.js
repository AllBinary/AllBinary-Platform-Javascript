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
import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
//not GWT import const AngleFactory
import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
//not GWT import const AngleInfo
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NullRotationAnimation } from './NullRotationAnimation.js';
//sameFolderImports - not GWT import - same folder const NullRotationAnimation
import { IndexedAnimationBehavior } from './IndexedAnimationBehavior.js';
//sameFolderImports - not GWT import - same folder const IndexedAnimationBehavior
export class NullRotationAnimation2 extends NullRotationAnimation {
    constructor() {
        super(AngleInfo.getInstance(AngleFactory.getInstance().QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), new IndexedAnimationBehavior(1, 250));
        //For kotlin this is before the body of the constructor.
    }
    paintXY(graphics, x, y) {
    }
}
