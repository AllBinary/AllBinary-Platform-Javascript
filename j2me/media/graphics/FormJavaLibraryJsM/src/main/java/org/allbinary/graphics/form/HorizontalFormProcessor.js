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
import { Processor } from '../../../../org/allbinary/canvas/Processor.js';
//sameFolderImports - not GWT import - same folder const ScrollCurrentSelectionForm
export class HorizontalFormProcessor extends Processor {
    constructor(scrollCurrentSelectionForm) {
        super();
        this.scrollCurrentSelectionForm = scrollCurrentSelectionForm;
    }
    //@Throws(Exception.constructor)
    process() {
        this.scrollCurrentSelectionForm.processHorizontalForm();
        this.scrollCurrentSelectionForm.processor = Processor.getInstance();
    }
}
