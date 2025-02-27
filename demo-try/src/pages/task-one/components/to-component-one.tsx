import { memo } from "react";
import ToComponentTwo from "./to-component-two";

function ComponentOne() {
  return (
    <>
    <div className="p-4  flex bg-red-900">
      <ToComponentTwo />
    </div>
    </>
  );
}

export default memo(ComponentOne);
