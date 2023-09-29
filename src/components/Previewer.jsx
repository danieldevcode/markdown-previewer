import React, { useEffect, useRef } from "react";
import Header from "./Header";
import "../styles/previewer.scss";
import { marked } from "marked";
import hljs from "highlight.js/lib/common";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/tokyo-night-dark.css";
import DOMPurify from "dompurify";

function Previewer({ code }) {
  const previewerRef = useRef(null);

  useEffect(function onLoad() {
    marked.use({
      gfm: true,
      breaks: true,
    });
    hljs.registerLanguage("javascript", javascript);
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
      <section id="preview" ref={previewerRef} className="previewer"></section>
    </section>
  );
}

export default Previewer;
