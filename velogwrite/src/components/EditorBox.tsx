import ReactCodeMirror from "@uiw/react-codemirror";
import classes from "./EditorBox.module.css";
import createTheme from "@uiw/codemirror-themes";
import {
  markdown,
  insertNewlineContinueMarkup,
  markdownLanguage,
  markdownKeymap,
  deleteMarkupBackward,
} from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";
import { keymap, KeyBinding } from "@codemirror/view";
import { insertNewline } from "@codemirror/commands";
import { EditorState } from "@codemirror/state";
import { basicSetup } from "@codemirror/basic-setup";

type ContentType = {
  content: string;
  contentHandler: () => void;
};

const customMarkdownKeymap: readonly KeyBinding[] = [
  {
    key: "Enter",
    run: (view) => {
      const { state } = view;
      const cursorPos = state.selection.main.head;
      const lineText = state.doc.lineAt(cursorPos).text;

      if (lineText.match(/^\d+\. $/) && cursorPos === lineText.length) {
        view.dispatch({ changes: { insert: "\n", from: cursorPos } });
        return true;
      }

      if (lineText.match(/^\d+\.$/) && cursorPos === lineText.length) {
        view.dispatch({ changes: { insert: " ", from: cursorPos } });
        return insertNewline(view);
      }

      return insertNewline(view);
    },
  },
  { key: "Backspace", run: deleteMarkupBackward },
];

const markdownStyles = [
  { tag: t.heading1, fontWeight: "bold", fontSize: "2.5rem" },
  { tag: t.heading2, fontWeight: "bold", fontSize: "2rem" },
  { tag: t.heading3, fontWeight: "bold", fontSize: "1.17em" },
  { tag: t.heading4, fontWeight: "bold", fontSize: "1em" },
  { tag: t.heading5, fontWeight: "bold", fontSize: ".83em" },
  { tag: t.heading6, fontWeight: "bold", fontSize: ".67em" },
  { tag: t.strong, fontWeight: "bold" },
];

const myTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#171717",
    foreground: "#ffffff",
    caret: "#ffffff",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: "#8a91991a",
    gutterBackground: "#fff",
    gutterForeground: "#8a919966",
  },
  styles: [
    { tag: t.comment, color: "#787b8099" },
    { tag: t.variableName, color: "#0080ff" },
    { tag: [t.string, t.special(t.brace)], color: "#5c6166" },
    { tag: t.number, color: "#5c6166" },
    { tag: t.bool, color: "#5c6166" },
    { tag: t.null, color: "#5c6166" },
    { tag: t.keyword, color: "#5c6166" },
    { tag: t.operator, color: "#5c6166" },
    { tag: t.className, color: "#5c6166" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "#5c6166" },
    { tag: t.angleBracket, color: "#5c6166" },
    { tag: t.tagName, color: "#5c6166" },
    { tag: t.attributeName, color: "#5c6166" },
    ...markdownStyles,
  ],
});

export default function EditorBox({ content, contentHandler }: ContentType) {
  return (
    <>
      <div className={classes.editorBox_container}>
        <ReactCodeMirror
          className={classes.code_mirror}
          theme={myTheme}
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
            EditorView.lineWrapping,
            javascript({ jsx: true }),
            keymap.of(customMarkdownKeymap),
          ]}
        />
      </div>
    </>
  );
}
