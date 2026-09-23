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
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import - same folder const Sound
import { NoSound } from './NoSound.js';
//not GWT import - same folder const NoSound
export class PlayerQueue extends Object {
    constructor(max) {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.list = new BasicArrayListD();
        this.max = max;
    }
    add(sound) {
        try {
            if (!this.list.contains(sound)) {
                this.list.add(sound);
            }
            //: 
        }
        catch (e) {
            PreLogUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.ADD);
        }
    }
    process() {
        var sound = NoSound.getInstance();
        ;
        try {
            var played = false;
            ;
            if (this.list.size() > 0) {
                sound = this.list.removeAt(0);
                if (sound !=
                    null) {
                    sound.getPlayerP().start();
                }
                while (this.list.size() > this.max) {
                    this.list.removeAt(0);
                }
                played = true;
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return played;
            //: 
        }
        catch (e) {
            var resource = StringUtil.getInstance().EMPTY_STRING;
            ;
            if (sound !=
                null) {
                resource = sound.getResource();
            }
            PreLogUtil.put(new StringMaker().append(this.commonStrings.EXCEPTION_LABEL).append(resource).toString(), this, this.commonStrings.PROCESS);
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    clear() {
        this.list.clear();
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(PlayerQueue.TOTAL).appendint(this.list.size()).toString();
        ;
    }
}
PlayerQueue.TOTAL = "Sounds In Queue: ";
