/* Generated Code Do Not Modify */
import { Exception } from '../../../../java/lang/Exception.js';
//not plain js import { Font } from '../../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { J2MEUtil } from '../../../../org/allbinary/J2MEUtil.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ScrollSelectionForm } from './ScrollSelectionForm.js';
//not GWT import const ScrollSelectionForm = globalThis.org.allbinary.graphics.form.ScrollSelectionForm;
import { ItemPaintableFactory } from './ItemPaintableFactory.js';
//not GWT import const FormType = globalThis.org.allbinary.graphics.form.FormType;
import { ItemIndexPaintable } from './ItemIndexPaintable.js';
//not GWT import const ItemIndexPaintable = globalThis.org.allbinary.graphics.form.ItemIndexPaintable;
import { FormTypeFactory } from './FormTypeFactory.js';
//not GWT import const FormTypeFactory = globalThis.org.allbinary.graphics.form.FormTypeFactory;
//import { MultipleScrollSelectionFormVerticalPaintable } from './MultipleScrollSelectionFormVerticalPaintable.js';
//not GWT import const MultipleScrollSelectionFormVerticalPaintable = globalThis.org.allbinary.graphics.form.MultipleScrollSelectionFormVerticalPaintable;
//import { MultipleScrollSelectionFormHorizontalPaintable } from './MultipleScrollSelectionFormHorizontalPaintable.js';
//not GWT import const MultipleScrollSelectionFormHorizontalPaintable = globalThis.org.allbinary.graphics.form.MultipleScrollSelectionFormHorizontalPaintable;
export class MultipleScrollSelectionForm extends ScrollSelectionForm {
    //@Throws(Exception.constructor)
    static createForm(title, items, rectangle, formType, border, backgroundBasicColor, foregroundBasicColor) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new MultipleScrollSelectionForm(title, items, ItemPaintableFactory.getInstance(), rectangle, formType, border, backgroundBasicColor, foregroundBasicColor);
    }
    constructor(title, items, formPaintableFactory, rectangle, formType, border, backgroundBasicColor, foregroundBasicColor) {
        super(title, items, formPaintableFactory, rectangle, formType, border, backgroundBasicColor, foregroundBasicColor);
        //inner= member=true isStatic=
        this.MultipleScrollSelectionFormHorizontalPaintable = class extends ItemIndexPaintable {
            constructor(multipleScrollSelectionForm) {
                super();
                this.multipleScrollSelectionForm = multipleScrollSelectionForm;
            }
            //@Throws(Exception.constructor)
            paint(graphics, index, item, dx, dy) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.multipleScrollSelectionForm.paintHorizontal(graphics, index, item, dx, dy);
                ;
            }
        };
        //inner= member=true isStatic=
        this.MultipleScrollSelectionFormVerticalPaintable = class extends ItemIndexPaintable {
            constructor(multipleScrollSelectionForm) {
                super();
                this.multipleScrollSelectionForm = multipleScrollSelectionForm;
            }
            //@Throws(Exception.constructor)
            paint(graphics, index, item, dx, dy) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.multipleScrollSelectionForm.paintVertical(graphics, index, item, dx, dy);
                ;
            }
        };
        this.formTypeFactory = FormTypeFactory.getInstance();
        this.formTypeItemIndexPaintable = ItemIndexPaintable.getInstance();
        this.backgroundColor = BasicColorFactory.getInstance().TRANSPARENT_GREY.intValue();
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.logged = false;
        this.fontHeight = 0;
        //For kotlin this is before the body of the constructor.
        if (formType == this.formTypeFactory.HORIZONTAL_FORM) {
            this.formTypeItemIndexPaintable = new this.MultipleScrollSelectionFormHorizontalPaintable(this);
        }
        else if (formType == this.formTypeFactory.VERTICAL_CENTER_FORM) {
            this.formTypeItemIndexPaintable = new this.MultipleScrollSelectionFormVerticalPaintable(this);
        }
        else if (formType == this.formTypeFactory.NULL_FORM_TYPE) {
        }
        else {
            throw new Exception(this.formTypeFactory.UNK);
        }
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.fontHeight = font.getHeight();
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    //@Throws(Exception.constructor)
    paintHorizontal(graphics, index, item, dx, dy) {
        var dx2 = this.paintItem(graphics, index, item, dx, dy) + this.border;
        ;
        this.paintable.paint(graphics, index, dx, dy);
        dx = dx2;
        //if statement needs to be on the same line and ternary does not work the same way.
        return dx;
    }
    //@Throws(Exception.constructor)
    paintVertical(graphics, index, item, dx, dy) {
        this.paintItem(graphics, index, item, dx, dy);
        this.paintable.paint(graphics, index, dx, dy);
        //if statement needs to be on the same line and ternary does not work the same way.
        return dx;
    }
    getStartIndex() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getSelectedIndex();
        ;
    }
    paint(graphics) {
        try {
            this.myFontProcessor.process(graphics);
            var start = this.getStartIndex();
            ;
            var size = this.size();
            ;
            var dx = this.x;
            ;
            var dy = this.y;
            ;
            if (J2MEUtil.isJ2ME()) {
            }
            else {
                graphics.setColor(this.backgroundColor);
                graphics.fillRect(this.x, this.y, this.rectangle.getWidth(), this.rectangle.getHeight());
            }
            graphics.drawString(this.getTitle(), this.x, this.y - this.fontHeight, 0);
            var item;
            ;
            for (var index = start; index < size; index++) {
                item = this.get(index);
                if (dx >= this.rectangle.getMaxX()) {
                    if (this.logged) {
                    }
                    else {
                        this.logged = true;
                        PreLogUtil.put(new StringMaker().append("painting beyond maxx: ").appendint(this.rectangle.getMaxX()).toString(), this, this.canvasStrings.PAINT);
                    }
                }
                dx = this.formTypeItemIndexPaintable.paint(graphics, index, item, dx, dy);
            }
            //: 
        }
        catch (e) {
            PreLogUtil.put(this.commonStrings.EXCEPTION, this, this.canvasStrings.PAINT);
        }
    }
}
