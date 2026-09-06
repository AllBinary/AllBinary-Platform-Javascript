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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CompositeSound } from './CompositeSound.js';
//not GWT import - same folder const Sound = globalThis.org.allbinary.media.audio.Sound;
//Use 8hz16bitmono for most J2ME
export class SelectSound extends CompositeSound {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SelectSound.soundInterface;
    }
    constructor() {
        super("resource:/wav/select.wav");
        //For kotlin this is before the body of the constructor.
    }
}
SelectSound.soundInterface = new SelectSound();
