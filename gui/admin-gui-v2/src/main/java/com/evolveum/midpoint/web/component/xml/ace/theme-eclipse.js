/*
 * Copyright (c) 2011 Evolveum
 *
 * The contents of this file are subject to the terms
 * of the Common Development and Distribution License
 * (the License). You may not use this file except in
 * compliance with the License.
 *
 * You can obtain a copy of the License at
 * http://www.opensource.org/licenses/cddl1 or
 * CDDLv1.0.txt file in the source code distribution.
 * See the License for the specific language governing
 * permission and limitations under the License.
 *
 * If applicable, add the following below the CDDL Header,
 * with the fields enclosed by brackets [] replaced by
 * your own identifying information:
 *
 * Portions Copyrighted 2011 [name of copyright owner]
 */

define("ace/theme/eclipse", ["require", "exports", "module"], function (a, b, c) {
    var d = a("pilot/dom"), e = ".ace-eclipse .ace_editor {\n  border: 2px solid rgb(159, 159, 159);\n}\n\n.ace-eclipse .ace_editor.ace_focus {\n  border: 2px solid #327fbd;\n}\n\n.ace-eclipse .ace_gutter {\n  width: 50px;\n  background: rgb(227, 227, 227);\n  border-right: 1px solid rgb(159, 159, 159);\t \n  color: rgb(136, 136, 136);\n}\n\n.ace-eclipse .ace_gutter-layer {\n  width: 100%;\n  text-align: right;\n}\n\n.ace-eclipse .ace_gutter-layer .ace_gutter-cell {\n  padding-right: 6px;\n}\n\n.ace-eclipse .ace_text-layer {\n  cursor: text;\n}\n\n.ace-eclipse .ace_cursor {\n  border-left: 1px solid black;\n}\n\n.ace-eclipse .ace_line .ace_keyword, .ace-eclipse .ace_line .ace_variable {\n  color: rgb(127, 0, 85);\n}\n\n.ace-eclipse .ace_line .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-eclipse .ace_line .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-eclipse .ace_line .ace_function {\n  color: rgb(60, 76, 114);\n}\n\n.ace-eclipse .ace_line .ace_string {\n  color: rgb(42, 0, 255);\n}\n\n.ace-eclipse .ace_line .ace_comment {\n  color: rgb(63, 127, 95);\n}\n\n.ace-eclipse .ace_line .ace_comment.ace_doc {\n  color: rgb(63, 95, 191);\n}\n\n.ace-eclipse .ace_line .ace_comment.ace_doc.ace_tag {\n  color: rgb(127, 159, 191);\n}\n\n.ace-eclipse .ace_line .ace_constant.ace_numeric {\n}\n\n.ace-eclipse .ace_line .ace_tag {\n\tcolor: rgb(63, 127, 127);\n}\n\n.ace-eclipse .ace_line .ace_xml_pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-eclipse .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n\n.ace-eclipse .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-eclipse .ace_marker-layer .ace_active_line {\n  background: rgb(232, 242, 254);\n}";
    d.importCssString(e), b.cssClass = "ace-eclipse"
})