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
//not GWT import const GameKeyEvent
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ReleaseHelper } from './ReleaseHelper.js';
//sameFolderImports - not GWT import - same folder const TouchButtonRecognizer
import { CancelTouchButtonInputFactory } from './CancelTouchButtonInputFactory.js';
//sameFolderImports - not GWT import - same folder const TouchButtonInput
export class MultitouchReleaseHelper extends ReleaseHelper {
    constructor(touchButtonRecognizer) {
        super(touchButtonRecognizer);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    release(touchButtonInput, deviceId) {
        let cancelTouchButtonInput = CancelTouchButtonInputFactory.getInstance().getCancel(touchButtonInput);
        ;
        let nextTouchButtonInput;
        ;
        let gameKeyEvent;
        ;
        for (let index = this.touchButtonRecognizer.currentlyPressedTouchButtonSingleton.size() - 1; index >= 0; index--) {
            nextTouchButtonInput = this.touchButtonRecognizer.currentlyPressedTouchButtonSingleton.get(index);
            if (cancelTouchButtonInput == nextTouchButtonInput) {
                gameKeyEvent = nextTouchButtonInput.getGameKeyEvent();
                this.touchButtonRecognizer.upGameKeyEventHandler.fireEvent(gameKeyEvent);
                this.touchButtonRecognizer.upGameKeyEventHandler.getInstanceForDevice(deviceId).fireEvent(gameKeyEvent);
                this.touchButtonRecognizer.currentlyPressedTouchButtonSingleton.removeAt(index);
            }
        }
    }
}
