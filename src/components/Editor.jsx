import React from "react";
import Box from "./Box";

function Editor({ code, setCode }) {
  return (
    <section>
      <Box text="Editor" />
      <textarea
        id="editor"
        placeholder="Start typing here"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
    </section>
  );
}

export default Editor;
