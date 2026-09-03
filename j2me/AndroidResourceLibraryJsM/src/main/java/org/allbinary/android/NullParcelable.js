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
import { Object } from '../../../java/lang/Object.js';
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
//not GWT import const Parcel = globalThis.android.os.Parcel;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class NullParcelable extends Object {
    describeContents() {
        throw new RuntimeException();
    }
    writeToParcel(dest, flags) {
    }
}
NullParcelable.NULL_PARCELABLE = new NullParcelable();
