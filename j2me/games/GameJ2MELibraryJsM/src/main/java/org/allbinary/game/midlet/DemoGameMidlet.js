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
//not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory;
import { StdUtil } from '../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const ClientInformationFactory = globalThis.org.allbinary.logic.system.security.licensing.ClientInformationFactory;
import { PrimaryThreadPool } from '../../../../org/allbinary/thread/PrimaryThreadPool.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
import { NullGameCanvasRunnable } from '../../../../org/allbinary/game/displayable/canvas/NullGameCanvasRunnable.js';
//not GWT import const NullGameCanvasRunnable = globalThis.org.allbinary.game.displayable.canvas.NullGameCanvasRunnable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameMidlet } from './GameMidlet.js';
//not GWT import const GameMidlet = globalThis.org.allbinary.game.midlet.GameMidlet;
import { DemoRunnable } from './DemoRunnable.js';
//not GWT import const DemoRunnable = globalThis.org.allbinary.game.midlet.DemoRunnable;
import { CreateGameRunnable } from './CreateGameRunnable.js';
//not GWT import const CreateGameRunnable = globalThis.org.allbinary.game.midlet.CreateGameRunnable;
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
        this.logUtil.putF(this.commonStrings.NOT_IMPLEMENTED, this, this.commonStrings.CREATE);
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE;
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
        this.setStartStateHashtable(StdUtil.getInstance().NULL_TABLE);
        PrimaryThreadPool.getInstance().runTask(new CreateGameRunnable(this, hashtable));
        this.logUtil.putF(this.commonStrings.END, this, CREATE_GAME);
    }
    isReady() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
}
