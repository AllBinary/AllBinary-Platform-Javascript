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
//not GWT import const Transformer
import { TransformerFactory } from '../../../../../../javax/xml/transform/TransformerFactory.js';
//not GWT import const TransformerFactory
import { DOMSource } from '../../../../../../javax/xml/transform/dom/DOMSource.js';
//not GWT import const DOMSource
import { StreamResult } from '../../../../../../javax/xml/transform/stream/StreamResult.js';
//not GWT import const AbDataOutputStream
import { AbFileInputStream } from '../../../../../../org/allbinary/logic/io/AbFileInputStream.js';
//not GWT import const AbFileInputStream
import { DataOutputStreamFactory } from '../../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
//not GWT import const DataOutputStreamFactory
import { StreamUtil } from '../../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const Document
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DomDocumentHelper } from './DomDocumentHelper.js';
//sameFolderImports - not GWT import - same folder const DomDocumentHelper
export class DomDocumentFileHelper extends Object {
    //@Throws(Exception.constructor)
    static createDocument(xmlFile) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return DomDocumentHelper.create(new AbFileInputStream(xmlFile));
            ;
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
    //@Throws(Exception.constructor)
    static save(file, document) {
        let dataOutputStream = null;
        ;
        try {
            let copyTransformerFactory = TransformerFactory.newInstance();
            ;
            let copyTransformer = copyTransformerFactory.newTransformer();
            ;
            let domSource = new DOMSource(document);
            ;
            if (file.isFile()) {
                file.delete();
            }
            file.createNewFile();
            dataOutputStream = DataOutputStreamFactory.getInstance().getInstanceForAbFile(file);
            let streamResult = new StreamResult(dataOutputStream);
            ;
            copyTransformer.transform(domSource, streamResult);
            dataOutputStream.flush();
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
        finally {
            StreamUtil.getInstance().close(dataOutputStream);
        }
    }
    constructor() {
        super();
    }
}
