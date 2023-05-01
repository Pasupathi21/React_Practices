import * as Yup from 'yup';

export const formOneSchema = (dataObj?: any): any => (
    Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required')
})
)