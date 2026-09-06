/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2026 AllBinary
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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CommonDataFileStrings extends Object {
    constructor() {
        super(...arguments);
        this.XML = "xml";
        this._XML = ".xml";
        this.JSON = "json";
        this._JSON = ".json";
        this.XSL = "xsl";
        this._XSL = ".xsl";
        this.JAVA = "java";
        this._JAVA = ".java";
        this.KT = "kt";
        this._KT = ".kt";
        this.TS = "ts";
        this._TS = ".ts";
        this.JS = "js";
        this._JS = ".js";
        this.CPP = "cpp";
        this._CPP = ".cpp";
        this.H = "h";
        this._H = ".h";
        this.UNCRYPTED_EXTENSION = this.XML;
        this.ENCRYPTED_EXTENSION = "abd";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return instance;
    }
}
CommonDataFileStrings.instance = new CommonDataFileStrings();
