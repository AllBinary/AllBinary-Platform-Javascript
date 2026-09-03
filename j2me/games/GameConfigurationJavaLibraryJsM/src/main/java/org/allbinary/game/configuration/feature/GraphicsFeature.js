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
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Feature } from './Feature.js';
//not GWT import const Feature = globalThis.org.allbinary.game.configuration.feature.Feature;
export class GraphicsFeature extends Feature {
    constructor(name) {
        super(name);
        //For kotlin this is before the body of the constructor.
    }
}
