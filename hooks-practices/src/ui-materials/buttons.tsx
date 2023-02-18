import { Button, ButtonGroup } from "@mui/material";

export const buttonWrapper = (buttonWrapperProp: any): JSX.Element => {
  return (
    <>
      <Button {...buttonWrapperProp} />
    </>
  );
};
