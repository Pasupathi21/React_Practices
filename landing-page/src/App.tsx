import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import SideBar from "./components/side-bar/SideBar";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [width, setWidth] = useState<any>(100);
  const [height, setHeight] = useState<any>(100);
  useEffect(() => {
    console.log("useeffect called...");
    setWidth(`${window.innerWidth}px`);
    setHeight(`${window.innerHeight}px`);
  }, [window.innerWidth]);

  return (
    <main className="main">
      <BrowserRouter>
        <Grid container direction="row">
          <Grid container item xs={2} sx={{ border: "1px solid black" }}>
            <SideBar />
          </Grid>
          <Grid container item xs={10} sx={{ border: "1px solid black" }}>
            <div>nav and content block</div>
          </Grid>
        </Grid>
      </BrowserRouter>
    </main>
  );
}

export default App;
