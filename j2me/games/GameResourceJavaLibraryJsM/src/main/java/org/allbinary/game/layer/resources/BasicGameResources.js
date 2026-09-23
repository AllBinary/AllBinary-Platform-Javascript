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
import { GameConfigurationCentral } from '../../../../../org/allbinary/game/configuration/GameConfigurationCentral.js';
//not GWT import const GameConfigurationCentral
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameGraphicsResourceUtil } from './GameGraphicsResourceUtil.js';
//not GWT import - same folder const GameGraphicsResourceUtil
export class BasicGameResources extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.RESOURCE = StringUtil.getInstance().EMPTY_STRING;
        this.RESOURCE_DESTROY = StringUtil.getInstance().EMPTY_STRING;
    }
    init(ROOT, SIZE) {
        try {
            var scale = GameConfigurationCentral.getInstance().SCALE.getValue().intValue();
            ;
            if (scale > 1 && scale - 1 < SIZE.length) {
                this.append(ROOT, SIZE[scale - 1]);
            }
            else {
                throw new Exception(new StringMaker().append("Invalid Value: ").appendint(scale).toString());
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.INIT, e);
        }
    }
    //@Throws(Exception.constructor)
    append(ROOT, sizeString) {
        var DESTROY = "_destroy";
        ;
        var string = this.getString();
        ;
        BasicGameResources.stringBuffer.delete(0, BasicGameResources.stringBuffer.length());
        BasicGameResources.stringBuffer.append(ROOT);
        BasicGameResources.stringBuffer.append(string);
        BasicGameResources.stringBuffer.append(sizeString);
        this.RESOURCE = BasicGameResources.stringBuffer.toString();
        BasicGameResources.stringBuffer.delete(0, BasicGameResources.stringBuffer.length());
        BasicGameResources.stringBuffer.append(ROOT);
        BasicGameResources.stringBuffer.append(DESTROY);
        BasicGameResources.stringBuffer.append(string);
        BasicGameResources.stringBuffer.append(sizeString);
        this.RESOURCE_DESTROY = BasicGameResources.stringBuffer.toString();
    }
    //@Throws(Exception.constructor)
    getString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameGraphicsResourceUtil.getInstance().getName();
        ;
    }
}
BasicGameResources.stringBuffer = new StringMaker();
