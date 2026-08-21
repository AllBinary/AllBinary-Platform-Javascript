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
import { Processor } from '../../../../org/allbinary/canvas/Processor.js';
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ScrollSelectionForm } from './ScrollSelectionForm.js';
import { ItemIndexDx } from './ItemIndexDx.js';
import { FormTypeFactory } from './FormTypeFactory.js';
export class ScrollCurrentSelectionForm extends ScrollSelectionForm {
    constructor(title, items, formPaintableFactory, border, adjustedExtraBorder, moveForSmallScreen, backgroundBasicColor, foregroundBasicColor) {
        super(title, items, formPaintableFactory, border, adjustedExtraBorder, backgroundBasicColor, foregroundBasicColor);
        //inner= member=true isStatic=
        this.TempHorizontalFormProcessor = class extends Processor {
            constructor(scrollCurrentSelectionForm) {
                super();
                this.scrollCurrentSelectionForm = scrollCurrentSelectionForm;
            }
            //@Throws(Exception.constructor)
            process() {
                this.scrollCurrentSelectionForm.processTempHorizontalForm();
                this.scrollCurrentSelectionForm.processor = Processor.getInstance();
            }
        };
        //inner= member=true isStatic=
        this.HorizontalFormProcessor = class extends Processor {
            constructor(scrollCurrentSelectionForm) {
                super();
                this.scrollCurrentSelectionForm = scrollCurrentSelectionForm;
            }
            //@Throws(Exception.constructor)
            process() {
                this.scrollCurrentSelectionForm.processHorizontalForm();
                this.scrollCurrentSelectionForm.processor = Processor.getInstance();
            }
        };
        //inner= member=true isStatic=
        this.VerticalFormProcessor = class extends Processor {
            constructor(scrollCurrentSelectionForm) {
                super();
                this.scrollCurrentSelectionForm = scrollCurrentSelectionForm;
            }
            //@Throws(Exception.constructor)
            process() {
                this.scrollCurrentSelectionForm.processVerticalForm();
                this.scrollCurrentSelectionForm.processor = Processor.getInstance();
            }
        };
        //inner= member=true isStatic=
        this.TempHorizontalItemIndexDx = class extends ItemIndexDx {
            constructor(scrollCurrentSelectionForm) {
                super();
                this.scrollCurrentSelectionForm = scrollCurrentSelectionForm;
            }
            //@Throws(Exception.constructor)
            getDx(index, item, dx, dy) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.scrollCurrentSelectionForm.getXTempHorizontalForm(index, item, dx, dy);
                ;
            }
        };
        //inner= member=true isStatic=
        this.HorizontalItemIndexDx = class extends ItemIndexDx {
            constructor(scrollCurrentSelectionForm) {
                super();
                this.scrollCurrentSelectionForm = scrollCurrentSelectionForm;
            }
            //@Throws(Exception.constructor)
            getDx(index, item, dx, dy) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.scrollCurrentSelectionForm.getXHorizontalForm(index, item, dx, dy);
                ;
            }
        };
        //inner= member=true isStatic=
        this.VerticalItemIndexDx = class extends ItemIndexDx {
            constructor(scrollCurrentSelectionForm) {
                super();
                this.scrollCurrentSelectionForm = scrollCurrentSelectionForm;
            }
            //@Throws(Exception.constructor)
            getDx(index, item, dx, dy) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.scrollCurrentSelectionForm.getXVerticalForm(index, item, dx, dy);
                ;
            }
        };
        this.updateMyFontProcessor = new UpdateMyFontProcessor(this);
        this.myFontProcessor = this.updateMyFontProcessor;
        this.processor = Processor.getInstance();
        this.preItemIndexDx = ItemIndexDx.getInstance();
        this.dx = 0;
        this.dy = 0;
        this.maxWidth = 0;
        //For kotlin this is before the body of the constructor.
        this.moveForSmallScreen = moveForSmallScreen;
    }
    //@Throws(Exception.constructor)
    init(rectangle, formType) {
        super.init(rectangle, formType);
        var formTypeFactory = FormTypeFactory.getInstance();
        ;
        if (formType == formTypeFactory.TEMP_HORIZONTAL_FORM) {
            this.processor = new this.TempHorizontalFormProcessor(this);
            this.preItemIndexDx = new this.TempHorizontalItemIndexDx(this);
        }
        else if (formType == formTypeFactory.HORIZONTAL_FORM) {
            this.processor = new this.HorizontalFormProcessor(this);
            this.preItemIndexDx = new this.HorizontalItemIndexDx(this);
        }
        else if (formType == formTypeFactory.VERTICAL_CENTER_FORM) {
            this.processor = new this.VerticalFormProcessor(this);
            this.preItemIndexDx = new this.VerticalItemIndexDx(this);
        }
        else if (formType == formTypeFactory.NULL_FORM_TYPE) {
        }
        else {
            this.logUtil.putF(formTypeFactory.UNK, this, this.commonStrings.INIT);
        }
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    updateMeasurement(graphics) {
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    processTempHorizontalForm() {
        this.dx = this.x - 30 + (this.rectangle.getWidth() >> 1);
        this.dy = this.y;
    }
    processHorizontalForm() {
        var size = this.size();
        ;
        var totalWidth = 0;
        ;
        var item;
        ;
        for (var index = 0; index < size; index++) {
            item = this.get(index);
            totalWidth += item.getMinimumWidth() + this.border;
        }
        this.dx = this.x + (this.rectangle.getWidth() >> 1) - (totalWidth >> 1);
        this.dy = this.y + (this.rectangle.getHeight() >> 1);
        if (this.moveForSmallScreen) {
            var maxTitleHeight = 175;
            ;
            if (this.dy < maxTitleHeight) {
                this.dy = maxTitleHeight;
            }
        }
    }
    processVerticalForm() {
        var totalHeight = 0;
        ;
        var size = this.size();
        ;
        var item2;
        ;
        for (var index = 0; index < size; index++) {
            item2 = this.get(index);
            if (this.maxWidth < item2.getMinimumWidth()) {
                this.maxWidth = item2.getMinimumWidth();
            }
            totalHeight += item2.getMinimumHeight() + this.border;
        }
        this.dx = ((this.rectangle.getWidth() - this.maxWidth) / 2);
        if (this.size() > 0) {
            this.dy = this.y + ((this.rectangle.getHeight() - totalHeight) / 2);
            if (this.moveForSmallScreen) {
                var maxTitleHeight = 175;
                ;
                if (this.dy < maxTitleHeight) {
                    this.dy = maxTitleHeight;
                }
            }
        }
        else {
            this.dy = this.y;
        }
    }
    getXTempHorizontalForm(index, item, dx, dy) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getDiffX(item);
        ;
    }
    getXHorizontalForm(index, item, dx, dy) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getXVerticalForm(index, item, dx, dy) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getDiffX(item) + this.halfBorder;
    }
    getDiffX(item) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ((this.maxWidth - item.getMinimumWidth()) >> 1);
    }
    getDx() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.dx;
    }
    getDy() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.dy;
    }
    paint(graphics) {
        try {
            this.processor.process();
            var delta = 0;
            ;
            var deltaX = this.getDx();
            ;
            var deltaY = this.getDy();
            ;
            var size = this.size();
            ;
            var formTypeFactory = FormTypeFactory.getInstance();
            ;
            var item;
            ;
            for (var index = 0; index < size; index++) {
                item = this.get(index);
                var diffX = this.preItemIndexDx.getDx(index, item, this.dx, this.dy);
                ;
                if (index == this.getSelectedIndex()) {
                    delta = this.paintItem(graphics, index, item, deltaX + diffX, deltaY);
                    this.paintable.paint(graphics, index, deltaX + diffX, deltaY);
                }
                else {
                    delta = this.paintUnselectedItem(graphics, index, item, deltaX + diffX, deltaY);
                    this.paintable.paint(graphics, index, deltaX + diffX, deltaY);
                }
                if (this.formType == formTypeFactory.TEMP_HORIZONTAL_FORM) {
                }
                else if (this.formType == formTypeFactory.HORIZONTAL_FORM) {
                    deltaX = delta;
                }
                else if (this.formType == formTypeFactory.VERTICAL_CENTER_FORM) {
                    deltaY = delta;
                }
                else {
                    throw new Exception(formTypeFactory.UNK);
                }
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.canvasStrings.PAINT, e);
        }
    }
}
