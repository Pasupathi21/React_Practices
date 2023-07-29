import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function Parent() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <h1>1</h1>
      </div>
      <div>
        <Link to="child-one">
        <Button variant="outlined" color="primary" >
          Display child
        </Button>
        </Link>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
