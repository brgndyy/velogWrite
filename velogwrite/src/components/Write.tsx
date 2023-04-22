"use client";

import classes from "./Write.module.css";
import Preview from "./Preview";
import { useState } from "react";
import EditorBox from "./EditorBox";

export default function Write() {
  const [content, setContent] = useState("안녕하세요");

  return (
    <>
      <div className={classes.write_card}>
        <EditorBox content={content} />
        {/* <Preview content={content} /> */}
      </div>
    </>
  );
}
