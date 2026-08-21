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
import { CompositeSound } from '../../../../../org/allbinary/media/audio/CompositeSound.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DropWeaponSound extends CompositeSound {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DropWeaponSound.soundInterface;
    }
    constructor() {
        super("resource:/wav/mine.wav");
        //For kotlin this is before the body of the constructor.
    }
}
DropWeaponSound.soundInterface = new DropWeaponSound();
