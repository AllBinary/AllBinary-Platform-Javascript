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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { BooleanFactory } from '../../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;
import { Visitor } from '../../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TextItemVisitor extends Visitor {
    constructor() {
        super();
    }
    visit(anyType = {}) {
        var value = anyType;
        ;
        if (value.length < 2) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return BooleanFactory.getInstance().TRUE;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return BooleanFactory.getInstance().FALSE;
        }
    }
}
