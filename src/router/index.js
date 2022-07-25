import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home'
import Page404 from '../pages/page404';
export const routes = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'home',
                meta: {
                    title: '首页',
                    // icon: <DashboardOutlined />,
                },
                children: [
                    {
                        path: 'application',
                        // element: <Application />,
                        meta: {
                            title: '应用',
                        }
                    }
                ]
            },
            {
                path: 'setting',
                // element: <Setting />,
                meta: {
                    title: '设置',
                    // icon: <UserOutlined />,   //图表名称
                }
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
        meta: {
            title: '登录',
            noLogin: true,
            hideMenu: true
        }
    },
    {
        path: '*',
        element: <Page404 />,
        meta: {
            title: '404',
            noLogin: true,
            hideMenu: true
        }
    },
];
const Routes = () => (
    useRoutes(routes)
)
export default Routes