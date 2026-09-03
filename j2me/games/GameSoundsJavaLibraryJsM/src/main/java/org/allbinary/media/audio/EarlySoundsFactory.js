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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseSoundsFactory } from './BaseSoundsFactory.js';
//not GWT import const Sound = globalThis.org.allbinary.media.audio.Sound;
import { SelectSound } from './SelectSound.js';
//not GWT import const SelectSound = globalThis.org.allbinary.media.audio.SelectSound;
import { ErrorSound } from './ErrorSound.js';
//not GWT import const ErrorSound = globalThis.org.allbinary.media.audio.ErrorSound;
export class EarlySoundsFactory extends BaseSoundsFactory {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return EarlySoundsFactory.instance;
    }
    //@Throws(Exception.constructor)
    getSoundInterfaceArray() {
        var soundInterfaceArray = new Array(2);
        ;
        var index = 0;
        ;
        soundInterfaceArray[index++] = SelectSound.getInstance();
        soundInterfaceArray[index++] = ErrorSound.getInstance();
        //if statement needs to be on the same line and ternary does not work the same way.
        return soundInterfaceArray;
    }
}
EarlySoundsFactory.instance = new EarlySoundsFactory();
