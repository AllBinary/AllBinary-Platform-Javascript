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
//sameFolderImports - not GWT import - same folder const TouchButtonInput
export class ReleaseHelper extends Object {
    constructor(touchButtonRecognizer) {
        super();
        this.touchButtonRecognizer = touchButtonRecognizer;
    }
    //@Throws(Exception.constructor)
    release(touchButtonInput, deviceId) {
        let nextTouchButtonInput;
        ;
        let gameKeyEvent;
        ;
        for (let index = this.touchButtonRecognizer.currentlyPressedTouchButtonSingleton.size() - 1; index >= 0; index--) {
            nextTouchButtonInput = this.touchButtonRecognizer.currentlyPressedTouchButtonSingleton.get(index);
            gameKeyEvent = nextTouchButtonInput.getGameKeyEvent();
            this.touchButtonRecognizer.upGameKeyEventHandler.fireEvent(gameKeyEvent);
            this.touchButtonRecognizer.upGameKeyEventHandler.getInstanceForDevice(deviceId).fireEvent(gameKeyEvent);
            this.touchButtonRecognizer.currentlyPressedTouchButtonSingleton.removeAt(index);
        }
    }
}
