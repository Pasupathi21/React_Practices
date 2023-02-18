import { TextField, Autocomplete} from '@mui/material'


export const TextFieldWrapper = (textFieldProp: any) => {
    console.log('Text field prop', textFieldProp)
    return (
        <>
            <TextField
            { ...textFieldProp }
             />
        </>
    )
}

export const AutoCompleteWrapper = (autoCompleteProp: any) => {
    const { labelname } = autoCompleteProp

    return (
        <>
            <Autocomplete 
                { ...autoCompleteProp }
                renderInput={(params) => <TextField { ...params} label={ labelname }/>}
            />
        </>
    )

}