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
import { Exception } from '../../../../java/lang/Exception.js';
import { ArtificialIntelligence } from '../../../../org/allbinary/ai/ArtificialIntelligence.js';
//not GWT import const ArtificialIntelligence
import { CanvasUtil } from '../../../../org/allbinary/game/displayable/canvas/CanvasUtil.js';
//not GWT import const GameKeyEventSourceInterface
import { GameKeyEventFactory } from '../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
//not GWT import const AllBinaryLayerManager
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicAI extends ArtificialIntelligence {
    constructor(ownerLayerInterface, gameInput) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
        this.lastKey = -1;
        this.ownerLayerInterface = ownerLayerInterface;
        this.gameInput = gameInput;
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    processKeyAI(key) {
        if (key != -1) {
            this.gameInput.add(this.gameKeyEventFactory.getInstanceForKey(this, key));
        }
    }
    setLastKey(lastKey) {
        this.lastKey = lastKey;
    }
    getLastKey() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lastKey;
    }
    getOwnerLayerInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ownerLayerInterface;
    }
    getGameInput() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameInput;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.constructor.name.toString();
        ;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(CommonSeps.getInstance().NEW_LINE);
        stringBuffer.append(this.getName());
        stringBuffer.append(" LastKey: ");
        stringBuffer.append(CanvasUtil.getKeyName(this.getLastKey()));
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getSourceId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 1;
    }
}
BasicAI.AI_VISITOR = SmallIntegerSingletonFactory.getInstance().getAt(2);
BasicAI.ID = SmallIntegerSingletonFactory.getInstance().getAt(1);
