import { useEffect, useState, createContext } from "react";
import ComponentTwo from "./component-two";

export const FirstComponentContext = createContext({});
function ComponentOne(props: any) {
  const [state, setState] = useState({
    title: "",
    contextValue: Date.now(),
  });
  console.log("ComponentOne ", Date.now());

  const handleInputChange = (inputElement: any) => {
    const elementTarget = inputElement?.target as any;
    setState({
      ...state,
      [elementTarget?.name]: [elementTarget?.value],
    });
  };
  const handleClick = () => {
    setState({ ...state, contextValue: Date.now() });
  };

  useEffect(() => {
    console.log("ComponentOne side effect");
    return () => {};
  }, []);
  return (
    <>
      <div>
        <h1>Component One</h1>
        <input
          type="text"
          name="title"
          value={state?.title}
          onChange={handleInputChange}
        />
        <input type="button" name="clike" onClick={handleClick} value="Click" />
      </div>
      <div>
        {/* props passing parent to child component */}
        <FirstComponentContext.Provider value={state?.contextValue}>
          <ComponentTwo
            // simple props
            title={state?.title}
            // passing function as a props
            handleInputChange={handleInputChange}
          />
        </FirstComponentContext.Provider>
      </div>
    </>
  );
}

export default ComponentOne;
