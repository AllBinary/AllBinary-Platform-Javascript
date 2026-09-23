/* Generated Code Do Not Modify */
//not GWT import const BasicDecimal
//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
import { ScaleFactorFactory } from '../../../../org/allbinary/logic/math/ScaleFactorFactory.js';
//not GWT import const ScaleFactorFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicConstantVelocityMovement } from './BasicConstantVelocityMovement.js';
//not GWT import - same folder const BasicConstantVelocityMovement
export class PreciseConstantVelocityMovement extends BasicConstantVelocityMovement {
    constructor(basicDecimal, velocityProperties) {
        super(basicDecimal, velocityProperties);
        this.accumulatedX = 0;
        this.accumulatedY = 0;
        this.accumulatedZ = 0;
        this.factorValue = ScaleFactorFactory.getInstance().DEFAULT_SCALE_VALUE;
        //For kotlin this is before the body of the constructor.
    }
    init(speedBasicDecimal, angle, otherAngle) {
    }
    //@Throws(Exception.constructor)
    process(layer) {
        var mathUtil = MathUtil.getInstance();
        ;
        var velocityProperties = this.getVelocityProperties();
        ;
        this.accumulatedX = Math.round((this.accumulatedX + velocityProperties.getVelocityXBasicDecimalP().getUnscaled()));
        this.accumulatedY = Math.round((this.accumulatedY + velocityProperties.getVelocityYBasicDecimalP().getUnscaled()));
        this.accumulatedZ = Math.round((this.accumulatedZ + velocityProperties.getVelocityZBasicDecimalP().getUnscaled()));
        layer.moveDXYZ(this.accumulatedX / this.factorValue, this.accumulatedY / this.factorValue, this.accumulatedZ / this.factorValue);
        if (mathUtil.abs(this.accumulatedX) > this.factorValue) {
            this.accumulatedX = 0;
        }
        if (mathUtil.abs(this.accumulatedY) > this.factorValue) {
            this.accumulatedY = 0;
        }
        if (mathUtil.abs(this.accumulatedZ) > this.factorValue) {
            this.accumulatedZ = 0;
        }
    }
}
