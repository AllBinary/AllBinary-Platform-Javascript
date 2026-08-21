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
import { Exception } from '../../../../java/lang/Exception.js';
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
import { PrimaryThreadPool } from '../../../../org/allbinary/thread/PrimaryThreadPool.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameMidlet } from './GameMidlet.js';
import { DemoRunnable } from './DemoRunnable.js';
import { CreateGameRunnable } from './CreateGameRunnable.js';
export class DemoGameMidlet extends GameMidlet {
    constructor(clientInformationFactory) {
        super(clientInformationFactory);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    isContinue() {
        var hashtable = this.getStartStateHashtable();
        ;
        if (hashtable !=
            null
            && hashtable.length > 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    getHighestLevel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 1;
    }
    //@Throws(Exception.constructor)
    createDemoGameCanvasRunnableInterface() {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    createGameCanvasRunnable(allBinaryGameLayerManager) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    createGameCanvasRunnableInterface() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createGameCanvasRunnable(this.createGameLayerManager());
        ;
    }
    demoSetup() {
    }
    postDemoSetup() {
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    setDemo() {
        this.logUtil.putF(this.commonStrings.START, this, "setDemo");
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        progressCanvas.start();
        PrimaryThreadPool.getInstance().runTask(new DemoRunnable(this));
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    createGame() {
        var CREATE_GAME = "createGame";
        ;
        this.logUtil.putF(this.commonStrings.START, this, CREATE_GAME);
        var progressCanvas = ProgressCanvasFactory.getInstance();
        ;
        progressCanvas.start();
        var hashtable = this.getStartStateHashtable();
        ;
        this.setStartStateHashtable(NullUtil.getInstance().NULL_TABLE);
        PrimaryThreadPool.getInstance().runTask(new CreateGameRunnable(this, hashtable));
        this.logUtil.putF(this.commonStrings.END, this, CREATE_GAME);
    }
    isReady() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
}
