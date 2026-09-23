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
import { Canvas } from '../../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas
import { BasicAI } from '../../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const GameInput
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
//not GWT import const Visitor
import { GameTickTimeDelayHelperFactory } from '../../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicRandomAI extends BasicAI {
    constructor(ownerLayerInterface, gameInput, inputProbability, visitor) {
        super(ownerLayerInterface, gameInput);
        this.i_random = 0;
        this.keyArray = [Canvas.UP, Canvas.DOWN, Canvas.LEFT, Canvas.RIGHT, Canvas.KEY_NUM1, Canvas.KEY_NUM7, Canvas.KEY_NUM9];
        this.myRandomFactory = MyRandomFactory.getInstance();
        //For kotlin this is before the body of the constructor.
        this.inputProbability = inputProbability;
        this.visitor = visitor;
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        if (this.inputProbability.getTimeDelayHelper().isTime(GameTickTimeDelayHelperFactory.getInstance().startTime)) {
            this.i_random = this.myRandomFactory.getAbsoluteNextInt(this.inputProbability.getMax());
            var repeat = false;
            ;
            var repeatLikelyhoodIntegerArray = this.inputProbability.getRepeatLikelyhoodIntegerArray();
            ;
            if (this.getLastKey() != -1 && repeatLikelyhoodIntegerArray[this.getLastKey()].intValue() >= this.i_random) {
                repeat = true;
            }
            if (!repeat) {
                var likelyhoodIntegerArray = this.inputProbability.getLikelyhoodIntegerArray();
                ;
                this.i_random = this.myRandomFactory.getAbsoluteNextInt(this.inputProbability.getMax());
                var size = this.keyArray.length;
                ;
                var likelyhoodIntegerKeyArray;
                ;
                for (var index = 0; index < size; index++) {
                    var key = this.keyArray[index];
                    ;
                    likelyhoodIntegerKeyArray = likelyhoodIntegerArray[key];
                    if (likelyhoodIntegerArray.length >= key && likelyhoodIntegerKeyArray[0] !=
                        null) {
                        if (this.i_random >= likelyhoodIntegerKeyArray[0].intValue() && this.i_random < likelyhoodIntegerKeyArray[1].intValue()) {
                            this.setLastKey(key);
                            break;
                        }
                    }
                }
            }
            this.visitor.visit(this);
        }
    }
}
