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
import { Object } from '../../../../../../java/lang/Object.js';
//not GWT import const MotionGestureConfiguration
import { MotionGestureConfigurationFactory } from '../../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfigurationFactory.js';
//not GWT import const MotionGestureConfigurationFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ResolveCompleteMotionGestureListener } from './ResolveCompleteMotionGestureListener.js';
//not GWT import - same folder const ResolveCompleteMotionGestureListener
import { NullCompleteMotionGestureReceiver } from './NullCompleteMotionGestureReceiver.js';
//not GWT import - same folder const CompleteMotionGestureListenerInterface
export class MotionGestureReceiveInterfaceFactory extends Object {
    static getInstance() {
        var configuration = MotionGestureConfigurationFactory.getInstance();
        ;
        if (!configuration.isExecutingActionsAllowed()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new NullCompleteMotionGestureReceiver();
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new ResolveCompleteMotionGestureListener();
        }
    }
}
