import { Button, Radio } from "@material-ui/core";

export const AppButton = (props: any) => {
  const { btnName, ...rest } = props;
  return (<Button {...rest}>{btnName}</Button>);
};

export const AppRadioButton = (props: any) => {
  return (
    <>
      <Radio {...props} />
    </>
  );
};
