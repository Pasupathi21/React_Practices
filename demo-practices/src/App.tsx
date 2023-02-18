import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import DemoPage from './AppModules/demo/demoPage'

const appRoutes = createBrowserRouter([
  {
    path: '',
    element: <DemoPage />
  },
])

function App() {
  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
}

export default App;
