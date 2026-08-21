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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ABRunnable } from './ABRunnable.js';
export class NullABRunnable extends ABRunnable {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullABRunnable.instance;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    isRunning() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
NullABRunnable.instance = new NullABRunnable();
