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
//not plain js import { Displayable } 
const Displayable = globalThis.javax.microedition.lcdui.Displayable;
import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
//not GWT import const J2MEUtil = globalThis.org.allbinary.J2MEUtil;
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { AllBinaryGameCanvas } from '../../../../org/allbinary/game/displayable/canvas/AllBinaryGameCanvas.js';
//not GWT import const AllBinaryGameCanvas = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvas;
import { DemoCanvas } from '../../../../org/allbinary/game/displayable/canvas/DemoCanvas.js';
//not GWT import const DemoCanvas = globalThis.org.allbinary.game.displayable.canvas.DemoCanvas;
import { GameInputMappingCanvas } from '../../../../org/allbinary/game/displayable/canvas/GameInputMappingCanvas.js';
//not GWT import const GameInputMappingCanvas = globalThis.org.allbinary.game.displayable.canvas.GameInputMappingCanvas;
import { GameInputMappingInstructionsCanvas } from '../../../../org/allbinary/game/displayable/canvas/GameInputMappingInstructionsCanvas.js';
//not GWT import const GameRunnable = globalThis.org.allbinary.game.displayable.canvas.GameRunnable;
import { NullDisplayable } from '../../../../org/allbinary/game/displayable/canvas/NullDisplayable.js';
//not GWT import const NullDisplayable = globalThis.org.allbinary.game.displayable.canvas.NullDisplayable;
import { NullWaitGameRunnable } from '../../../../org/allbinary/game/displayable/canvas/NullWaitGameRunnable.js';
//not GWT import const NullWaitGameRunnable = globalThis.org.allbinary.game.displayable.canvas.NullWaitGameRunnable;
import { SWTUtil } from '../../../../org/allbinary/game/layer/SWTUtil.js';
//not GWT import const SWTUtil = globalThis.org.allbinary.game.layer.SWTUtil;
import { HighScoresCanvas } from '../../../../org/allbinary/game/score/displayable/HighScoresCanvas.js';
//not GWT import const HighScoresCanvas = globalThis.org.allbinary.game.score.displayable.HighScoresCanvas;
import { GraphicsStrings } from '../../../../org/allbinary/graphics/GraphicsStrings.js';
//not GWT import const GraphicsStrings = globalThis.org.allbinary.graphics.GraphicsStrings;
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;
import { MyCanvas } from '../../../../org/allbinary/graphics/displayable/MyCanvas.js';
//not GWT import const MyCanvas = globalThis.org.allbinary.graphics.displayable.MyCanvas;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { NullRunnable } 
const NullRunnable = globalThis.org.allbinary.thread.NullRunnable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLFeatureFactory } from './OpenGLFeatureFactory.js';
//not GWT import - same folder const OpenGLFeatureFactory = globalThis.org.allbinary.graphics.opengles.OpenGLFeatureFactory;
export class CurrentDisplayableFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CurrentDisplayableFactory.instance;
    }
    constructor() {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.canvasStrings = CanvasStrings.getInstance();
        this.stringUtil = StringUtil.getInstance();
        this.SET_DISPLAYABLE = "setDisplayable";
        this.SET_RUNNABLE = "setRunnable";
        this.CLEAR_RUNNABLE = "clearRunnable";
        this.SET_USED_RUNNABLE = "setUsedRunnable";
        this.RUNNABLE = "Runnable: ";
        this.RUNNABLE_WAS_ALREADY_IN_USE = "Runnable was already in use: ";
        this.DEFAULT_CHILD_NAME_LIST = new BasicArrayListD();
        this.displayable = NullDisplayable.getInstance();
        this.openGlReadydisplayable = NullDisplayable.getInstance();
        this.runnable = NullWaitGameRunnable.getInstance();
        this.usedRunnable = NullWaitGameRunnable.getInstance();
        this.DEFAULT_CHILD_NAME_LIST.add(this.canvasStrings.ABOUT);
        this.DEFAULT_CHILD_NAME_LIST.add(this.canvasStrings.OPTIONS);
        this.DEFAULT_CHILD_NAME_LIST.add(GameInputMappingCanvas.NAME);
        this.DEFAULT_CHILD_NAME_LIST.add(GameInputMappingInstructionsCanvas.NAME);
        this.DEFAULT_CHILD_NAME_LIST.add(HighScoresCanvas.NAME);
    }
    setMyCanvas(displayable) {
        if (this.displayable instanceof MyCanvas) {
            if (displayable.hasChild(this.displayable)) {
                PreLogUtil.put(new StringMaker().append("Child Displayable is already set for: ").append(this.stringUtil.toString(displayable)).toString(), this, this.SET_DISPLAYABLE);
                //if statement needs to be on the same line and ternary does not work the same way.
                return;
            }
        }
        this.setDisplayable(displayable);
    }
    setDisplayable(displayable) {
        this.displayable = displayable;
        this.setOpenGlReadydisplayable(displayable);
    }
    setOpenGlReadydisplayable(openGlReadydisplayable) {
        this.openGlReadydisplayable = openGlReadydisplayable;
        this.update();
    }
    getOpenGlReadydisplayable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.openGlReadydisplayable;
    }
    setRunnable(runnable) {
        PreLogUtil.put(new StringMaker().append(this.RUNNABLE).append(this.stringUtil.toString(runnable)).toString(), this, this.SET_RUNNABLE);
        this.runnable = runnable;
        if (this.usedRunnable != this.runnable) {
            this.update();
        }
        else {
            PreLogUtil.put(new StringMaker().append(this.RUNNABLE_WAS_ALREADY_IN_USE).append(this.stringUtil.toString(runnable)).toString(), this, this.SET_RUNNABLE);
        }
    }
    clearRunnable() {
        PreLogUtil.put(new StringMaker().append(this.RUNNABLE).append(this.stringUtil.toString(NullRunnable.getInstance())).toString(), this, this.CLEAR_RUNNABLE);
        this.setUsedRunnable(NullWaitGameRunnable.getInstance());
    }
    update() {
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this) 
        //mutex.withLock
        var commonSeps = CommonSeps.getInstance();
        ;
        var features = Features.getInstance();
        ;
        var stringMaker = new StringMaker();
        ;
        stringMaker.append(this.stringUtil.toString(this.openGlReadydisplayable));
        if (SWTUtil.isSWT && !features.isDefault(OpenGLFeatureFactory.getInstance().OPENGL)) {
            PreLogUtil.put(stringMaker.append(commonSeps.SPACE).append(SWTUtil.SWT).append(commonSeps.SPACE).append(this.RUNNABLE).append(this.stringUtil.toString(NullRunnable.getInstance())).toString(), this, this.commonStrings.UPDATE);
            this.setUsedRunnable(NullWaitGameRunnable.getInstance());
        }
        else if (J2MEUtil.isHTML()) {
            PreLogUtil.put(stringMaker.append(commonSeps.SPACE).append(GraphicsStrings.getInstance().HTML).append(commonSeps.SPACE).append(this.RUNNABLE).append(this.stringUtil.toString(this.runnable)).toString(), this, this.commonStrings.UPDATE);
            this.setUsedRunnable(this.runnable);
        }
        else if (this.openGlReadydisplayable instanceof DemoCanvas || this.openGlReadydisplayable instanceof AllBinaryGameCanvas || features.isDefault(OpenGLFeatureFactory.getInstance().OPENGL)) {
            PreLogUtil.put(stringMaker.append(commonSeps.SPACE).append(OpenGLFeatureFactory.getInstance().OPENGL.toString()).append(commonSeps.SPACE).append(this.RUNNABLE).append(this.stringUtil.toString(this.runnable)).toString(), this, this.commonStrings.UPDATE);
            this.setUsedRunnable(this.runnable);
        }
        else {
            PreLogUtil.put(stringMaker.append(this.RUNNABLE).append(this.stringUtil.toString(NullRunnable.getInstance())).toString(), this, this.commonStrings.UPDATE);
            this.setUsedRunnable(NullWaitGameRunnable.getInstance());
        }
    }
    getDisplayable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.displayable;
    }
    getUsedRunnable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.usedRunnable;
    }
    setUsedRunnable(usedRunnable) {
        PreLogUtil.put(new StringMaker().append(this.RUNNABLE).append(this.stringUtil.toString(this.runnable)).toString(), this, this.SET_USED_RUNNABLE);
        this.usedRunnable = usedRunnable;
    }
}
CurrentDisplayableFactory.instance = new CurrentDisplayableFactory();
