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
import { SequenceAI } from '../../../../org/allbinary/game/ai/sequence/SequenceAI.js';
import { GroupLayerManagerListener } from '../../../../org/allbinary/game/layer/identification/GroupLayerManagerListener.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class NumberOnOwnGroupSequenceAI extends SequenceAI {
    constructor(numberOnSameTeam, artificialIntelligenceInterface, ownerLayerInterface, gameInput) {
        super(artificialIntelligenceInterface, ownerLayerInterface, gameInput);
        //For kotlin this is before the body of the constructor.
        this.numberOnSameTeam = numberOnSameTeam;
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        var layerInterface = this.getOwnerLayerInterface();
        ;
        var index = this.getIndex();
        ;
        if (this.numberOnSameTeam.length > index) {
            var size = GroupLayerManagerListener.getInstance().getGroupSizeFromInterface(layerInterface);
            ;
            if (this.numberOnSameTeam[index].intValue() > size) {
                this.next();
            }
        }
        super.processAI(allBinaryLayerManager);
    }
}
