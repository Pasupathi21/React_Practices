import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import FormOne from './component/form-one';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/form-one" element={<FormOne />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
