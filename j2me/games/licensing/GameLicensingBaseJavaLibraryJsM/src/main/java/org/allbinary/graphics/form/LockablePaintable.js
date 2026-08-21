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
import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from '../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js';
import { LockedResources } from '../../../../org/allbinary/logic/system/security/licensing/LockedResources.js';
import { LockedUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ItemPaintable } from './ItemPaintable.js';
export class LockablePaintable extends ItemPaintable {
    constructor(lockedIndex) {
        super();
        this.animation = FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance().get(LockedResources.getInstance().LOCKED_DEMO_GAME_FEATURE_RESOURCE).getInstance(0);
        this.lockedIndex = lockedIndex;
    }
    paint(graphics, currentIndex, x, y) {
        if (LockedUtil.getInstance().isLocked() && currentIndex >= this.getLockedIndex()) {
            this.getAnimation().paintXY(graphics, x, y);
        }
    }
    getLockedIndex() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lockedIndex;
    }
    getAnimation() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animation;
    }
}
