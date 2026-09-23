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
import { Object } from '../../../../java/lang/Object.js';
import { Exception } from '../../../../java/lang/Exception.js';
//not GWT import const J2MEUtil
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class HighScoreCommandsBaseFactory extends Object {
    constructor(HIGH_SCORE_COMMANDS) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.HIGH_SCORE_COMMANDS = HIGH_SCORE_COMMANDS;
    }
    isHighScoreCommand(command) {
        for (var index = this.HIGH_SCORE_COMMANDS.length - 1; index >= 0; index--) {
            if (command == this.HIGH_SCORE_COMMANDS[index]) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    getIndex(command) {
        for (var index = this.HIGH_SCORE_COMMANDS.length - 1; index >= 0; index--) {
            if (command == this.HIGH_SCORE_COMMANDS[index]) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return index;
            }
        }
        throw new Exception("No Such Command");
    }
}
