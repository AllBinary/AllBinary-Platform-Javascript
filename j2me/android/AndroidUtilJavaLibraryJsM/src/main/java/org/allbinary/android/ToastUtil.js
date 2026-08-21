/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { Toast } from '../../../android/widget/Toast.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ToastUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ToastUtil.instance;
    }
    makeToast(view, context, message, time) {
        //inner=true member= isStatic=
        class MakeToast extends Object {
            constructor(string) {
                super();
                this.string = string;
            }
            run() {
                var logUtil = LogUtil.getInstance();
                ;
                try {
                    Toast.makeText(context, this.string, time).show();
                    //: 
                }
                catch (e) {
                    var commonStrings = CommonStrings.getInstance();
                    ;
                    logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
                }
            }
        }
        view.post(new MakeToast(message));
    }
}
ToastUtil.instance = new ToastUtil();
