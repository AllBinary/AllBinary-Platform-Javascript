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
import { Animation } from '../../../../org/allbinary/animation/Animation.js';
//not GWT import const Animation
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CaptionAnimation extends Animation {
    constructor(animationInterface, overlayAnimationInterface, captionDx, captionDy, dx, dy) {
        super();
        this.animationInterface = animationInterface;
        this.overlayAnimationInterface = overlayAnimationInterface;
        this.captionDx = captionDx;
        this.captionDy = captionDy;
        this.dx = dx;
        this.dy = dy;
    }
    //@Throws(Exception.constructor)
    nextFrame() {
    }
    paintXY(graphics, x, y) {
        this.animationInterface.paintXY(graphics, x + this.captionDx, y + this.captionDy);
        this.overlayAnimationInterface.paintXY(graphics, x + this.captionDx + this.dx, y + this.captionDy + this.dy);
    }
    paintThreedXYZ(graphics, x, y, z) {
        this.animationInterface.paintThreedXYZ(graphics, x + this.captionDx, y + this.captionDy, z);
        this.overlayAnimationInterface.paintThreedXYZ(graphics, x + this.captionDx + this.dx, y + this.captionDy + this.dy, z);
    }
}
