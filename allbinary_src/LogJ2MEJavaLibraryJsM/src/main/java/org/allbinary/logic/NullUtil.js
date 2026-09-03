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
import { Hashtable } from '../../../java/util/Hashtable.js';
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
import { Vector } from '../../../java/util/Vector.js';
//not GWT import const Vector = globalThis.java.util.Vector;
//Current folder imports from return types, extended types, and scope (deduplicated)
//ActualPlatform
/*actual*/ export class NullUtil extends Object {
    constructor() {
        super(...arguments);
        /*actual*/ this.NULL_OBJECT = {};
        /*actual*/ this.NULL_CLASS = this.NULL_OBJECT.constructor;
        /*actual*/ this.NULL_OBJECT_ARRAY = [];
        /*actual*/ this.NULL_CHAR_ARRAY = new Array(0);
        /*actual*/ this.NULL_BYTE_ARRAY = [];
        /*actual*/ this.NULL_SHORT_ARRAY_ARRAY = new Array(0).fill(null).map(() => new Array(0).fill(0));
        /*actual*/ this.NULL_INT_ARRAY = [];
        /*actual*/ this.NULL_INT_ARRAY_ARRAY = new Array(0).fill(null).map(() => new Array(0).fill(0));
        /*actual*/ this.NULL_INT_ARRAY_ARRAY_ARRAY = Array.from({ length: 0 }, () => Array.from({ length: 0 }, () => new Array(0).fill(0)));
        /*actual*/ this.NULL_FLOAT_ARRAY = [];
        /*actual*/ this.EMPTY_VECTOR = new Vector();
        /*actual*/ this.NULL_TABLE = new Hashtable();
    }
    /*actual*/ static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.instance;
    }
}
NullUtil.instance = new NullUtil();
