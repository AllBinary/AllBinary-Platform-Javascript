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
//not GWT import const GameTickTimeDelayHelper = globalThis.org.allbinary.time.GameTickTimeDelayHelper;
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory = globalThis.org.allbinary.time.GameTickTimeDelayHelperFactory;
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper = globalThis.org.allbinary.time.TimeDelayHelper;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { KeyPressesAI } from './KeyPressesAI.js';
//not GWT import const KeyPressesAI = globalThis.org.allbinary.game.ag.ai.KeyPressesAI;
export class MultiKeyPressesAI extends KeyPressesAI {
    constructor(hashtable, ownerLayerInterface, gameInput) {
        super(hashtable, ownerLayerInterface, gameInput);
        this.toggleTimeHelper = new TimeDelayHelper(600);
        this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
        //For kotlin this is before the body of the constructor.
        this.update();
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
    }
    //@Throws(Exception.constructor)
    update() {
        var gameInput = this.getGameInput();
        ;
        var keys = this.keys;
        ;
        var size = keys.length;
        ;
        if (this.isOn()) {
            for (var index = 0; index < size; index++) {
                var key = keys[index].intValue();
                ;
                if (key != -1) {
                    gameInput.add(this.gameKeyEventFactory.getInstanceForKey(this, key));
                }
            }
        }
        else {
            for (var index = 0; index < size; index++) {
                var key = keys[index].intValue();
                ;
                if (key != -1) {
                    gameInput.addForRemoval(this.gameKeyEventFactory.getInstanceForKey(this, key));
                }
            }
        }
    }
    //@Throws(Exception.constructor)
    toggle() {
        if (this.toggleTimeHelper.isTime(this.gameTickTimeDelayHelper.startTime)) {
            super.toggle();
            this.update();
        }
    }
    //@Throws(Exception.constructor)
    disable() {
        if (this.toggleTimeHelper.isTime(this.gameTickTimeDelayHelper.startTime)) {
            super.disable();
            this.update();
        }
    }
    //@Throws(Exception.constructor)
    enable() {
        if (this.toggleTimeHelper.isTime(this.gameTickTimeDelayHelper.startTime)) {
            super.enable();
            this.update();
        }
    }
}
