import React from "react";
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import FormOne from "./component/form-one";
import Parent from "./component/parent-child/Parent";
import ChildOne from "./component/parent-child/ChildOne";
import ChildTwo from "./component/parent-child/ChildTwo";
import ChildThree from "./component/parent-child/ChildThree";
import NChildOne from "./component/parent-child/nested-child/NChildOne";
import NChildTwo from "./component/parent-child/nested-child/NChildTwo";

function App() {
  let testProp = {
    isAuth: true
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/form-one" element={<FormOne />} />
          <Route path="parent" element={<Parent />}>
            <Route path="child-one" element={<ChildOne/>}>
              <Route path="nested-child" element={<NChildOne isAuth={false} />} />
            </Route>
            <Route path="child-two" element={<ChildTwo />}></Route>
            <Route path="child-three" element={<ChildThree />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
