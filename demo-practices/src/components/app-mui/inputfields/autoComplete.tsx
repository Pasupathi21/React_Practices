import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

export const AppAutoComplete = (props: any) => {
  const { variant } = props  
  return (
    <Autocomplete
    { ...props}
    options={[1,2,3,3]}
    renderInput={(params)=> <TextField {...params} variant={variant ? variant: 'outlined'}/>}
    ></Autocomplete>
  );
}
