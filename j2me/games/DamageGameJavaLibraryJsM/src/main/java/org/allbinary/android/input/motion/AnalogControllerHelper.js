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
/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AnalogControllerConfigurationFactory } from './AnalogControllerConfigurationFactory.js';
//not GWT import const AnalogControllerConfigurationFactory = globalThis.org.allbinary.android.input.motion.AnalogControllerConfigurationFactory;
export class AnalogControllerHelper extends Object {
    constructor(reduceTimeFactor) {
        super();
        this.SCALE_VALUE = AnalogControllerConfigurationFactory.getInstance().SCALE_VALUE;
        this.rightTimeElapsedHelper = new TimeDelayHelper(0);
        this.leftTimeElapsedHelper = new TimeDelayHelper(0);
        this.downTimeElapsedHelper = new TimeDelayHelper(0);
        this.upTimeElapsedHelper = new TimeDelayHelper(0);
        this.reduceTimeFactor = reduceTimeFactor;
    }
    //@Throws(Exception.constructor)
    right(collidableDestroyableDamageableLayer, xAnalogValue) {
        this.rightTimeElapsedHelper.delay = ((this.SCALE_VALUE - xAnalogValue) >> this.reduceTimeFactor);
        if (this.rightTimeElapsedHelper.isTimeTNT()) {
            collidableDestroyableDamageableLayer.right();
        }
    }
    //@Throws(Exception.constructor)
    left(collidableDestroyableDamageableLayer, xAnalogValue) {
        this.leftTimeElapsedHelper.delay = ((this.SCALE_VALUE + xAnalogValue) >> this.reduceTimeFactor);
        if (this.leftTimeElapsedHelper.isTimeTNT()) {
            collidableDestroyableDamageableLayer.left();
        }
    }
    //@Throws(Exception.constructor)
    up(collidableDestroyableDamageableLayer, xAnalogValue) {
        this.upTimeElapsedHelper.delay = ((this.SCALE_VALUE - xAnalogValue) >> this.reduceTimeFactor);
        if (this.upTimeElapsedHelper.isTimeTNT()) {
            collidableDestroyableDamageableLayer.up();
        }
    }
    //@Throws(Exception.constructor)
    down(collidableDestroyableDamageableLayer, xAnalogValue) {
        this.downTimeElapsedHelper.delay = ((this.SCALE_VALUE + xAnalogValue) >> this.reduceTimeFactor);
        if (this.downTimeElapsedHelper.isTimeTNT()) {
            collidableDestroyableDamageableLayer.down();
        }
    }
}
