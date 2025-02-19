import React, { createContext, useState } from "react";

export const HocContext = createContext({});
function HOC(Component: React.ReactNode) {
  const [state, _setState] = useState({
    message: "from HOC",
  });
//   return <HocContext.Provider value={state?.message}>Component</HocContext.Provider>;
return Component
}
