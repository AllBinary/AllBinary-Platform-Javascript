/* Generated Code Do Not Modify */
//not GWT import const Rectangle
import { RectangleFactory } from '../../../../org/allbinary/graphics/RectangleFactory.js';
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const ABCustomItem
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ABCustomForm } from './ABCustomForm.js';
//not GWT import - same folder const ABCustomForm
import { FormTypeFactory } from './FormTypeFactory.js';
//not GWT import - same folder const FormType
export class PaintableForm extends ABCustomForm {
    static getNullPaintableForm() {
        if (PaintableForm.NULL_PAINTABLE_FORM == NullUtil.getInstance().NULL_OBJECT) {
            PaintableForm.NULL_PAINTABLE_FORM = new PaintableForm(StringUtil.getInstance().EMPTY_STRING, [], BasicColorFactory.getInstance().BLACK, BasicColorFactory.getInstance().WHITE);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return PaintableForm.NULL_PAINTABLE_FORM;
    }
    constructor(title, items, backgroundBasicColor, foregroundBasicColor) {
        super(title, items, backgroundBasicColor, foregroundBasicColor);
        this.canvasStrings = CanvasStrings.getInstance();
        this.rectangle = RectangleFactory.SINGLETON;
        this.x = 0;
        this.y = 0;
        this.formType = FormTypeFactory.getInstance().NULL_FORM_TYPE;
        //For kotlin this is before the body of the constructor.
        this.setSelectedIndex(0);
    }
    //@Throws(Exception.constructor)
    init(rectangle, formType) {
        this.rectangle = rectangle;
        var point = this.rectangle.getPoint();
        ;
        this.x = point.getX();
        this.y = point.getY();
        this.formType = formType;
    }
    getWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rectangle.getWidth();
        ;
    }
}
PaintableForm.NULL_PAINTABLE_FORM = NullUtil.getInstance().NULL_OBJECT;
