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
import { OrientationMotionGestureFactory } from '../../../../../../org/allbinary/input/gyro/OrientationMotionGestureFactory.js';
import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DownOrientationInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {
    static getInstance() {
        if (DownOrientationInputToGameKeyEventAction.instance == NullUtil.getInstance().NULL_OBJECT) {
            DownOrientationInputToGameKeyEventAction.instance = new DownOrientationInputToGameKeyEventAction();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return DownOrientationInputToGameKeyEventAction.instance;
    }
    constructor() {
        super("Down Action", OrientationMotionGestureFactory.getInstance().DOWN, PlatformInputMappingFactory.getInstance().getPersistentInputMappingInstance().getInputMapping());
        //For kotlin this is before the body of the constructor.
    }
}
DownOrientationInputToGameKeyEventAction.instance = NullUtil.getInstance().NULL_OBJECT;
