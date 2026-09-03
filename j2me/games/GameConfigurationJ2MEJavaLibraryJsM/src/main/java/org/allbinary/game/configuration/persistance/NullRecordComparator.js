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
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { RecordComparator, RecordComparatorI } from '../../../../../javax/microedition/rms/RecordComparator.js';
const RecordComparator = globalThis.javax.microedition.rms.RecordComparator;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class NullRecordComparator extends Object {
    compare(rec1, rec2) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
}
NullRecordComparator.NULL_RECORD_COMPARATOR = new NullRecordComparator();
