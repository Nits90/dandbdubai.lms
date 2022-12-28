import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import cookie from "js-cookie";

export const RestrictedAccess = () => {
    const auth = cookie.get('user')
    return auth ? <Outlet/>:<Navigate to="/login"/>
}
