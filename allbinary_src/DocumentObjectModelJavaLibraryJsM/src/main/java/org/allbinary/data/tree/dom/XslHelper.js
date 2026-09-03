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
import { Object } from '../../../../../java/lang/Object.js';
import { ByteArrayOutputStream } from '../../../../../java/io/ByteArrayOutputStream.js';
//not GWT import const OutputStream = globalThis.java.io.OutputStream;
import { StringBufferInputStream } from '../../../../../java/io/StringBufferInputStream.js';
//not GWT import const Transformer = globalThis.javax.xml.transform.Transformer;
import { TransformerFactory } from '../../../../../javax/xml/transform/TransformerFactory.js';
//not GWT import const URIResolver = globalThis.javax.xml.transform.URIResolver;
import { StreamResult } from '../../../../../javax/xml/transform/stream/StreamResult.js';
//not GWT import const StreamResult = globalThis.javax.xml.transform.stream.StreamResult;
import { StreamSource } from '../../../../../javax/xml/transform/stream/StreamSource.js';
//not GWT import const StreamSource = globalThis.javax.xml.transform.stream.StreamSource;
import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;
//Current folder imports from return types, extended types, and scope (deduplicated)
//import org.allbinary.data.tree.dom.document.DomDocumentHelper;
export class XslHelper extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return XslHelper.instance;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    translate(xsltStreamSource, xmlStreamSource, streamResult) {
        try {
            var transformerFactory = TransformerFactory.newInstance();
            ;
            var transformer = transformerFactory.newTransformer(xsltStreamSource);
            ;
            transformer.transform(xmlStreamSource, streamResult);
            //if statement needs to be on the same line and ternary does not work the same way.
            return streamResult.getOutputStream();
            ;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    translate(resolver, xsltStreamSource, xmlStreamSource, streamResult) {
        try {
            var tFactory = TransformerFactory.newInstance();
            ;
            tFactory.setURIResolver(resolver);
            var transformer = tFactory.newTransformer(xsltStreamSource);
            ;
            transformer.transform(xmlStreamSource, streamResult);
            //if statement needs to be on the same line and ternary does not work the same way.
            return streamResult.getOutputStream();
            ;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    translate(xsltStreamSource, xmlDocument) {
        try {
            var outputStream = new ByteArrayOutputStream();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.translate(xsltStreamSource, new StreamSource(new StringBufferInputStream(DomDocumentHelper.toString(xmlDocument))), new StreamResult(outputStream)).toString();
            ;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    translate(xsltStreamSource, xmlStreamSource) {
        try {
            var outputStream = new ByteArrayOutputStream();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.translate(xsltStreamSource, xmlStreamSource, new StreamResult(outputStream)).toString();
            ;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    translate(resolver, xsltStreamSource, xmlStreamSource) {
        try {
            var outputStream = new ByteArrayOutputStream();
            ;
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.translate(resolver, xsltStreamSource, xmlStreamSource, new StreamResult(outputStream)).toString();
            ;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
    //@Throws(Exception.constructor)
    export(outputFile, xsltFilePath, xmlDocument) {
        try {
            outputFile.createNewFile();
            this.translate(new StreamSource(xsltFilePath), new StreamSource(new StringBufferInputStream(DomDocumentHelper.toString(xmlDocument))), new StreamResult(outputFile));
            //: 
        }
        catch (e) {
            throw e;
        }
    }
}
XslHelper.instance = new XslHelper();
