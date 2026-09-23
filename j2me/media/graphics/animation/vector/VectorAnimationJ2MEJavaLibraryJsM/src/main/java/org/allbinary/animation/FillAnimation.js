/* Generated Code Do Not Modify */
//not GWT import const BasicColor
//Current folder imports from return types, extended types, and scope (deduplicated)
import { IndexedAnimation } from './IndexedAnimation.js';
//not GWT import - same folder const AnimationBehavior
export class FillAnimation extends IndexedAnimation {
    constructor(pixelBuffer, width, height, animationBehavior) {
        super(animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.width = 100;
        this.height = 100;
        this.pixelBuffer = pixelBuffer;
    }
    setBasicColorP(basicColor) {
        var changed = false;
        ;
        if (this.getBasicColorP() ==
            null
            || this.getBasicColorP().intValue() != basicColor.intValue()) {
            changed = true;
        }
        super.setBasicColorP(basicColor);
        if (changed) {
            this.updateModifiers();
        }
    }
    changeBasicColor(basicColor) {
        var changed = false;
        ;
        if (this.getChangeBasicColor() ==
            null
            || this.getChangeBasicColor().intValue() != basicColor.intValue()) {
            changed = true;
        }
        super.changeBasicColor(basicColor);
        if (changed) {
            this.updateModifiers();
        }
    }
    setAlpha(alpha) {
        var changed = false;
        ;
        if (this.alphaP != alpha) {
            changed = true;
        }
        super.setAlpha(alpha);
        if (changed) {
            this.updateModifiers();
        }
    }
    setScale(scaleX, scaleY) {
    }
    setMaxScale(maxScaleX, maxScaleY) {
    }
    updateModifiers() {
    }
    paint(g) {
        g.drawRGB(pixelBuffer, 0, width, 0, 0, width, height, true);
    }
}
