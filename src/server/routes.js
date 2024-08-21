import { lazy } from "react";
const SignUp = lazy(() => import("../client/signUp"));
const Login = lazy(() => import("../client/login"));
const ForgetPassword = lazy(() => import("../client/forgetPassword"));
const ChooseCourse = lazy(() => import("../client/chooseCourse"));
const Course = lazy(() => import("../client/course"));
const AccountData = lazy(() => import("../client/accountData"));

export const routes = [
  {
    path: "forgetPassword",
    name: "forgetPassword",
    layout: "/forgetPassword",
    exact: true,
    element: <ForgetPassword />,
  },
  {
    path: "chooseCourse",
    name: "chooseCourse",
    layout: "/chooseCourse",
    exact: true,
    element: <ChooseCourse />,
  },
  {
    path: "course/:courseId",
    name: "course",
    layout: "/course",
    exact: true,
    element: <Course />,
  },
  {
    path: "/accountData/:courseId",
    name: "accountData",
    layout: "/accountData",
    exact: true,
    element: <AccountData />,
  },
];

export const publicRoutes =  [{
  path: "login",
  name: "login",
  layout: "/login",
  exact: true,
  element: <Login />,
},
{
  path: "signUp",
  name: "signUp",
  layout: "/signUp",
  exact: true,
  element: <SignUp />,
},
];
