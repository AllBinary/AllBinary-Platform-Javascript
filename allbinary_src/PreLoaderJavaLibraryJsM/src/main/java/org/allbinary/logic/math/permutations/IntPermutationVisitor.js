/* Generated Code Do Not Modify */
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { Visitor } from '../../../../../org/allbinary/logic/util/visitor/Visitor.js';
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class IntPermutationVisitor extends Visitor {
    constructor(data) {
        super();
        this.stringBuilder = new StringMaker();
        this.data = data;
    }
    visit(anyType = {}) {
        this.stringBuilder.delete(0, stringBuilder.length());
        this.print(this.data, stringBuilder);
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
    print(data) {
        var stringBuilder = new StringMaker();
        ;
        this.print(data, stringBuilder);
    }
    print(data, stringBuilder) {
        var commonSeps = CommonSeps.getInstance();
        ;
        var size = data.length;
        ;
        for (var i = 0; i < size; i++) {
            stringBuilder.appendint(data[i]);
            stringBuilder.append(commonSeps.SPACE);
        }
        console.log(stringBuilder.toString());
    }
}
