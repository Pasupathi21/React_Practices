import { useEffect, useState, createContext } from "react";
import ComponentTwo from './component-two'


function ComponentOne(props: any) {
  const [state, setState] = useState({
    title: ""
  });
  console.log("ComponentOne ", Date.now())

  const handleInputChange = (inputElement: any) => {
    const elementTarget = inputElement?.target as any
    setState({
        ...state,
        [elementTarget?.name]: [elementTarget?.value]
    })
  }
  
  useEffect(() => {
    console.log("ComponentOne side effect")
  }, [])
  return (
    <>
      <div>
        <h1>Component One</h1>
        <input type="text" name="title" value={state?.title} onChange={handleInputChange} />
      </div>
      <div>
        {/* props passing parent to child component */}
        <ComponentTwo 
            // simple props
            title={state?.title}

            // passing function as a props
            handleInputChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default ComponentOne;
