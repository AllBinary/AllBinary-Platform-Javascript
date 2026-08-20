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
import { Object } from '../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CommonStateStrings extends Object {
    constructor() {
        super(...arguments);
        this.CONTEXT = "Context: ";
        this.FINISH = "finish";
        this.CREATE = "onCreate";
        this.START = "onStart";
        this.RESTART = "onRestart";
        this.RESUME = "onResume";
        this.PAUSE = "onPause";
        this.STOP = "onStop";
        this.DESTROY = "onDestroy";
        this.BIND = "onBind";
        this.ON_SAVE_INSTANCE_STATE = "onSaveInstanceState";
        this.ON_START_COMMAND = "onStartCommand";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CommonStateStrings.instance;
    }
}
CommonStateStrings.instance = new CommonStateStrings();
