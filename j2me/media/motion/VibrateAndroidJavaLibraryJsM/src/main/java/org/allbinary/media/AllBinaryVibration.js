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
import { Context } from '../../../android/content/Context.js';
//not GWT import const Vibrator = globalThis.android.os.Vibrator;
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
import { GameConfigurationCentral } from '../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const GameConfigurationCentral = globalThis.org.allbinary.game.configuration.GameConfigurationCentral;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryVibrationME } from './AllBinaryVibrationME.js';
//not GWT import - same folder const AllBinaryVibrationME = globalThis.org.allbinary.media.AllBinaryVibrationME;
import { AllBinaryNoVibration } from './AllBinaryNoVibration.js';
//not GWT import - same folder const AllBinaryNoVibration = globalThis.org.allbinary.media.AllBinaryNoVibration;
export class AllBinaryVibration extends AllBinaryVibrationME {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AllBinaryVibration.VIBRATION;
    }
    static init() {
        if (GameConfigurationCentral.getInstance().VIBRATION.getValue().intValue() == 0) {
            AllBinaryVibration.VIBRATION = AllBinaryNoVibration.NO_VIBRATION;
        }
        else {
            AllBinaryVibration.VIBRATION = new AllBinaryVibration();
        }
    }
    constructor() {
        super();
        this.vibrator = ResourceUtil.getInstance().getContext().getSystemService(Context.VIBRATOR_SERVICE);
    }
    vibrate(duration, type, volume) {
        this.vibrator.vibrate(duration);
    }
}
AllBinaryVibration.VIBRATION = AllBinaryNoVibration.NO_VIBRATION;
