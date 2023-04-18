import React from "react";
import { Editor } from "@toast-ui/react-editor";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import classes from "./EditorBox.module.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
type ContentType = {
  content: string;
};

const toolbarItems = [
  ["heading", "bold", "italic", "strike"],
  ["hr"],
  ["ul", "ol", "task"],
  ["table", "link"],
  ["image"],
  ["code"],
  ["scrollSync"],
];

export default function EditorBox({ content }: ContentType) {
  return (
    <>
      <div className={classes.editorBox_container}>
        <Editor
          toolbarItems={toolbarItems}
          initialValue={content}
          placeholder="글을 작성해주세요"
          plugins={[colorSyntax]}
          height="60rem"
          initialEditType="markdown"
        />
      </div>
    </>
  );
}
