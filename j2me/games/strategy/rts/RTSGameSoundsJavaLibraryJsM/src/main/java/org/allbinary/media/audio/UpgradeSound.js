/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2002 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *    Created By: Travis Berthelot
*/
/* Generated Code Do Not Modify */
import { CompositeSound } from '../../../../org/allbinary/media/audio/CompositeSound.js';
//not GWT import const Sound
//Current folder imports from return types, extended types, and scope (deduplicated)
export class UpgradeSound extends CompositeSound {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return UpgradeSound.soundInterface;
    }
    constructor() {
        super("resource:/wav/upgrade.wav");
        //For kotlin this is before the body of the constructor.
    }
}
UpgradeSound.soundInterface = new UpgradeSound();
