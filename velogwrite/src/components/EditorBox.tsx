import React from "react";

import classes from "./EditorBox.module.css";

type ContentType = {
  content: string;
};

export default function EditorBox({ content }: ContentType) {
  return (
    <>
      <div className={classes.editorBox_container}></div>
    </>
  );
}
