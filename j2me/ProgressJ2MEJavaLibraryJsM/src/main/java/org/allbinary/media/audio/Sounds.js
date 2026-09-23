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
//not GWT import const ProgressCanvas
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SoundStrings } from './SoundStrings.js';
//not GWT import - same folder const Sound
export class Sounds extends Object {
    constructor(soundsFactoryInterface) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.soundStrings = SoundStrings.getInstance();
        this.soundsFactoryInterface = soundsFactoryInterface;
    }
    //@Throws(Exception.constructor)
    init() {
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.INIT);
        var commonLabels = CommonLabels.getInstance();
        ;
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        this.soundsFactoryInterface.init();
        var soundInterfaceArray = this.soundsFactoryInterface.getSoundInterfaceArray();
        ;
        var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        ;
        var indexInteger;
        ;
        var indexString;
        ;
        var stringBuffer = new StringMaker();
        ;
        for (var i = 0; i < soundInterfaceArray.length; i++) {
            var soundInterface = soundInterfaceArray[i];
            ;
            if (soundInterface !=
                null) {
                indexInteger = smallIntegerSingletonFactory.getAt(i);
                indexString = indexInteger.toString();
                stringBuffer.delete(0, stringBuffer.length());
                stringBuffer.append(commonLabels.INDEX_LABEL);
                stringBuffer.append(indexString);
                stringBuffer.append(this.soundStrings.SOUND);
                stringBuffer.append(soundInterface.constructor.name.toString());
                this.logUtil.putF(stringBuffer.toString(), this, this.commonStrings.INIT);
                soundInterface.init();
                progressCanvas.addNormalPortion(100, new StringMaker().append(this.soundStrings.INIT_SOUND).append(indexString).toString());
            }
        }
        this.soundsFactoryInterface.setInitialized(true);
        this.logUtil.putF(this.commonStrings.END, this, this.commonStrings.INIT);
    }
    //@Throws(Exception.constructor)
    stopAll() {
        this.logUtil.putF(this.commonStrings.START, this, this.soundStrings.STOP_ALL);
        var soundInterfaceArray = this.soundsFactoryInterface.getSoundInterfaceArray();
        ;
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        var player;
        ;
        for (var index = 0; index < soundInterfaceArray.length; index++) {
            if (soundInterfaceArray[index] !=
                null) {
                player = soundInterfaceArray[index].getPlayerP();
                if (player !=
                    null) {
                    player.stop();
                    progressCanvas.addPortion(100, this.soundStrings.STOPPING_SOUND, index);
                }
            }
        }
    }
    //@Throws(Exception.constructor)
    closeAll() {
        this.logUtil.putF(this.commonStrings.START, this, this.soundStrings.CLOSE_ALL);
        var soundInterfaceArray = this.soundsFactoryInterface.getSoundInterfaceArray();
        ;
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        var player;
        ;
        for (var index = 0; index < soundInterfaceArray.length; index++) {
            if (soundInterfaceArray[index] !=
                null) {
                player = soundInterfaceArray[index].getPlayerP();
                if (player !=
                    null) {
                    player.close();
                    progressCanvas.addPortion(100, this.soundStrings.CLOSING_SOUND, index);
                }
            }
        }
    }
}
