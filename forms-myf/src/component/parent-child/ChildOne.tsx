import { Button } from "@mui/material";
import { Link, Outlet} from 'react-router-dom'

export default function ChildOne() {
  return (
    <div>
      <div>
        <h1>Child One</h1>
      </div>
      <div>
        <Link to="nested-child">
        <Button variant="outlined" color="secondary">Display nested Child</Button>
        </Link>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
