"use client";

import classes from "./Write.module.css";
import Preview from "./Preview";
import { useState } from "react";

export default function Write() {
  const [content, setContent] = useState("");

  return (
    <>
      <div className={classes.write_card}>
        <Preview content={content} />
      </div>
    </>
  );
}
