import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DemoPage from "./AppModules/demo/list-page";
import Practices from './AppModules/practices'

const appRoutes = createBrowserRouter([
  {
    path: "",
    element: <DemoPage />,
  },
  {
    path: "/demo",
    element: <Practices />
  }
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
