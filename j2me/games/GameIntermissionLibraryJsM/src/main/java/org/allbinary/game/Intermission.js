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
import { Object } from '../../../java/lang/Object.js';
import { TimeDelayHelper } from '../../../org/allbinary/time/TimeDelayHelper.js';
import { NullIntermissionEnableListener } from './NullIntermissionEnableListener.js';
export class Intermission extends Object {
    constructor() {
        super();
        this.enabled = false;
        this.timeElapsedHelper = new TimeDelayHelper(0);
        this.intermissionEnableListener = NullIntermissionEnableListener.getInstance();
    }
    setListener(enableListener) {
        this.intermissionEnableListener = enableListener;
    }
    getTimeDelayHelper() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.timeElapsedHelper;
    }
    setEnabled(enabled) {
        this.enabled = enabled;
        if (this.isEnabled()) {
            this.getTimeDelayHelper().setStartTimeTNT();
        }
        this.intermissionEnableListener.notifyIntermission(enabled);
    }
    isEnabled() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.enabled;
    }
}
