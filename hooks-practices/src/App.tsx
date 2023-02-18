import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import { ParentOne } from './components/parent-one'
import { SimpleForm } from './components/forms';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <ParentOne />
  },
  {
    path: '/form-page',
    element: <SimpleForm />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={ routes }></RouterProvider>
    </>
  );
}

export default App;
