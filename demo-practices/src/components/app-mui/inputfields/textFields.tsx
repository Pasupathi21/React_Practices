import { TextField, } from '@material-ui/core'

export const AppTextField = (props: any) => {

    const {
        label,
        defaultValue,
        ...rest
    } = props
    return (
        <TextField 
        { ...props }
        />
    )
}