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
//not GWT import const GL = globalThis.javax.microedition.khronos.opengles.GL;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { BasicColorSetUtil } from '../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
//not GWT import const BasicColorSetUtil = globalThis.org.allbinary.graphics.color.BasicColorSetUtil;
import { NullPaintable } from '../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
//not GWT import const OpenGLSurfaceChangedInterface = globalThis.org.allbinary.image.opengles.OpenGLSurfaceChangedInterface;
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const ViewPositionEventListenerInterface = globalThis.org.allbinary.view.event.ViewPositionEventListenerInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SWTUtil } from './SWTUtil.js';
//not GWT import - same folder const SWTUtil = globalThis.org.allbinary.game.layer.SWTUtil;
import { GameLayerUtil } from './GameLayerUtil.js';
//not GWT import - same folder const GameLayerUtil = globalThis.org.allbinary.game.layer.GameLayerUtil;
export class AllBinaryGameLayer extends AllBinaryLayer {
    ;
    constructor(name, layerInfo, viewPosition) {
        super(name, layerInfo, viewPosition);
        this.commonStrings = CommonStrings.getInstance();
        this.basicSetColorUtil = BasicColorSetUtil.getInstance();
        this.RED = BasicColorFactory.getInstance().RED;
        this.paintable = SWTUtil.isSWT
            ?
                new class extends Paintable {
                    constructor() {
                        super(...arguments);
                        this.basicSetColorUtil = BasicColorSetUtil.getInstance();
                        this.BLACK = BasicColorFactory.getInstance().BLACK;
                    }
                    paint(graphics) {
                        this.basicSetColorUtil.setBasicColorP(graphics, this.BLACK);
                    }
                }
            :
                NullPaintable.getInstance();
        this.gameKeyEventList = new BasicArrayListD();
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    set(gl) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    move() {
    }
    getGameKeyEventList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameKeyEventList;
    }
    //@Throws(Exception.constructor)
    processInput(allBinaryLayerManager) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    //@Throws(Exception.constructor)
    processTick(allBinaryLayerManager) {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    //@Throws(Exception.constructor)
    onViewPositionChangeEvent() {
        this.onChangeEvent(this.viewPositionEvent);
    }
    //@Throws(Exception.constructor)
    onChangeEvent(layerManagerEvent) {
        if (GameLayerUtil.isOnScreen(this)) {
            this.setVisible(true);
        }
        else {
            this.setVisible(false);
        }
    }
    paintFirst(graphics) {
        this.paintable.paint(graphics);
    }
    paintDebug(graphics) {
        var viewPosition = this.getViewPosition();
        ;
        var viewX = viewPosition.getX();
        ;
        var viewY = viewPosition.getY();
        ;
        this.basicSetColorUtil.setBasicColorP(graphics, this.RED);
        graphics.drawRect(viewX, viewY, this.getWidth(), this.getHeight());
    }
    setWidth(width) {
        super.setLayerWidth(width);
        this.setHalfWidth(width >> 1);
    }
    setHeight(height) {
        super.setLayerHeight(height);
        this.setHalfHeight(height >> 1);
    }
}
