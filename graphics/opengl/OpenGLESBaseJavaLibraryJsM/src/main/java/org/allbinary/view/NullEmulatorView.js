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
import { Object } from '../../../java/lang/Object.js';
//not plain js import { Displayable } from '../../../javax/microedition/lcdui/Displayable.js';
const Displayable = globalThis.javax.microedition.lcdui.Displayable;
//not plain js import { MIDlet } from '../../../javax/microedition/midlet/MIDlet.js';
const MIDlet = globalThis.javax.microedition.midlet.MIDlet;
//not GWT import const EmulatorViewInterface = globalThis.org.allbinary.view.EmulatorViewInterface;
export class NullEmulatorView extends Object {
    setMidlet(midlet) {
    }
    onEmulatorInitComplete(midletActivity = {}) {
    }
    onSetDisplayable(displayable) {
    }
}
NullEmulatorView.NULL_EMULATOR_VIEW = new NullEmulatorView();
