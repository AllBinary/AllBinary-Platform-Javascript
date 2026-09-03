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
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { GameFeatureImageCacheFactory } from '../../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
//not GWT import const GameFeatureImageCacheFactory = globalThis.org.allbinary.image.GameFeatureImageCacheFactory;
import { LockedResources } from '../../../../../org/allbinary/logic/system/security/licensing/LockedResources.js';
//not GWT import const LockedResources = globalThis.org.allbinary.logic.system.security.licensing.LockedResources;
import { LockedUtil } from '../../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js';
//not GWT import const LockedUtil = globalThis.org.allbinary.logic.system.security.licensing.LockedUtil;
import { LockablePaintable } from '../../../../../org/allbinary/graphics/form/LockablePaintable.js';
//not GWT import const ScrollCurrentSelectionForm = globalThis.org.allbinary.graphics.form.ScrollCurrentSelectionForm;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PreGameLockablePaintable extends LockablePaintable {
    constructor(paintableForm, lockedIndex) {
        super(lockedIndex);
        //For kotlin this is before the body of the constructor.
        this.paintableForm = paintableForm;
        this.halfWidth = GameFeatureImageCacheFactory.getInstance().getWithKey(LockedResources.getInstance().LOCKED_DEMO_GAME_FEATURE_RESOURCE).getWidth() / 2;
    }
    paint(graphics, currentIndex, x, y) {
        if (LockedUtil.getInstance().isLocked() && this.getPaintableForm().getSelectedIndex() >= this.getLockedIndex()) {
            this.getAnimation().paintXY(graphics, this.getPaintableForm().getDx() - this.halfWidth, this.getPaintableForm().getDy() + 34);
        }
    }
    getPaintableForm() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.paintableForm;
    }
}
