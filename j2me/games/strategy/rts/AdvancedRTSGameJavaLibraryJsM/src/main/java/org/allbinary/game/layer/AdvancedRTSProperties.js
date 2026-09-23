/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { Object } from '../../../../java/lang/Object.js';
import { NoShakeAnimationListener } from '../../../../org/allbinary/animation/transition/shake/NoShakeAnimationListener.js';
//not GWT import const ShakeAnimationListener
import { ShakeAnimationListenerFactory } from '../../../../org/allbinary/animation/transition/shake/ShakeAnimationListenerFactory.js';
//not GWT import const ShakeAnimationListenerFactory
import { GameConfigurationCentral } from '../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const TickableInterface
import { AllBinaryNoVibration } from '../../../../org/allbinary/media/AllBinaryNoVibration.js';
//not GWT import const AllBinaryNoVibration
import { AllBinaryVibration } from '../../../../org/allbinary/media/AllBinaryVibration.js';
//not GWT import const AllBinaryVibrationME
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WaypointBehaviorBase } from './WaypointBehaviorBase.js';
//not GWT import - same folder const WaypointBehaviorBase
export class AdvancedRTSProperties extends Object {
    static createPropertiesSimulated() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AdvancedRTSProperties(NoShakeAnimationListener.NO_SHAKE_ANIMATION_LISTENER, AllBinaryNoVibration.NO_VIBRATION, 0, new WaypointBehaviorBase());
    }
    static createProperties() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AdvancedRTSProperties(ShakeAnimationListenerFactory.getInstance(), AllBinaryVibration.getInstance(), GameConfigurationCentral.getInstance().VIBRATION.getValue().intValue() * 100, new WaypointBehaviorBase());
    }
    constructor(shakeListener, vibration, duration, waypointBehaviorBase) {
        super();
        this.shakeListener = shakeListener;
        this.vibration = vibration;
        this.duration = duration;
        this.waypointBehaviorBase = waypointBehaviorBase;
    }
}
