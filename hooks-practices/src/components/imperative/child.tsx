import { useImperativeHandle, forwardRef, useState, useRef } from "react";

function ShowMessage(props: any, ref: any) {
  //   const clerRef = useRef<any>(null)
  const [showMessage, setShowMessage] = useState<string>("");
  useImperativeHandle(
    ref,
    () => ({
      setMessage: (message: string) => {
        console.log("message >>>>>", message)
        setShowMessage(message);
      },
    }),
    []
  );
  const handleMessage = (value: string) => {
    setShowMessage(value)
    if (ref?.current?.setValue) {
        ref?.current?.setValue(value)
    }
  }
  return (
    <>
      <div
        style={{
          height: "100px",
          width: "100%",
          border: "1px solid black",
        }}
      >
       <input type="text" name="message" id="message" value={showMessage}  onChange={(evt) => handleMessage(evt?.target.value)}/>
      </div>
    </>
  );
}

export default forwardRef(ShowMessage);
