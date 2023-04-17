"use client";

import classes from "./Write.module.css";
import Preview from "./Preview";
import { useState } from "react";

export default function Write() {
  const [content, setContent] = useState<HTMLElement>("");

  const contentChangeHandler = (e: React.SyntheticEvent) => {
    setContent(e.currentTarget.innerHTML);
  };

  return (
    <>
      <div className={classes.write_card}>
        <div
          onInput={contentChangeHandler}
          className={classes.write_container}
          contentEditable={true}
        ></div>

        <Preview content={content} />
      </div>
    </>
  );
}
