/* Generated Code Do Not Modify */
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import const Visitor
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ObjectPermutationVisitor extends Visitor {
    constructor(data) {
        super();
        this.stringBuilder = new StringMaker();
        this.data = data;
    }
    visit(anyType) {
        this.stringBuilder.delete(0, this.stringBuilder.length());
        this.print(this.data, stringBuilder);
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.getInstance().NULL_OBJECT;
    }
    print(...args) {
        if (args.length === 1)
            return this.print$overload1(args[0]);
        if (args.length === 2)
            return this.print$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: print');
    }
    print$overload1(data) {
        let stringBuilder = new StringMaker();
        ;
        this.print(data, stringBuilder);
    }
    print$overload2(data, stringBuilder) {
        let tsUtil = TsUtil.getInstance();
        ;
        let size = data.length;
        ;
        for (let i = 0; i < size; i++) {
            stringBuilder.appendint(tsUtil.hashCode(data[i]));
            stringBuilder.append(CommonSeps.getInstance().SPACE);
        }
        console.log(stringBuilder.toString());
    }
}
