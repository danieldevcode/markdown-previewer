import React, { useEffect, useRef } from "react";
import Box from "./Box";
import "../styles/previewer.scss";
import { marked } from "marked";

function Previewer({ code }) {
  const previewerRef = useRef(null);

  useEffect(function onLoad() {
    marked.use({
      gfm: true,
      breaks: true,
    });
  }, []);

  useEffect(
    function renderPreview() {
      previewerRef.current.innerHTML = marked.parse(code);
    },
    [code]
  );

  return (
    <section className="previewer-section">
      <Box text="Previewer" />
      <section
        id="preview"
        ref={previewerRef}
        className="previewer"
        readOnly
      ></section>
    </section>
  );
}

export default Previewer;
