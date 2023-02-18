import { TextField, TextareaAutosize} from '@material-ui/core'

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

export const AppTextArea = (props: any) => {

    const {
        label,
        defaultValue,
        ...rest
    } = props
    return (
        <TextareaAutosize 
        { ...props }
        />
    )
}

