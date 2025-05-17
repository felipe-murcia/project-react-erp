
import { SalesCreate } from '../screens/SalesCreate';
import { SalesMain } from '../screens/SalesMain';
//import {  } from '../screens/SalesMain';

export const SalesRoute = [
    {
        path: '/index',
        index: true,
        element: SalesMain,
        rolesRequired:['admin',"sales_manager","user"],
    },
    {
        path: '/create',
        element: SalesCreate,
        rolesRequired:['admin',"sales_manager","user"],
    },
]

