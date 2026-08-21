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
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { BasicColorSetUtil } from '../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
import { NullPaintable } from '../../../../org/allbinary/graphics/paint/NullPaintable.js';
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
import { AllBinaryLayer } from '../../../../org/allbinary/layer/AllBinaryLayer.js';
import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SWTUtil } from './SWTUtil.js';
import { GameLayerUtil } from './GameLayerUtil.js';
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
