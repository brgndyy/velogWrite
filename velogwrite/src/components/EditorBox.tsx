import ReactCodeMirror from "@uiw/react-codemirror";
import classes from "./EditorBox.module.css";
import createTheme from "@uiw/codemirror-themes";
import {
  markdown,
  markdownLanguage,
  insertNewlineContinueMarkup,
} from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorView } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";
import { KeyBinding, keymap } from "@codemirror/view";
import { StateCommand, EditorState, Transaction } from "@codemirror/state";

// const customInsertNewline: StateCommand = ({ state, dispatch }) => {
//   const tr = state.update({
//     changes: { from: state.selection.main.head, insert: "\n" },
//   });
//   dispatch(tr);
//   return true;
// };

// const customKeyBindings: KeyBinding[] = [
//   {
//     key: "Enter",
//     run: customInsertNewline,
//   },
// ];

type ContentType = {
  content: string;
  contentHandler: () => void;
};

// export const selectionBackground = EditorView.baseTheme({
//   "&.cm-focused .cm-selectionBackground, & .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection":
//     {
//       backgroundColor: "red",
//     },
// });

const myTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#171717",
    foreground: "#ffffff",
    caret: "#ffffff",
    selection: "red",
    selectionMatch: "#00000025",
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
    { tag: t.heading1, fontWeight: "bold", fontSize: "2.5rem" },
    { tag: t.heading2, fontWeight: "bold", fontSize: "2rem" },
    { tag: t.heading3, fontWeight: "bold", fontSize: "1.17em" },
    { tag: t.heading4, fontWeight: "bold", fontSize: "1em" },
    { tag: t.heading5, fontWeight: "bold", fontSize: ".83em" },
    { tag: t.heading6, fontWeight: "bold", fontSize: ".67em" },
    { tag: t.strong, fontWeight: "bold" },
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
          // basicSetup={{
          //   foldGutter: false,
          //   lineNumbers: false,
          //   highlightActiveLine: false,
          // }}
          extensions={[
            // markdown({
            //   base: markdownLanguage,
            //   codeLanguages: languages,
            //   addKeymap: false,
            //   extensions: {},
            // }),
            // EditorView.lineWrapping,
            // selectionBackground,
            javascript({ jsx: true }),
            // keymap.of(customKeyBindings),
          ]}
        />
      </div>
    </>
  );
}
