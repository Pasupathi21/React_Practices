import { useRef, useState, useEffect } from "react";
import ShowMessage from "./child";

export default function ImperativeComponent() {
  const parentRef = useRef<any>(null);
  const [value, setValue] = useState<any>(null);
  console.log("outside useEffect", parentRef);
  useEffect(() => {
    console.log("inside useEffect", parentRef);

    if (parentRef && parentRef?.current) parentRef.current.setValue = setValue;
  }, []);
  return (
    <>
    <h4>Two way data passing between parent child using Ref, forwardRef and Imperativehandle hooks  </h4>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px'}}>
        
      <label htmlFor="message">Message</label>
      <input
        type="text"
        name="message"
        onChange={(evt: any) => {
          console.log("evt >>>>>", evt);
          setValue(evt?.target?.value)
          parentRef?.current?.setMessage(evt?.target?.value);
        }}
        value={value}
      />
      <ShowMessage ref={parentRef} />
    </div>
    </>
  );
}
