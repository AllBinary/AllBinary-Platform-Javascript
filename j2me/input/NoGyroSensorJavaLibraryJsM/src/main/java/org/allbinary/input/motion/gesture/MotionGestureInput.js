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
import { Input } from '../../../../../org/allbinary/game/input/Input.js';
//not GWT import const Input
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MotionGestureInput extends Input {
    constructor(id, name) {
        super(id, name);
        //For kotlin this is before the body of the constructor.
        var inputFactory = InputFactory.getInstance();
        ;
        inputFactory.add(this.getId(), this);
    }
}
