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
//not GWT import const SimpleProgressActivityInterface = globalThis.org.allbinary.android.activity.SimpleProgressActivityInterface;
//not plain js import { ARunnable } 
const ARunnable = globalThis.org.allbinary.thread.ARunnable;
//not GWT import - same folder const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;
export class ProgressRunnable extends ARunnable {
    constructor(midletActivity, progressCanvas) {
        super();
        var midletActivity2 = midletActivity;
        ;
        this.midletActivity = midletActivity2;
        this.progressCanvas = progressCanvas;
    }
    run() {
    }
}
