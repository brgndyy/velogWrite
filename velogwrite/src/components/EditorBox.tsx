import ReactCodeMirror from "@uiw/react-codemirror";
import {
  loadLanguage,
  langNames,
  langs,
} from "@uiw/codemirror-extensions-langs";
import classes from "./EditorBox.module.css";
import createTheme from "@uiw/codemirror-themes";

type ContentType = {
  content: string;
  contentHandler: (e) => void;
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
          theme={myTheme}
          value={content}
          onChange={contentHandler}
          height="200px"
          basicSetup={{
            foldGutter: false,
            lineNumbers: false,
            indentOnInput: false,
            highlightActiveLine: false,
          }}
          extensions={[langs.tsx()]}
        />
      </div>
    </>
  );
}
