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
import { J2MEUtil } from '../../../../../org/allbinary/J2MEUtil.js';
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
import { GameCommandCanvas } from '../../../../../org/allbinary/game/displayable/canvas/GameCommandCanvas.js';
import { ColorFillPaintableFactory } from '../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js';
import { HighScoreCommandsFactory } from '../../../../../org/allbinary/game/score/HighScoreCommandsFactory.js';
import { HighScoresHelperBase } from '../../../../../org/allbinary/game/score/HighScoresHelperBase.js';
import { NoHighScoresFactory } from '../../../../../org/allbinary/game/score/NoHighScoresFactory.js';
import { NullHighScoresSingletonFactory } from '../../../../../org/allbinary/game/score/NullHighScoresSingletonFactory.js';
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
import { SimpleTextPaintable } from '../../../../../org/allbinary/graphics/paint/SimpleTextPaintable.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
import { ARunnable } from '../../../../../org/allbinary/thread/ARunnable.js';
import { SecondaryThreadPool } from '../../../../../org/allbinary/thread/SecondaryThreadPool.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class HighScoresCanvas extends GameCommandCanvas {
    constructor(commandListener, allBinaryGameLayerManager, gameInfo, paintable, highScoresFactoryInterface, highScoresCanvasInputProcessorFactoryInterface) {
        super(commandListener, HighScoresCanvas.NAME, allBinaryGameLayerManager.getBackgroundBasicColor(), allBinaryGameLayerManager.getForegroundBasicColor());
        this.paintable = NullPaintable.getInstance();
        this.highScoreCommandsFactory = HighScoreCommandsFactory.getInstance();
        this.waitPaintable = new SimpleTextPaintable(this.commonStrings.PLEASE_WAIT_FOR_SERVER, BasicColorFactory.getInstance().WHITE);
        this.highScoresHelper = new HighScoresHelperBase();
        this.currentCommand = this.highScoreCommandsFactory.HIGH_SCORE_COMMANDS[0];
        this.hasPainted = false;
        //For kotlin this is before the body of the constructor.
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
        this.highScoresPaintable = paintable;
        this.highScoresFactoryInterface = highScoresFactoryInterface;
        this.highScoresCanvasInputProcessor = highScoresCanvasInputProcessorFactoryInterface.getInstance(this);
        this.gameInfo = gameInfo;
        this.waitPaintable.setBasicColorP(allBinaryGameLayerManager.getForegroundBasicColor());
        this.getHighScoresPaintable().setBasicColorP(allBinaryGameLayerManager.getForegroundBasicColor());
        this.colorFillPaintable = ColorFillPaintableFactory.getInstance().getInstance(allBinaryGameLayerManager.getBackgroundBasicColor(), false);
        if (this.highScoresHelper.getHighScoresArray() == NoHighScoresFactory.getInstance().NO_HIGH_SCORES) {
            this.setPaintable(this.waitPaintable);
        }
        else {
            this.logUtil.putF("Show HighScores that are already loaded", this, this.commonStrings.CONSTRUCTOR);
            this.updateCommand(this.currentCommand);
            this.setPaintable(this.getHighScoresPaintable());
        }
        //inner=true member= isStatic=
        class HighScoreRunnable extends ARunnable {
            constructor(highScoresCanvas) {
                super();
                this.highScoresCanvas = highScoresCanvas;
            }
            run() {
                var commonStrings = CommonStrings.getInstance();
                ;
                var logUtil = LogUtil.getInstance();
                ;
                var highScoresCanvas = this.highScoresCanvas;
                ;
                try {
                    var isHTML = J2MEUtil.isHTML();
                    ;
                    if (!isHTML) {
                        while (!highScoresCanvas.hasPainted) {
                        }
                        highScoresCanvas.hasPainted = false;
                    }
                    var stringMaker = new StringMaker();
                    ;
                    logUtil.putF(stringMaker.append("HighScoresCanvas - Request repaint to be sure: ").appendlong(Date.now()).toString(), this, commonStrings.RUN);
                    highScoresCanvas.repaintBehavior.onChangeRepaint(highScoresCanvas);
                    if (!isHTML) {
                        while (!highScoresCanvas.hasPainted) {
                        }
                    }
                    stringMaker.delete(0, stringMaker.length());
                    logUtil.putF(stringMaker.append("HighScoresCanvas - Now that the canvas has completed repaint go ahead and fetch the scores: ").appendlong(Date.now()).toString(), this, commonStrings.RUN);
                    highScoresCanvas.executeUpdate();
                    //: 
                }
                catch (e) {
                    logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
                }
            }
        }
        //Otherwise - statement - EmptyStmt
        SecondaryThreadPool.getInstance().runTask(new HighScoreRunnable(this));
    }
    initCommands(cmdListener) {
        this.removeAllCommands();
        this.addCommand(GameCommandsFactory.getInstance().CLOSE_AND_SHOW_GAME_CANVAS);
        this.setCommandListener(cmdListener);
    }
    open() {
        super.open();
        this.highScoresCanvasInputProcessor.open();
    }
    close() {
        super.close();
        this.highScoresCanvasInputProcessor.close();
    }
    paint(graphics) {
        this.colorFillPaintable.paint(graphics);
        this.paintable.paint(graphics);
        if (this.waitPaintable != this.paintable) {
            this.highScoresCanvasInputProcessor.paint(graphics);
        }
        super.paint(graphics);
        this.hasPainted = true;
    }
    executeUpdate() {
        try {
            this.highScoresFactoryInterface.fetchHighScores(this.getGameInfo(), this);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.UPDATE, e);
        }
    }
    getHighScoresPaintable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.highScoresPaintable;
    }
    setHighScoresArray(highScoresArray) {
        try {
            if (highScoresArray !=
                null) {
                this.logUtil.putF(new StringMaker().append(this.commonStrings.START).appendint(highScoresArray.length).toString(), this, "setHighScoresArray");
            }
            else {
                this.logUtil.putF(this.commonStrings.START, this, "setHighScoresArray");
            }
            this.highScoresHelper.setHighScoresArray(highScoresArray);
            this.updateCommand(this.currentCommand);
            this.setPaintable(this.getHighScoresPaintable());
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.UPDATE, e);
        }
    }
    //@Throws(Exception.constructor)
    updateCommand(command) {
        this.logUtil.putF(new StringMaker().append(this.commonStrings.START).append(this.stringUtil.toString(command)).toString(), this, this.commonStrings.UPDATE);
        var gameCommandsFactory = GameCommandsFactory.getInstance();
        ;
        if (this.highScoreCommandsFactory.isHighScoreCommand(command)) {
            var index = this.highScoreCommandsFactory.getIndex(command);
            ;
            var nextIndex = index + 1;
            ;
            var highScoresArray = this.highScoresHelper.getHighScoresArray();
            ;
            if (nextIndex >= highScoresArray.length) {
                nextIndex = 0;
            }
            if (highScoresArray.length > 0) {
                this.getHighScoresPaintable().setHighScores(highScoresArray[index]);
            }
            else {
                this.getHighScoresPaintable().setHighScores(NullHighScoresSingletonFactory.getInstance());
            }
            if (index != nextIndex) {
                this.removeAllCommands();
                this.addCommand(gameCommandsFactory.CLOSE_AND_SHOW_GAME_CANVAS);
                this.addCommand(this.highScoreCommandsFactory.HIGH_SCORE_COMMANDS[nextIndex]);
            }
        }
        this.currentCommand = command;
        this.close();
        super.initMenu();
        this.open();
        this.repaintBehavior.onChangeRepaint(this);
    }
    getGameInfo() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameInfo;
    }
    setPaintable(paintable) {
        this.paintable = paintable;
        this.repaintBehavior.onChangeRepaint(this);
    }
}
HighScoresCanvas.NAME = "HighScoresCanvas";
