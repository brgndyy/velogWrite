"use client";

import classes from "./Write.module.css";
import Preview from "./Preview";
import { useState } from "react";
import dynamic from "next/dynamic";

const EditorBox = dynamic(() => import("./EditorBox"), { ssr: false });

export default function Write() {
  const [content, setContent] = useState("안녕하세요");

  return (
    <>
      <div className={classes.write_card}>
        <EditorBox content={content} />
        <Preview content={content} />
      </div>
    </>
  );
}
