import classes from "./Preview.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

type ContentType = {
  content: string;
};

export default function Preview({ content }: ContentType) {
  return (
    <>
      <div className={classes.preview_container}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </>
  );
}
