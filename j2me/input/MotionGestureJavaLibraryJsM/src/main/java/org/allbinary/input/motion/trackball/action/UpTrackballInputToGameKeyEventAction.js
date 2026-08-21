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
import { TrackballMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TrackballMotionGestureFactory.js';
import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class UpTrackballInputToGameKeyEventAction extends GameKeyCompleteMotionGestureInputEvent {
    static getInstance() {
        if (UpTrackballInputToGameKeyEventAction.instance == NullUtil.getInstance().NULL_OBJECT) {
            UpTrackballInputToGameKeyEventAction.instance = new UpTrackballInputToGameKeyEventAction();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return UpTrackballInputToGameKeyEventAction.instance;
    }
    constructor() {
        super("Up Action", TrackballMotionGestureFactory.getInstance().UP, PlatformInputMappingFactory.getInstance().getPersistentInputMappingInstance().getInputMapping());
        //For kotlin this is before the body of the constructor.
    }
}
UpTrackballInputToGameKeyEventAction.instance = NullUtil.getInstance().NULL_OBJECT;
