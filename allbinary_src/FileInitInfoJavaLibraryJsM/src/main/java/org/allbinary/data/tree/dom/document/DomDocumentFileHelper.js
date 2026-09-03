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
//not GWT import const Transformer = globalThis.javax.xml.transform.Transformer;
import { TransformerFactory } from '../../../../../../javax/xml/transform/TransformerFactory.js';
//not GWT import const TransformerFactory = globalThis.javax.xml.transform.TransformerFactory;
import { DOMSource } from '../../../../../../javax/xml/transform/dom/DOMSource.js';
//not GWT import const DOMSource = globalThis.javax.xml.transform.dom.DOMSource;
import { StreamResult } from '../../../../../../javax/xml/transform/stream/StreamResult.js';
//not GWT import const AbDataOutputStream = globalThis.org.allbinary.logic.io.AbDataOutputStream;
import { AbFileInputStream } from '../../../../../../org/allbinary/logic/io/AbFileInputStream.js';
//not GWT import const AbFileInputStream = globalThis.org.allbinary.logic.io.AbFileInputStream;
import { DataOutputStreamFactory } from '../../../../../../org/allbinary/logic/io/DataOutputStreamFactory.js';
//not GWT import const DataOutputStreamFactory = globalThis.org.allbinary.logic.io.DataOutputStreamFactory;
import { StreamUtil } from '../../../../../../org/allbinary/logic/io/StreamUtil.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DomDocumentHelper } from './DomDocumentHelper.js';
//not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;
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
