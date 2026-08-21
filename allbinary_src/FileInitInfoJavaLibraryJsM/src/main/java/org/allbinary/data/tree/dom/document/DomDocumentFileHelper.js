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
import { Object } from '../../../../../../java/lang/Object.js';
import { TransformerFactory } from '../../../../../../javax/xml/transform/TransformerFactory.js';
import { DOMSource } from '../../../../../../javax/xml/transform/dom/DOMSource.js';
import { StreamResult } from '../../../../../../javax/xml/transform/stream/StreamResult.js';
import { AbFileInputStream } from '../../../../../../org/allbinary/logic/io/AbFileInputStream.js';
import { DataOutputStreamFactory } from '../../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
import { StreamUtil } from '../../../../../../org/allbinary/logic/io/StreamUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DomDocumentHelper } from './DomDocumentHelper.js';
export class DomDocumentFileHelper extends Object {
    //@Throws(Exception.constructor)
    static createDocument(xmlFile) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return DomDocumentHelper.create(new AbFileInputStream(xmlFile));
            ;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    static save(file, document) {
        var dataOutputStream = null;
        ;
        try {
            var copyTransformerFactory = TransformerFactory.newInstance();
            ;
            var copyTransformer = copyTransformerFactory.newTransformer();
            ;
            var domSource = new DOMSource(document);
            ;
            if (file.isFile()) {
                file.delete();
            }
            file.createNewFile();
            dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(file);
            var streamResult = new StreamResult(dataOutputStream);
            ;
            copyTransformer.transform(domSource, streamResult);
            dataOutputStream.flush();
            //: 
        }
        catch (e) {
            throw e;
        }
        finally {
            StreamUtil.getInstance().close(dataOutputStream);
        }
    }
    constructor() {
        super();
    }
}
