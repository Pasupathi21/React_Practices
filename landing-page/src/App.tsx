import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import SideBar from "./components/side-bar/SideBar";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_ROUES } from "./constant/routes";
import Dashboard from "./components/content/dashboard/dashboard.component";
import Cottage from "./components/content/cottage/cottage.component";
import Contact from "./components/content/contact/contact.component";
import Group from "./components/content/group/group.component";
import Settings from "./components/content/settings/settings.component";
import FormOne from "./components/content/forms/form-one.component";

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
        <Grid container direction="column" sx={{ width: "100%" }}>
          <Grid
            container
            item
            xs={2}
            sx={{ border: "1px solid black", width: "inherit" }}
          >
            <SideBar />
          </Grid>
          <Grid container item xs={11} sx={{ border: "1px solid black" }}>
            <Routes>
              <Route
                path={APP_ROUES.dashboard.main_route}
                element={<Dashboard />}
              ></Route>
            </Routes>
            <Routes>
              <Route
                path={APP_ROUES.cottage.main_route}
                element={<Cottage />}
              ></Route>
            </Routes>
            <Routes>
              <Route
                path={APP_ROUES.contact.main_route}
                element={<Contact />}
              ></Route>
            </Routes>
            <Routes>
              <Route
                path={APP_ROUES.group.main_route}
                element={<Group />}
              ></Route>
            </Routes>
            <Routes>
              <Route
                path={APP_ROUES.settings.main_route}
                element={<Settings />}
              />
            </Routes>
            <Routes>
              <Route
                path={APP_ROUES.settings.main_route}
                element={<Settings />}
              />
            </Routes>
            <Routes>
              <Route path={APP_ROUES.form.main_route} element={<FormOne />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </main>
  );
}

export default App;
