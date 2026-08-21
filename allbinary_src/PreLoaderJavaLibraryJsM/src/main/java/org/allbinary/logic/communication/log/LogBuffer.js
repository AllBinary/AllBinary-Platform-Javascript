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
import { Object } from '../../../../../java/lang/Object.js';
import { Vector } from '../../../../../java/util/Vector.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LogUtil } from './LogUtil.js';
export class LogBuffer extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.logEntryVector = new Vector();
    }
    add(log) {
        this.logEntryVector.add(log);
    }
    logAll() {
        var size = this.logEntryVector.length;
        ;
        for (var index = 0; index < size; index++) {
            var log = this.logEntryVector.get(index);
            ;
            this.logUtil.putL(log);
        }
    }
}
