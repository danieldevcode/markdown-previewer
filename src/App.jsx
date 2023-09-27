import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Split from "react-split-grid";
import Previewer from "./components/Previewer";
import defaultText from "./defaultMarkdown";
import "./styles/app.scss";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [grid, setGrid] = useState({});
  const [code, setCode] = useState(defaultText);

  useEffect(function onLoad() {
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
      console.log(windowWidth);
      setGrid(() => {
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
          className={`main-container grid grid-${grid.direction}`}
          {...getGridProps()}
        >
          <Editor code={code} setCode={setCode} />
          <div
            className={`gutter ${grid.class}`}
            {...getGutterProps(grid.direction, 1)}
          />
          <Previewer code={code} />
        </div>
      )}
    />
  );
}

export default App;
