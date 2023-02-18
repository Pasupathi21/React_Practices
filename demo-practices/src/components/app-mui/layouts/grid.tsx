import { Grid } from "@material-ui/core";

export const AppGridLayout = (props: any) => {
  const { children, ...rest } = props;
  return <Grid {...rest}>{children}</Grid>;
};
