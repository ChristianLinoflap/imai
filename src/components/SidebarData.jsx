import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
export const SidebarData = [
    {
        title: "Dashboard",
        icon: <HomeIcon/>,
        link: "/"
    },
    {
        title: "Inventory",
        icon: <InventoryIcon/>,
        link: "/Inventory"
    },
    {
        title: "Cart",
        icon: <ShoppingCartIcon/>,
        link: "/Cart"
    },
    {
        title: "Reports",
        icon: <BarChartIcon/>,
        link: "/Reports"
    },
    {
        title: "Suppliers",
        icon: <AccountCircleIcon/>,
        link: "/Suppliers"
    },
    {
        title: "Manage Store",
        icon: <StoreIcon/>,
        link: "/Manage-Store"
    },
]
export const SidebarSettings = [
    {
        title: "Settings",
        icon: <SettingsIcon/>,
        link: "/Settings"
    },
    {
        title: "Log Out",
        icon: <LogoutIcon/>,
        link: "/Log-out"
    }
]