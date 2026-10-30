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
//not GWT import const IndexedAnimation
import { CanvasStrings } from '../../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const AllBinaryLayer
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//not GWT import const ViewPositionBase
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DamageFloaters } from './DamageFloaters.js';
//sameFolderImports - not GWT import - same folder const DamageFloaters
export class AnimationDamageFloaters extends DamageFloaters {
    constructor(layerInterface, animationInterfaceArray, dx, dy) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.animationInterfaceArray = animationInterfaceArray;
        for (let index = this.animationInterfaceArray.length - 1; index >= 0; index--) {
            this.animationInterfaceArray[index].setFrame(this.animationInterfaceArray[index].getSize() - 1);
        }
        this.layerInterface = layerInterface;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.animationInterfaceArray.length);
        this.dx = dx;
        this.dy = dy;
    }
    add(damage) {
        let i = this.circularIndexUtil.getIndex();
        ;
        this.animationInterfaceArray[i].setFrame(0);
        this.circularIndexUtil.next();
    }
    paint(graphics) {
        try {
            let viewPosition = this.layerInterface.getViewPosition();
            ;
            let x = viewPosition.getX();
            ;
            let y = viewPosition.getY();
            ;
            for (let index = 0; index < this.animationInterfaceArray.length; index++) {
                let animationInterface = this.animationInterfaceArray[index];
                ;
                if (animationInterface.getFrame() < animationInterface.getAnimationSize() - 1) {
                    let delta = animationInterface.getFrame() * 20;
                    ;
                    animationInterface.paintXY(graphics, x + this.dx, y - delta + this.dy);
                    animationInterface.nextFrame();
                }
            }
        }
        catch (caught) {
            {
                const e = caught;
                let commonStrings = CommonStrings.getInstance();
                ;
                let canvasStrings = CanvasStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, canvasStrings.PAINT, e);
            }
        }
    }
}
