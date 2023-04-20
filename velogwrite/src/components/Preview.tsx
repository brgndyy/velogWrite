import classes from "./Preview.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const value = `hello
\n
\n
world
`;

const source = value.replace(/\n/gi, "\n &nbsp;");

type ContentType = {
  content: string;
};

export default function Preview({ content }: ContentType) {
  return (
    <>
      <div className={classes.preview_container}>
        <ReactMarkdown
          className={classes.markdown}
          remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  PreTag="div"
                  {...props}
                  style={materialDark}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...props}>{children}</code>
              );
            },
            img: (image) => (
              <Image
                src={image.src || ""}
                alt={image.alt || ""}
                width={500}
                height={300}
                className={classes.markdown_container_img}
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>
  );
}
