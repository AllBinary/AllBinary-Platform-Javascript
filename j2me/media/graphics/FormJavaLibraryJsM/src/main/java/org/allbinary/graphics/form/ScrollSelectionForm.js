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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { GPoint } from '../../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { ABCustomItem } from '../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { RectangleCollisionUtil } from '../../../../org/allbinary/math/RectangleCollisionUtil.js';
const RectangleCollisionUtil = globalThis.org.allbinary.math.RectangleCollisionUtil;
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PaintableForm } from './PaintableForm.js';
//not GWT import const PaintableForm = globalThis.org.allbinary.graphics.form.PaintableForm;
import { ItemPaintableFactory } from './ItemPaintableFactory.js';
//not GWT import const ItemPaintableFactory = globalThis.org.allbinary.graphics.form.ItemPaintableFactory;
import { ItemIndexPaintable } from './ItemIndexPaintable.js';
//not GWT import const ItemIndexPaintable = globalThis.org.allbinary.graphics.form.ItemIndexPaintable;
import { ItemIndexDx } from './ItemIndexDx.js';
//not GWT import const ItemPaintable = globalThis.org.allbinary.graphics.form.ItemPaintable;
import { FormTypeFactory } from './FormTypeFactory.js';
//not GWT import const FormType = globalThis.org.allbinary.graphics.form.FormType;
export class ScrollSelectionForm extends PaintableForm {
    static createForm(title, items, formPaintableFactory, border, backgroundBasicColor, foregroundBasicColor) {
        try {
            if (formPaintableFactory == ItemPaintableFactory.getInstance()) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return new ScrollSelectionForm(title, items, formPaintableFactory, border, -3, backgroundBasicColor, foregroundBasicColor);
            }
            else {
                throw new RuntimeException();
            }
            //: 
        }
        catch (e) {
            throw new RuntimeException();
        }
    }
    static getNullScrollSelectionForm() {
        if (ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM == NullUtil.getInstance().NULL_OBJECT) {
            ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM = ScrollSelectionForm.createForm(StringUtil.getInstance().EMPTY_STRING, [], ItemPaintableFactory.getInstance(), 0, BasicColorFactory.getInstance().BLACK, BasicColorFactory.getInstance().WHITE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM;
    }
    static getNullScrollSelectionFormHorizontal() {
        if (ScrollSelectionForm.NULL_SCROLL_SELECTION_HORIZONTAL_FORM == NullUtil.getInstance().NULL_OBJECT) {
            ScrollSelectionForm.NULL_SCROLL_SELECTION_HORIZONTAL_FORM = ScrollSelectionForm.createForm(StringUtil.getInstance().EMPTY_STRING, [], ItemPaintableFactory.getInstance(), 0, BasicColorFactory.getInstance().BLACK, BasicColorFactory.getInstance().WHITE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return ScrollSelectionForm.NULL_SCROLL_SELECTION_HORIZONTAL_FORM;
    }
    constructor(title, items, formPaintableFactory, border, adjustedExtraBorder, backgroundBasicColor, foregroundBasicColor) {
        super(title, items, backgroundBasicColor, foregroundBasicColor);
        //inner= member=true isStatic=
        this.ScrollSelectionFormHorizontalPaintable = class extends ItemIndexPaintable {
            constructor(scrollSelectionForm) {
                super();
                this.scrollSelectionForm = scrollSelectionForm;
            }
            //@Throws(Exception.constructor)
            paint(graphics, index, item, dx, dy) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.scrollSelectionForm.paintItemHorizontal(graphics, index, item, dx, dy);
                ;
            }
        };
        //inner= member=true isStatic=
        this.ScrollSelectionFormVerticalPaintable = class extends ItemIndexPaintable {
            constructor(scrollSelectionForm) {
                super();
                this.scrollSelectionForm = scrollSelectionForm;
            }
            //@Throws(Exception.constructor)
            paint(graphics, index, item, dx, dy) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.scrollSelectionForm.paintItemVertical(graphics, index, item, dx, dy);
                ;
            }
        };
        //inner= member=true isStatic=
        this.ScrollSelectionFormTempHorizontalPaintable = class extends ItemIndexPaintable {
            constructor(scrollSelectionForm) {
                super();
                this.scrollSelectionForm = scrollSelectionForm;
            }
            //@Throws(Exception.constructor)
            paint(graphics, index, item, dx, dy) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.scrollSelectionForm.paintItemTempHorizontal(graphics, index, item, dx, dy);
                ;
            }
        };
        //inner= member=true isStatic=
        this.ScrollSelectionFormHorizontalDx = class extends ItemIndexDx {
            constructor(multipleScrollSelectionForm) {
                super();
                this.scrollSelectionForm = multipleScrollSelectionForm;
            }
            //@Throws(Exception.constructor)
            getDx(index, item, dx, dy) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.scrollSelectionForm.getSelectedIndexForPointHorizontalDx(index, item, dx, dy);
                ;
            }
        };
        //inner= member=true isStatic=
        this.ScrollSelectionFormVericalDx = class extends ItemIndexDx {
            constructor(multipleScrollSelectionForm) {
                super();
                this.scrollSelectionForm = multipleScrollSelectionForm;
            }
            //@Throws(Exception.constructor)
            getDx(index, item, dx, dy) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.scrollSelectionForm.getSelectedIndexForPointVerticalDx(index, item, dx, dy);
                ;
            }
        };
        //inner= member=true isStatic=
        this.ScrollSelectionFormTempHorizontalDx = class extends ItemIndexDx {
            constructor(multipleScrollSelectionForm) {
                super();
                this.scrollSelectionForm = multipleScrollSelectionForm;
            }
            //@Throws(Exception.constructor)
            getDx(index, item, dx, dy) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.scrollSelectionForm.getSelectedIndexForPointTempHorizontalDx(index, item, dx, dy);
                ;
            }
        };
        this.rectangleCollisionUtil = RectangleCollisionUtil.getInstance();
        this.scrollSelectionFormFormTypeItemIndexPaintable = ItemIndexPaintable.getInstance();
        this.formTypeItemIndexDx = ItemIndexDx.getInstance();
        this.paintable = ItemPaintableFactory.getInstance();
        //For kotlin this is before the body of the constructor.
        this.adjustedExtraBorder = adjustedExtraBorder;
        this.buttonBasicColor = foregroundBasicColor;
        this.border = border;
        this.halfBorder = (border >> 1);
        this.paintable = formPaintableFactory.getInstanceItemPaintable(this);
    }
    //@Throws(Exception.constructor)
    init(rectangle, formType) {
        super.init(rectangle, formType);
        var formTypeFactory = FormTypeFactory.getInstance();
        ;
        if (formType == formTypeFactory.HORIZONTAL_FORM) {
            this.scrollSelectionFormFormTypeItemIndexPaintable = new this.ScrollSelectionFormHorizontalPaintable(this);
            this.formTypeItemIndexDx = new this.ScrollSelectionFormHorizontalDx(this);
        }
        else if (formType == formTypeFactory.VERTICAL_CENTER_FORM) {
            this.scrollSelectionFormFormTypeItemIndexPaintable = new this.ScrollSelectionFormVerticalPaintable(this);
            this.formTypeItemIndexDx = new this.ScrollSelectionFormVericalDx(this);
        }
        else if (formType == formTypeFactory.TEMP_HORIZONTAL_FORM) {
            this.scrollSelectionFormFormTypeItemIndexPaintable = new this.ScrollSelectionFormTempHorizontalPaintable(this);
            this.formTypeItemIndexDx = new this.ScrollSelectionFormTempHorizontalDx(this);
        }
        else if (formType == formTypeFactory.NULL_FORM_TYPE) {
        }
        else {
            throw new Exception(formTypeFactory.UNK);
        }
    }
    paintItemHorizontal(graphics, index, item, x, y) {
        var width = item.getMinimumWidth();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return x + width + this.border;
    }
    paintItemVertical(graphics, index, item, x, y) {
        var height = item.getMinimumHeight();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return y + height + this.border;
    }
    paintItemTempHorizontal(graphics, index, item, x, y) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getSelectedIndexForPointHorizontalDx(index, item, dx, dy) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return dx - this.halfBorder;
    }
    getSelectedIndexForPointVerticalDx(index, item, dx, dy) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return dx + this.getDiffX(item);
    }
    getSelectedIndexForPointTempHorizontalDx(index, item, dx, dy) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return dx + this.getDiffX(item);
    }
    append(item) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.append(item);
        ;
    }
    //@Throws(Exception.constructor)
    getSelectedItem(point) {
        var index = this.getSelectedIndexForPoint(point);
        ;
        if (index != -1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.get(index);
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return ABCustomItem.getNullInstance();
            ;
        }
    }
    //@Throws(Exception.constructor)
    getItemIndex(item) {
        var nextItem;
        ;
        var size = this.size();
        ;
        for (var index = 0; index < size; index++) {
            nextItem = this.get(index);
            if (nextItem == item) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return index;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    getStartIndex() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    //@Throws(Exception.constructor)
    getSelectedIndexForPoint(point) {
        var start = this.getStartIndex();
        ;
        var size = this.size();
        ;
        var dx = this.getDx();
        ;
        var dy = this.getDy();
        ;
        var formTypeFactory = FormTypeFactory.getInstance();
        ;
        var commonLabels = CommonLabels.getInstance();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(commonLabels.START_LABEL);
        stringBuffer.appendint(start);
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(commonLabels.TOTAL_LABEL);
        stringBuffer.appendint(size);
        this.logUtil.putF(stringBuffer.toString(), this, ScrollSelectionForm.GET_SELECTED_INDEX);
        var item;
        ;
        var width = 0;
        ;
        var height = 0;
        ;
        var diffX = 0;
        ;
        for (var index = start; index < size; index++) {
            item = this.get(index);
            width = item.getMinimumWidth();
            height = item.getMinimumHeight();
            diffX = this.formTypeItemIndexDx.getDx(index, item, dx, dy);
            if (this.rectangleCollisionUtil.isInside(diffX, dy - this.halfBorder, diffX + width + this.border, dy + height + this.halfBorder + 1, point.getX(), point.getY())) {
                stringBuffer.delete(0, stringBuffer.length());
                stringBuffer.append(commonLabels.ITEM_LABEL);
                stringBuffer.append(item.getLabel());
                stringBuffer.append(CommonSeps.getInstance().SPACE);
                stringBuffer.append(commonLabels.INDEX_LABEL);
                stringBuffer.appendint(index);
                this.logUtil.putF(stringBuffer.toString(), this, ScrollSelectionForm.GET_SELECTED_INDEX);
                //if statement needs to be on the same line and ternary does not work the same way.
                return index;
            }
            if (this.formType == formTypeFactory.HORIZONTAL_FORM) {
                dx = dx + width + this.border;
                if (dx > this.rectangle.getMaxX()) {
                    break;
                }
            }
            else if (this.formType == formTypeFactory.VERTICAL_CENTER_FORM) {
                dy = dy + height + this.border;
                if (dy > this.rectangle.getMaxY()) {
                    break;
                }
            }
            else if (this.formType == formTypeFactory.NULL_FORM_TYPE) {
            }
            else {
                throw new Exception(formTypeFactory.UNK);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    //@Throws(Exception.constructor)
    processInputKey(gameKeyCode) {
        var formTypeFactory = FormTypeFactory.getInstance();
        ;
        if (this.size() == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return -1;
        }
        var index = this.getSelectedIndex();
        ;
        if (this.formType == formTypeFactory.HORIZONTAL_FORM || this.formType == formTypeFactory.TEMP_HORIZONTAL_FORM) {
            if (gameKeyCode == Canvas.RIGHT) {
                index++;
            }
            else if (gameKeyCode == Canvas.LEFT) {
                index--;
            }
        }
        else if (this.formType == formTypeFactory.VERTICAL_CENTER_FORM) {
            if (gameKeyCode == Canvas.DOWN) {
                index++;
            }
            else if (gameKeyCode == Canvas.UP) {
                index--;
            }
        }
        else if (this.formType == formTypeFactory.NULL_FORM_TYPE) {
        }
        else {
            throw new Exception(formTypeFactory.UNK);
        }
        var max = this.size() - 1;
        ;
        if (index < 0) {
            this.setSelectedIndex(0);
        }
        else if (index > max) {
            this.setSelectedIndex(max);
        }
        else {
            this.setSelectedIndex(index);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    isInForm(point) {
        if (this.rectangleCollisionUtil.isInside(this.x, this.y - this.halfBorder, this.rectangle.getMaxX() + this.border, this.rectangle.getMaxY() + this.border, point.getX(), point.getY())) {
            this.logUtil.putF(new StringMaker().append(StringUtil.getInstance().toString(point)).append(ScrollSelectionForm.INSIDE_FORM).toString(), this, ScrollSelectionForm.IS_IN_FORM);
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    paintItem(graphics, index, item, x, y) {
        item.paintXY(graphics, x, y);
        var width = item.getMinimumWidth();
        ;
        var height = item.getMinimumHeight();
        ;
        graphics.setColor(this.getButtonBasicColor().intValue());
        var adjustedBorder = 3;
        ;
        graphics.drawRect(x - this.halfBorder - adjustedBorder, y - this.halfBorder - adjustedBorder, width + this.border + this.adjustedExtraBorder, height + this.border + this.adjustedExtraBorder);
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scrollSelectionFormFormTypeItemIndexPaintable.paint(graphics, index, item, x, y);
        ;
    }
    //@Throws(Exception.constructor)
    paintUnselectedItem(graphics, index, item, x, y) {
        graphics.setColor(this.getButtonBasicColor().intValue());
        item.paintUnselected(graphics, x, y);
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.scrollSelectionFormFormTypeItemIndexPaintable.paint(graphics, index, item, x, y);
        ;
    }
    getDiffX(item) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getDx() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.x;
    }
    getDy() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.y;
    }
    setButtonBasicColor(buttonBasicColor) {
        this.buttonBasicColor = buttonBasicColor;
    }
    getButtonBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.buttonBasicColor;
    }
}
ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM = NullUtil.getInstance().NULL_OBJECT;
ScrollSelectionForm.NULL_SCROLL_SELECTION_HORIZONTAL_FORM = NullUtil.getInstance().NULL_OBJECT;
ScrollSelectionForm.INSIDE_FORM = " inside form";
ScrollSelectionForm.IS_IN_FORM = "isInForm";
ScrollSelectionForm.GET_SELECTED_INDEX = "getSelectedIndexForPoint";
