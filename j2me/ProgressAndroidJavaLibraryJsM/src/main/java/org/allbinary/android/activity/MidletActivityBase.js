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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
import { Activity } from '../../../../android/app/Activity.js';
//not GWT import - same folder const KeyInputViewCompositeInterface = globalThis.org.allbinary.android.activity.KeyInputViewCompositeInterface;
export class MidletActivityBase extends Activity {
    onGameFeatureChange(gameFeatureEvent) {
    }
    onEvent(eventObject) {
    }
    onGameInitialized(gameInitializedEvent) {
    }
    //@Throws(Exception.constructor)
    onSetProgress(value, text) {
    }
    //@Throws(Exception.constructor)
    onDismissProgress(animationSequence) {
    }
    //@Throws(Exception.constructor)
    onShowProgress(indeterminate, animationSequence) {
    }
    getRootView() {
        throw new RuntimeException();
    }
    getView() {
        throw new RuntimeException();
    }
    setKeyInputView(keyInputView) {
    }
    onGenericMotionEvent(event) {
        throw new RuntimeException();
    }
}
