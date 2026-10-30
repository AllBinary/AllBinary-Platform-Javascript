/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
//not GWT import const IntBuffer
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class NullGL10 extends Object {
    glActiveTexture(texture) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glAlphaFunc(func, ref) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glBindTexture(target, texture) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glBlendFunc(sfactor, dfactor) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glClear(mask) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glClearColor(red, green, blue, alpha) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glClearDepthf(depth) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glClearStencil(s) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glClientActiveTexture(texture) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glColor4f(red, green, blue, alpha) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glColorMask(red, green, blue, alpha) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glColorPointer(size, type, stride, pointer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glCompressedTexImage2D(target, level, internalformat, width, height, border, imageSize, data) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glCopyTexImage2D(target, level, internalformat, x, y, width, height, border) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glCopyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glCullFace(mode) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glDeleteTextures(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glDeleteTextures$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glDeleteTextures$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glDeleteTextures');
    }
    glDeleteTextures$overload1(n, textures, offset) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glDeleteTextures$overload2(n, textures) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glDepthFunc(func) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glDepthMask(flag) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glDepthRangef(zNear, zFar) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glDisable(cap) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glDisableClientState(array) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glDrawArrays(mode, first, count) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glDrawElements(mode, count, type, indices) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glEnable(cap) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glEnableClientState(array) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glFinish() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glFlush() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glFogf(pname, param) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glFogfv(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glFogfv$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glFogfv$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glFogfv');
    }
    glFogfv$overload1(pname, params, offset) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glFogfv$overload2(pname, params) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glFrontFace(mode) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glFrustumf(left, right, bottom, top, zNear, zFar) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glGenTextures(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glGenTextures$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glGenTextures$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glGenTextures');
    }
    glGenTextures$overload1(n, textures, offset) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glGenTextures$overload2(n, textures) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glGetError() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    glGetIntegerv(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glGetIntegerv$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glGetIntegerv$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glGetIntegerv');
    }
    glGetIntegerv$overload1(pname, params, offset) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glGetIntegerv$overload2(pname, params) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glGetString(name) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    glHint(target, mode) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glLightModelf(pname, param) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glLightModelfv(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glLightModelfv$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glLightModelfv$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glLightModelfv');
    }
    glLightModelfv$overload1(pname, params, offset) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glLightModelfv$overload2(pname, params) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glLightf(light, pname, param) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glLightfv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glLightfv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glLightfv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glLightfv');
    }
    glLightfv$overload1(light, pname, params, offset) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glLightfv$overload2(light, pname, params) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glLineWidth(width) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glLoadIdentity() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glLoadMatrixf(...args) {
        if (args.length === 2 && typeof args[1] === 'number')
            return this.glLoadMatrixf$overload1(args[0], args[1]);
        if (args.length === 1)
            return this.glLoadMatrixf$overload2(args[0]);
        throw new TypeError('No matching overload: glLoadMatrixf');
    }
    glLoadMatrixf$overload1(m, offset) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glLoadMatrixf$overload2(m) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glLogicOp(opcode) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glMaterialf(face, pname, param) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glMaterialfv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glMaterialfv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glMaterialfv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glMaterialfv');
    }
    glMaterialfv$overload1(face, pname, params, offset) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glMaterialfv$overload2(face, pname, params) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glMatrixMode(mode) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glMultMatrixf(...args) {
        if (args.length === 2 && typeof args[1] === 'number')
            return this.glMultMatrixf$overload1(args[0], args[1]);
        if (args.length === 1)
            return this.glMultMatrixf$overload2(args[0]);
        throw new TypeError('No matching overload: glMultMatrixf');
    }
    glMultMatrixf$overload1(m, offset) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glMultMatrixf$overload2(m) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glMultiTexCoord4f(target, s, t, r, q) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glNormal3f(nx, ny, nz) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glNormalPointer(type, stride, pointer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glOrthof(left, right, bottom, top, zNear, zFar) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glPixelStorei(pname, param) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glPointSize(size) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glPolygonOffset(factor, units) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glPopMatrix() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glPushMatrix() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glReadPixels(x, y, width, height, format, type, pixels) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glRotatef(angle, x, y, z) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glRotatex(angle, x, y, z) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glSampleCoverage(value, invert) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glScalef(x, y, z) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glScalex(x, y, z) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glScissor(x, y, width, height) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glShadeModel(mode) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glStencilFunc(func, ref, mask) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glStencilMask(mask) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glStencilOp(fail, zfail, zpass) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glTexCoordPointer(size, type, stride, pointer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glTexEnvf(target, pname, param) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glTexEnvfv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glTexEnvfv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glTexEnvfv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glTexEnvfv');
    }
    glTexEnvfv$overload1(target, pname, params, offset) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glTexEnvfv$overload2(target, pname, params) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glTexParameterf(target, pname, param) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glTexParameteri(target, pname, param) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glTranslatef(x, y, z) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glVertexPointer(size, type, stride, pointer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glViewport(x, y, width, height) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glBegin(i) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glEnd() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glVertex3f(f, f2, f3) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
    glPolygonMode(i, i1) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return;
    }
}
NullGL10.NULL_GL10 = new NullGL10();
