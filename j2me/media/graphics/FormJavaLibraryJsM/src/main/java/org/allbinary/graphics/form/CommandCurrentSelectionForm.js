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
import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
import { RectangleAdjustedAnimation } from '../../../../org/allbinary/animation/vector/RectangleAdjustedAnimation.js';
import { RectangleFilledAdjustedAnimation } from '../../../../org/allbinary/animation/vector/RectangleFilledAdjustedAnimation.js';
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ScrollCurrentSelectionForm } from './ScrollCurrentSelectionForm.js';
import { ItemPaintableFactory } from './ItemPaintableFactory.js';
export class CommandCurrentSelectionForm extends ScrollCurrentSelectionForm {
    constructor(title, items, border, moveForSmallScreen, backgroundBasicColor, foregroundBasicColor) {
        super(title, items, ItemPaintableFactory.getInstance(), border, -3, moveForSmallScreen, backgroundBasicColor, foregroundBasicColor);
        this.selectedAnimationArray = new Array(16);
        this.unSelectedAnimationArray = new Array(16);
        //For kotlin this is before the body of the constructor.
        this.initAnimations();
        this.addAll(items);
    }
    updateMeasurement(graphics) {
        this.updateAll(graphics, getAllitems());
        super.updateMeasurement(graphics);
    }
    initAnimations() {
        var nullAnimation = NullAnimationFactory.getFactoryInstance().getInstance(0);
        ;
        for (var index = this.selectedAnimationArray.length; --index >= 0;) {
            this.selectedAnimationArray[index] = nullAnimation;
        }
        for (var index = this.unSelectedAnimationArray.length; --index >= 0;) {
            this.unSelectedAnimationArray[index] = nullAnimation;
        }
    }
    addAll(items) {
        for (var index = items.length; --index >= 0;) {
            this.addAt(index, items[index]);
        }
    }
    addAt(index, item) {
        var basicColorFactory = BasicColorFactory.getInstance();
        ;
        var buttonColor = basicColorFactory.TRANSPARENT_GREY;
        ;
        var selectedButtonColor = basicColorFactory.TRANSPARENT_RED;
        ;
        var width = item.getMinimumWidth();
        ;
        var height = item.getMinimumHeight();
        ;
        var adjustedBorder = 3;
        ;
        var offset = -(this.halfBorder + adjustedBorder);
        ;
        var rectWidth = width + this.border - adjustedBorder;
        ;
        var rectHeight = height + this.border - adjustedBorder;
        ;
        if (J2MEUtil.isJ2ME()) {
            this.selectedAnimationArray[index] = new RectangleAdjustedAnimation(rectWidth, rectHeight, offset, offset, selectedButtonColor);
        }
        else {
            this.selectedAnimationArray[index] = new RectangleFilledAdjustedAnimation(rectWidth, rectHeight, offset, offset, selectedButtonColor);
        }
        adjustedBorder = 4;
        if (J2MEUtil.isJ2ME()) {
            this.unSelectedAnimationArray[index] = new RectangleAdjustedAnimation(rectWidth, rectHeight, offset, offset, buttonColor);
        }
        else {
            this.unSelectedAnimationArray[index] = new RectangleFilledAdjustedAnimation(rectWidth, rectHeight, offset, offset, buttonColor);
        }
    }
    updateAll(graphics, items) {
        for (var index = items.length; --index >= 0;) {
            items[index].preMeasurement(graphics);
            this.updateAt(index, items[index]);
        }
    }
    updateAt(index, item) {
        var basicColorFactory = BasicColorFactory.getInstance();
        ;
        var buttonColor = basicColorFactory.TRANSPARENT_GREY;
        ;
        var selectedButtonColor = basicColorFactory.TRANSPARENT_RED;
        ;
        var width = item.getMinimumWidth();
        ;
        var height = item.getMinimumHeight();
        ;
        var adjustedBorder = 3;
        ;
        var offset = -(this.halfBorder + adjustedBorder);
        ;
        var rectWidth = width + this.border - adjustedBorder;
        ;
        var rectHeight = height + this.border - adjustedBorder;
        ;
        if (J2MEUtil.isJ2ME()) {
            var rectangleAdjustedAnimation = this.selectedAnimationArray[index];
            ;
            rectangleAdjustedAnimation.setWidth(rectWidth);
            rectangleAdjustedAnimation.setHeight(rectHeight);
            rectangleAdjustedAnimation.setOffsetX(offset);
            rectangleAdjustedAnimation.setOffsetY(offset);
            rectangleAdjustedAnimation.setBasicColorP(selectedButtonColor);
        }
        else {
            var rectangleAdjustedAnimation = this.selectedAnimationArray[index];
            ;
            rectangleAdjustedAnimation.setWidth(rectWidth);
            rectangleAdjustedAnimation.setHeight(rectHeight);
            rectangleAdjustedAnimation.setOffsetX(offset);
            rectangleAdjustedAnimation.setOffsetY(offset);
            rectangleAdjustedAnimation.setBasicColorP(selectedButtonColor);
        }
        adjustedBorder = 4;
        if (J2MEUtil.isJ2ME()) {
            var rectangleAdjustedAnimation = this.unSelectedAnimationArray[index];
            ;
            rectangleAdjustedAnimation.setWidth(rectWidth);
            rectangleAdjustedAnimation.setHeight(rectHeight);
            rectangleAdjustedAnimation.setOffsetX(offset);
            rectangleAdjustedAnimation.setOffsetY(offset);
            rectangleAdjustedAnimation.setBasicColorP(buttonColor);
        }
        else {
            var rectangleAdjustedAnimation = this.unSelectedAnimationArray[index];
            ;
            rectangleAdjustedAnimation.setWidth(rectWidth);
            rectangleAdjustedAnimation.setHeight(rectHeight);
            rectangleAdjustedAnimation.setOffsetX(offset);
            rectangleAdjustedAnimation.setOffsetY(offset);
            rectangleAdjustedAnimation.setBasicColorP(buttonColor);
        }
    }
    getSelectedCommand() {
        var index = super.getSelectedIndex();
        ;
        var commandTextItem = this.get(index);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return commandTextItem.getCommand();
        ;
    }
    append(item) {
        var result = super.append(item);
        ;
        this.addAt(result, item);
        //if statement needs to be on the same line and ternary does not work the same way.
        return result;
    }
    delete(itemNum) {
        super.delete(itemNum);
    }
    deleteAll() {
        this.initAnimations();
        super.deleteAll();
    }
    insert(itemNum, item) {
        super.insert(itemNum, item);
    }
    set(itemNum, item) {
        super.set(itemNum, item);
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        super.paint(graphics);
    }
    //@Throws(Exception.constructor)
    paintItem(graphics, index, item, x, y) {
        this.selectedAnimationArray[index].paintXY(graphics, x, y);
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.paintItem(graphics, index, item, x, y);
        ;
    }
    //@Throws(Exception.constructor)
    paintUnselectedItem(graphics, index, item, x, y) {
        this.unSelectedAnimationArray[index].paintXY(graphics, x, y);
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.paintUnselectedItem(graphics, index, item, x, y);
        ;
    }
}
