import React from "react";
import Header from "./Header";
import "../styles/editor.scss";

function Editor({ code, setCode }) {
  return (
    <section>
      <Header text="Editor" />
      <textarea
        id="editor"
        className="editor"
        placeholder="Start typing here"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
    </section>
  );
}

export default Editor;
