import React, { createContext, useState } from "react";

export const HocContext = createContext({});
export function HOC(Component: any) {
  const [state, _setState] = useState({
    message: "from HOC",
  });
  console.log("HOC Componen >>>>>>>>");
  return function ComponentWrapper(props: any) {
    return <Component {...props} />;
  };
}
