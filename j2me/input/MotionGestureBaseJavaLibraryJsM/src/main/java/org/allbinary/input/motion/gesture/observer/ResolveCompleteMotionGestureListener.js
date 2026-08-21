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
import { CompleteMotionGestureInputEventHandler } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventHandler.js';
import { GameKeyFromMotionGestureEventListener } from '../../../../../../org/allbinary/game/input/motion/action/GameKeyFromMotionGestureEventListener.js';
import { MotionGestureConfigurationFactory } from '../../../../../../org/allbinary/input/motion/gesture/configuration/MotionGestureConfigurationFactory.js';
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
export class ResolveCompleteMotionGestureListener extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        var commonStrings = CommonStrings.getInstance();
        ;
        this.logUtil.putF("MotionGesture to CompleteMotionGesture Reciever", this, commonStrings.CONSTRUCTOR);
        CompleteMotionGestureInputEventHandler.getInstance().addListener(new GameKeyFromMotionGestureEventListener());
    }
    //@Throws(Exception.constructor)
    onMotionGestureCompleted(list) {
        var configuration = MotionGestureConfigurationFactory.getInstance();
        ;
        var commandActionsList = configuration.getAssociateCommandActionsList();
        ;
        var size = commandActionsList.size();
        ;
        for (var index = size - 1; index >= 0; index--) {
            var association = commandActionsList.objectArray[index];
            ;
            if (association.isMotionGestureArrayEquals(list) == true) {
                var completeMotionGestureInputEvent = association.getCommandAction();
                ;
                CompleteMotionGestureInputEventHandler.getInstance().fireEvent(completeMotionGestureInputEvent);
                break;
            }
        }
    }
}
