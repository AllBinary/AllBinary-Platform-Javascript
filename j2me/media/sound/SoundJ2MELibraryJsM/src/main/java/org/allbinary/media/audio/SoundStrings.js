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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SoundStrings extends Object {
    constructor() {
        super(...arguments);
        this.STOP_ALL = "stopAll";
        this.CLOSE_ALL = "closeAll";
        this.SOUND = " Sound: ";
        this.INIT_SOUND = "Initializing Sound: ";
        this.STOPPING_SOUND = "Stopping Sound: ";
        this.CLOSING_SOUND = "Closing Sound: ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SoundStrings.instance;
    }
}
SoundStrings.instance = new SoundStrings();
