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
import { Thread } from '../../../java/lang/Thread.js';
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { NullRunnable } 
const NullRunnable = globalThis.org.allbinary.thread.NullRunnable;
export class NullThread extends Object {
}
NullThread.NULL_THREAD = new Thread(NullRunnable.getInstance(), StringUtil.getInstance().EMPTY_STRING);
