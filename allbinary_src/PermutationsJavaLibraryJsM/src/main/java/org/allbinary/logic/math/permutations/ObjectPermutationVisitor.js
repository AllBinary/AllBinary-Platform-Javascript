/* Generated Code Do Not Modify */
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil = globalThis.org.allbinary.TsUtil;
//not plain js import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;
//not plain js import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ObjectPermutationVisitor extends Visitor {
    constructor(data) {
        super();
        this.stringBuilder = new StringMaker();
        this.data = data;
    }
    visit(anyType = {}) {
        this.stringBuilder.delete(0, stringBuilder.length());
        this.print(this.data, stringBuilder);
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.getInstance().NULL_OBJECT;
    }
    print(data) {
        var stringBuilder = new StringMaker();
        ;
        this.print(data, stringBuilder);
    }
    print(data, stringBuilder) {
        var tsUtil = TsUtil.getInstance();
        ;
        var size = data.length;
        ;
        for (var i = 0; i < size; i++) {
            stringBuilder.appendint(tsUtil.hashCode(data[i]));
            stringBuilder.append(CommonSeps.getInstance().SPACE);
        }
        console.log(stringBuilder.toString());
    }
}
