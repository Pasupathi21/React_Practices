import { Card, CardContent } from "@material-ui/core";

export const AppCard = (props: any) => {
  const { children, ...rest } = props;
  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
