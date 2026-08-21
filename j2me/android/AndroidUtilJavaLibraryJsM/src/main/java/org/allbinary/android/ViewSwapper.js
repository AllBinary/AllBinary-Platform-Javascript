/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ViewSwapper extends Object {
    constructor(activity, rootViewId) {
        super();
        this.currentMainViewId = -1;
        this.mainViewArray = ViewSwapper.NULL_VIEW_ARRAY;
        this.topViewArray = ViewSwapper.NULL_VIEW_ARRAY;
        this.activity = activity;
        this.rootViewId = rootViewId;
    }
    setMainViews(viewArray) {
        this.mainViewArray = viewArray;
    }
    setTopViewArray(topViewArray) {
        this.topViewArray = topViewArray;
    }
    setMainView(id) {
        var viewGroup = this.activity.findViewById(this.rootViewId);
        ;
        if (id != this.currentMainViewId) {
            for (var index = 0; index < this.topViewArray.length; index++) {
                viewGroup.removeView(this.topViewArray[index]);
            }
            for (var index = 0; index < this.mainViewArray.length; index++) {
                if (id != this.mainViewArray[index].getId()) {
                    viewGroup.removeView(this.mainViewArray[index]);
                }
            }
            for (var index = 0; index < this.mainViewArray.length; index++) {
                if (id == this.mainViewArray[index].getId()) {
                    viewGroup.addView(this.mainViewArray[index]);
                    this.currentMainViewId = id;
                }
            }
            for (var index = 0; index < this.topViewArray.length; index++) {
                viewGroup.addView(this.topViewArray[index]);
            }
        }
    }
}
ViewSwapper.NULL_VIEW_ARRAY = [];
