
import CottageIcon from '@mui/icons-material/Cottage';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';    
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import GroupIcon from '@mui/icons-material/Group';

export const sideBarMenus: Record<any, string | JSX.Element | any>[] = [

    {
        title: 'Dashboard',
        icon: DashboardIcon,
        link: '/dashboard'
    },
    {
        title: 'Cottage',
        icon: CottageIcon,
        link: '/cottage'
    },
    {
        title: 'Contact',
        icon: PermContactCalendarIcon,
        link: '/contact'
    },
    {
        title: 'Group',
        icon: GroupIcon ,
        link: '/group'
    },
    {
        title: 'Setings',
        icon: SettingsIcon ,
        link: '/settings'
    }
]