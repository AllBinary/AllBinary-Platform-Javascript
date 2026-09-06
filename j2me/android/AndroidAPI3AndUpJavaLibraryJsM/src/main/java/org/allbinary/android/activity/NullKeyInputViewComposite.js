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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import - same folder const KeyInputViewCompositeInterface = globalThis.org.allbinary.android.activity.KeyInputViewCompositeInterface;
export class NullKeyInputViewComposite extends Object {
    setKeyInputView(keyInputView) {
    }
    getRootView() {
        throw new RuntimeException();
    }
    getView() {
        throw new RuntimeException();
    }
    runOnUiThread(action) {
    }
}
NullKeyInputViewComposite.NULL_KEY_INPUT_VIEW_COMPOSITE = new NullKeyInputViewComposite();
