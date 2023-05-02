import dayjs from 'dayjs'
export const initValue = {
 name:'',
 dob: dayjs(Date.now()),
 gender: '',
 checkbox: '',
 country: '',
 state: '',
 address: '',
 skills: [
    {
        skill: {
            label: '',
            value: 0
        },
        experience: {
            label: '',
            value: 0
        },
    }
 ]
}