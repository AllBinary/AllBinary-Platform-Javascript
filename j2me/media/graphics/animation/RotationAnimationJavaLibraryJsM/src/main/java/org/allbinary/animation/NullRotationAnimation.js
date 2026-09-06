/* Generated Code Do Not Modify */
//not plain js import { AngleFactory } 
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RotationAnimation } from './RotationAnimation.js';
//not GWT import - same folder const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
export class NullRotationAnimation extends RotationAnimation {
    static createTotalAngle(angleInfo, totalAngle, animationBehavior) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new NullRotationAnimation(angleInfo, CircularIndexUtil.createInstance(totalAngle / angleInfo.getAngleIncrementInfo().getAngleIncrement()), animationBehavior);
    }
    static createQuarter(animationBehavior) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new NullRotationAnimation(AngleInfo.getInstance(AngleFactory.getInstance().QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), animationBehavior);
    }
    constructor(angleInfo, circularIndexUtil, animationBehavior) {
        super(angleInfo, circularIndexUtil, animationBehavior);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    getAnimationSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
}
