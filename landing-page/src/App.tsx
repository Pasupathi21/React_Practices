import React from "react";
import { Grid } from "@mui/material";
import { blue, green } from "@mui/material/colors";

function App() {
  return (
    <div className="App" style={{
      display: 'block',
      width: `100%`,
      height: '100%',
      overflow: 'hidden'
    }}>
      <Grid container direction="row" sx={{height: '100%' }}>
        <Grid container item xs={2}>
          <div style={{ backgroundColor: "green", width: 'inherit', height: '100%' }}>side bar</div>
        </Grid>
        <Grid container item xs={10}>
          <div style={{ backgroundColor: "blue", width: 'inherit', height: '100%' }}>nav and content block</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
