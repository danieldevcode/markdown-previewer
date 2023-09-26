import React, { useEffect, useRef, useState } from "react";
import Testing from "./components/DraggableBox";
import Box from "./components/Box";
import "./styles/app.scss";
import Split from "react-split-grid";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [split, setSplit] = useState({
    direction: "column",
    class: "gutter-col gutter-col-1",
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () =>
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
  }, []);

  useEffect(() => {
    console.log(windowWidth);
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
  }, [windowWidth]);

  return (
    <Split
      minSize={200}
      render={({ getGridProps, getGutterProps }) => (
        <div
          className={`main-container grid grid-${split.direction}`}
          {...getGridProps()}
        >
          <section>
            <Box />
            <textarea placeholder="Start typing here"></textarea>
          </section>
          <div
            className={`gutter ${split.class}`}
            {...getGutterProps(split.direction, 1)}
          />
          <section>
            <Testing />
          </section>
        </div>
      )}
    />
  );
}

export default App;
