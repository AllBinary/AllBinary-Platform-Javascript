/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PlatformImage } from './PlatformImage.js';
//PlatformNullImageJavaLibrary
export class PostLoadPlatformImage extends PlatformImage {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PostLoadPlatformImage.instance;
    }
}
PostLoadPlatformImage.instance = new PostLoadPlatformImage();
