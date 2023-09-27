import React, { useEffect, useRef } from "react";
import Header from "./Header";
import "../styles/previewer.scss";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";
import DOMPurify from "dompurify";

function Previewer({ code }) {
  const previewerRef = useRef(null);

  marked.use({
    gfm: true,
    breaks: true,
  });
  useEffect(function onLoad() {
    marked.use({
      gfm: true,
      breaks: true,
    });
  }, []);

  useEffect(
    function renderPreview() {
      previewerRef.current.innerHTML = DOMPurify.sanitize(marked.parse(code));
      document.querySelectorAll("code").forEach((code) => {
        hljs.highlightElement(code);
      });
    },
    [code]
  );

  return (
    <section className="previewer-section">
      <Header text="Previewer" />
      <section
        id="preview"
        ref={previewerRef}
        className="previewer"
      ></section>
    </section>
  );
}

export default Previewer;
