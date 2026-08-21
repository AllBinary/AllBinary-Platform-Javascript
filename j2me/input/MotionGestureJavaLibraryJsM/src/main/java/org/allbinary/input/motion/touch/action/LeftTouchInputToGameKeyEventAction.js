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
import { PlatformInputMappingFactory } from '../../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
import { GameKeyCompleteMotionGestureInputEvent } from '../../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEvent.js';
import { TouchMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LeftTouchInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {
    static getInstance() {
        if (LeftTouchInputToGameKeyEventAction.instance == NullUtil.getInstance().NULL_OBJECT) {
            LeftTouchInputToGameKeyEventAction.instance = new LeftTouchInputToGameKeyEventAction();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return LeftTouchInputToGameKeyEventAction.instance;
    }
    constructor() {
        super("Left Action", TouchMotionGestureFactory.getInstance().LEFT, PlatformInputMappingFactory.getInstance().getPersistentInputMappingInstance().getInputMapping());
        //For kotlin this is before the body of the constructor.
    }
}
LeftTouchInputToGameKeyEventAction.instance = NullUtil.getInstance().NULL_OBJECT;
