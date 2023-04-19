
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
        link: '/contact',
        submenus: [
            {
                title: 'contact 1',
                link: '/contact/contact_1'
            },
            {
                title: 'contact 2',
                link: '/contact/contact_2'
            }
        ]
    },
    {
        title: 'Group',
        icon: GroupIcon ,
        link: '/group'
    },
    {
        title: 'Settings',
        icon: SettingsIcon ,
        link: '/settings',
        submenus: [
            {
                title: 'setting 1',
                link: '/settings/setting_1'
            },
            {
                title: 'setting 2',
                link: '/settings/setting_2'
            },
            {
                title: 'setting 3',
                link: '/settings/setting_3'
            }
        ]
    }
]