import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";
import "./styles/app.scss";
import Split from "react-split-grid";
import Previewer from "./components/Previewer";
import text from "./defaultMarkdown";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [split, setSplit] = useState({});
  const [code, setCode] = useState(text);

  useEffect(function onLoad() {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () =>
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
  }, []);

  useEffect(
    function setGridLayout() {
      setSplit(() => {
        return windowWidth > 800
          ? {
              direction: "column",
              class: "gutter-col gutter-col-1",
            }
          : {
              direction: "row",
              class: "gutter-row gutter-row-1",
            };
      });
    },
    [windowWidth]
  );

  return (
    <Split
      minSize={0}
      render={({ getGridProps, getGutterProps }) => (
        <div
          className={`main-container grid grid-${split.direction}`}
          {...getGridProps()}
        >
          <Editor code={code} setCode={setCode} />
          <div
            className={`gutter ${split.class}`}
            {...getGutterProps(split.direction, 1)}
          />
          <Previewer code={code} />
        </div>
      )}
    />
  );
}

export default App;
