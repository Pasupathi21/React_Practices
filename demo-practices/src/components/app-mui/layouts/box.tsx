import { Box } from "@material-ui/core";

export const AppBoxLayout = (props: any) => {
  const { children, ...rest } = props;
  return <Box {...rest}>{children}</Box>;
};
