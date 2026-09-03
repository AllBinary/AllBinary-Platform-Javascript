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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not GWT import const VisitorInterface = globalThis.org.allbinary.logic.util.visitor.VisitorInterface;
export class Visitor extends Object {
    constructor() {
        super(...arguments);
        this.nullUtil = NullUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return Visitor.instance;
    }
    visit(anyType = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.nullUtil.NULL_OBJECT;
    }
}
Visitor.instance = new Visitor();
