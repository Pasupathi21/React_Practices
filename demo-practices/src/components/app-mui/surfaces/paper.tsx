import { Paper } from "@material-ui/core";

export const AppPaperSurface = (props: any) => {
  const { elevation, children, ...rest} = props 
  return (
    <>
      <Paper elevation={elevation} { ...rest}>
        { children }
      </Paper>
    </>
  );
};
