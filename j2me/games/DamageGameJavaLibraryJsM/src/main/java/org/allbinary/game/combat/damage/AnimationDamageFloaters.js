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
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;
import { CanvasStrings } from '../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { CircularIndexUtil } from '../../../../../org/allbinary/util/CircularIndexUtil.js';
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DamageFloaters } from './DamageFloaters.js';
//not GWT import const DamageFloaters = globalThis.org.allbinary.game.combat.damage.DamageFloaters;
export class AnimationDamageFloaters extends DamageFloaters {
    constructor(layerInterface, animationInterfaceArray, dx, dy) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.animationInterfaceArray = animationInterfaceArray;
        for (var index = this.animationInterfaceArray.length - 1; index >= 0; index--) {
            this.animationInterfaceArray[index].setFrame(this.animationInterfaceArray[index].getSize() - 1);
        }
        this.layerInterface = layerInterface;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.animationInterfaceArray.length);
        this.dx = dx;
        this.dy = dy;
    }
    add(damage) {
        var i = this.circularIndexUtil.getIndex();
        ;
        this.animationInterfaceArray[i].setFrame(0);
        this.circularIndexUtil.next();
    }
    paint(graphics) {
        try {
            var viewPosition = this.layerInterface.getViewPosition();
            ;
            var x = viewPosition.getX();
            ;
            var y = viewPosition.getY();
            ;
            for (var index = 0; index < this.animationInterfaceArray.length; index++) {
                var animationInterface = this.animationInterfaceArray[index];
                ;
                if (animationInterface.getFrame() < animationInterface.getAnimationSize() - 1) {
                    var delta = animationInterface.getFrame() * 20;
                    ;
                    animationInterface.paintXY(graphics, x + this.dx, y - delta + this.dy);
                    animationInterface.nextFrame();
                }
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            var canvasStrings = CanvasStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, canvasStrings.PAINT, e);
        }
    }
}
