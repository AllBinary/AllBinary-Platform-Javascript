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
import { Exception } from '../../../../../java/lang/Exception.js';
import { ErrorData } from '../../../../../org/allbinary/business/error/ErrorData.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ModDomHelper } from './ModDomHelper.js';
//not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;
export class BasicErrorNodeUtil extends Object {
    //@Throws(Exception.constructor)
    static get(document, errorText) {
        try {
            var node = document.createElement(ErrorData.getInstance().NAME);
            ;
            node.appendChild(ModDomHelper.createNameValueNodes(document, ErrorData.getInstance().TEXT, errorText));
            //if statement needs to be on the same line and ternary does not work the same way.
            return node;
            //: 
        }
        catch (e) {
            throw new Exception("Error Node Creation Failure");
        }
    }
    constructor() {
        super();
    }
}
