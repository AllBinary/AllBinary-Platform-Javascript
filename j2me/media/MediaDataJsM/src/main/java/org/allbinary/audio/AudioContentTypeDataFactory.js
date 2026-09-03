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
/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AudioContentTypeData } from './AudioContentTypeData.js';
//not GWT import const AudioContentTypeData = globalThis.org.allbinary.audio.AudioContentTypeData;
export class AudioContentTypeDataFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AudioContentTypeDataFactory.instance;
    }
    constructor() {
        super();
        this.MIME_AUDIO_TONE = new AudioContentTypeData("audio/x-tone-seq");
        this.MIME_AUDIO_AMR = new AudioContentTypeData("audio/amr");
        this.MIME_AUDIO_AMR_WB = new AudioContentTypeData("audio/amr-wb");
        this.MIME_AUDIO_WAV = new AudioContentTypeData("audio/x-wav");
        this.MIME_AUDIO_MIDI = new AudioContentTypeData("audio/midi");
        this.MIME_AUDIO_SP_MIDI = new AudioContentTypeData("audio/sp-midi");
    }
}
AudioContentTypeDataFactory.instance = new AudioContentTypeDataFactory();
