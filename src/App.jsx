import React, { useEffect, useRef, useState } from "react";
import Editor from "./components/Editor";
import Split from "react-split-grid";
import Previewer from "./components/Previewer";
import defaultText from "./defaultMarkdown";
import "./styles/app.scss";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [gridDirection, setGridDirection] = useState("");
  const [code, setCode] = useState(defaultText);
  const gridRef = useRef(null);

  useEffect(function onLoad() {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      gridRef.current.removeAttribute("style");
    });

    return () =>
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
        gridRef.current.removeAttribute("style");
      });
  }, []);

  useEffect(function setLayout() {
    setGridDirection(windowWidth > 800 ? "column" : "row");
  }, [windowWidth]);

  return (
    <div className="main-container">
      <Split
        minSize={0}
        render={({ getGridProps, getGutterProps }) => (
          <div
            ref={gridRef}
            className={`grid grid-${gridDirection}`}
            {...getGridProps()}
          >
            <Editor code={code} setCode={setCode} />
            <div
              className={`gutter gutter-direction`}
              {...getGutterProps(gridDirection, 1)}
            />
            <Previewer code={code} />
          </div>
        )}
      />
    </div>
  );
}

export default App;
