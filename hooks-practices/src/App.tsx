import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import { ParentOne } from './components/parent-one'
import { SimpleForm } from './components/forms';
import ImperativeComponent from './components/imperative/parent'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <ParentOne />
  },
  {
    path: '/form-page',
    element: <SimpleForm />
  },
  {
    path: '/page-two',
    element: <ImperativeComponent />
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
