import { Drawer } from '@material-ui/core'

export const AppDrawer = (props: any) => {
    const { children, ...rest} = props
    return (
        <Drawer { ...rest }>
            { children }
        </Drawer>
    )
}