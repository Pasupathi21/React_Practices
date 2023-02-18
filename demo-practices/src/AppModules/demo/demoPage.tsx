import { useState } from "react";

import {
  AppTextField,
  AppAutoComplete,
  AppPaperSurface,
  AppBoxLayout
} from "../../components/index"

function DemoPage() {
  return (
    <>
    <h2>Working...</h2>
      <AppPaperSurface elevation={3} >
        <h3>Page Render</h3>
        <AppTextField label="Test" defaultValue="test" variant="outlined"></AppTextField>
      </AppPaperSurface>
    </>
  );
}

export default DemoPage;
