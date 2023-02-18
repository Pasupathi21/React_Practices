import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DemoPage from "./AppModules/demo/list-page";

const appRoutes = createBrowserRouter([
  {
    path: "",
    element: <DemoPage />,
  },
]);

function App() {
  return (
    <>
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <RouterProvider router={appRoutes} />
      </div>
    </>
  );
}

export default App;
