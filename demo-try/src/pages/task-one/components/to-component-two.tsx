import { memo } from "react";
import ToComponentThree from "./to-component-three";

function ComponentTwo() {
  return (
    <>
      <ToComponentThree />
    </>
  );
}

export default memo(ComponentTwo);
