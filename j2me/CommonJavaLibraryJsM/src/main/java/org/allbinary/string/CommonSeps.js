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
import { Object } from '../../../java/lang/Object.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CommonSeps extends Object {
    constructor() {
        super(...arguments);
        this.NEW_LINE = "\n";
        this.SEMICOLON = ";";
        this.EQUALS = "=";
        this.SPACE = " ";
        this.COMMA = ",";
        this.COLON = ":";
        this.PERIOD = ".";
        this.UNDERSCORE = "_";
        this.COLON_SEP = new StringMaker().append(this.COLON).append(this.SPACE).toString();
        this.COMMA_SEP = new StringMaker().append(this.COMMA).append(this.SPACE).toString();
        this.PARENTHESIS_OPEN = "(";
        this.PARENTHESIS_CLOSE = ")";
        this.BRACE_OPEN = "{";
        this.BRACE_CLOSE = "}";
        this.BRACKET_OPEN = "[";
        this.BRACKET_CLOSE = "]";
        this.DASH = "-";
        this.PERCENT = "%";
        this.AMPERSAND = "&";
        this.FORWARD_SLASH = "/";
        this.BACK_SLASH = "\\";
        this.QUESTION = "?";
        this.QUOTE = "\"";
        this.QUOTE_END = "\",";
        this.COMMENT = "//";
        this.INDENT = "    ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CommonSeps.instance;
    }
}
CommonSeps.instance = new CommonSeps();
