import * as Yup from 'yup';

export const formOneSchema = (dataObj?: any): any => (
    Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    skills: Yup.array(Yup.object().shape({
        skill: Yup.string().required('Please select skill'),
        explevel: Yup.string().required('Please select experience level')
    })).min(1).required('Please add atlease one skill')
})
)