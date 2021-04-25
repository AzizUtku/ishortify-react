import React from 'react';

// ------ Auth Pages -------
const Signin = React.lazy(() => import('./pages/Auth/Signin/Signin'));
const Signup = React.lazy(() => import('./pages/Auth/Signup/Signup'));
const ForgotPassword = React.lazy(() => import('./pages/Auth/ForgotPassword/ForgotPassword'));
const VerifyEmail = React.lazy(() => import('./pages/Auth/VerifyEmail/VerifyEmail'));
const Logout = React.lazy(() => import('./pages/Auth/Logout/Logout'));
const Redirect = React.lazy(() => import('./pages/Main/Redirect'));

const Business = React.lazy(() => import('./pages/Business/Business'));
const Landing = React.lazy(() => import('./pages/Landing/Landing'));

const routes = [
    //= ====================================
    //            Public Routes
    //= ====================================
    { path: '/signin', component: Signin, ispublic: true },
    { path: '/signup', component: Signup, ispublic: true },
    { path: '/reset/password', component: ForgotPassword, ispublic: true },
    { path: '/verify/email', component: VerifyEmail, ispublic: true },
    { path: '/:key', component: Redirect, ispublic: true },
    { path: '/', component: Landing, ispublic: true },

    { path: '/business', component: Business, ispublic: false },
    { path: '/logout', component: Logout, ispublic: false },
    { path: '/:key', component: Redirect, ispublic: false },
    { path: '/', component: Business, ispublic: false },

];

export default routes;