import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import DemoPage from './modules/demo/index'

const appRoutes = createBrowserRouter([
  {
    path: '/',
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
