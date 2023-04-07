import { makeStyles } from '@material-ui/core/styles'

export const AppDrawerStyle = makeStyles({
    paper: {
        '& .MuiDrawer-paper': {
            width: '50%',       
        }
    },
    root:{
        '& ..MuiDrawer-root': {
            overflow: 'auto',
            scrollY:'auto'  
        }
    }
})