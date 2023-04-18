import ReactCodeMirror from "@uiw/react-codemirror";
import {
  loadLanguage,
  langNames,
  langs,
} from "@uiw/codemirror-extensions-langs";
import classes from "./EditorBox.module.css";
import createTheme from "@uiw/codemirror-themes";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

const code = `## Title

\`\`\`jsx
function Demo() {
  return <div>demo</div>
}
\`\`\`

\`\`\`bash
# Not dependent on uiw.
npm install @codemirror/lang-markdown --save
npm install @codemirror/language-data --save
\`\`\`

[weisit ulr](https://uiwjs.github.io/react-codemirror/)

\`\`\`go
package main
import "fmt"
func main() {
  fmt.Println("Hello, 世界")
}
\`\`\`
`;

type ContentType = {
  content: string;
  contentHandler: () => void;
};

const myTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#121212",
    foreground: "#4D4D4C",
    caret: "#AEAFAD",
    selection: "#D6D6D6",
    selectionMatch: "#D6D6D6",
    gutterBackground: "#FFFFFF",
    gutterForeground: "#4D4D4C",
    gutterBorder: "#ddd",
    gutterActiveForeground: "",
    lineHighlight: "#EFEFEF",
  },
  styles: [],
});

loadLanguage("tsx");

export default function EditorBox({ content, contentHandler }: ContentType) {
  return (
    <>
      <div className={classes.editorBox_container}>
        <ReactCodeMirror
          value={content}
          onChange={contentHandler}
          height="100vh"
          basicSetup={{
            foldGutter: false,
            lineNumbers: false,
            highlightActiveLine: false,
          }}
          extensions={[
            markdown({ base: markdownLanguage, codeLanguages: languages }),
          ]}
        />
      </div>
    </>
  );
}
