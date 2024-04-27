import { lazy } from "react";
const SignUp = lazy(() => import("../client/signUp"));
const Login = lazy(() => import("../client/login"));
const ForgetPassword = lazy(() => import("../client/forgetPassword"));
const ChooseCourse = lazy(() => import("../client/chooseCourse"));

const routes = [
  {
    path: "signUp",
    name: "signUp",
    layout: "/signUp",
    exact: true,
    element: <SignUp />,
  },
  {
    path: "forgetPassword",
    name: "forgetPassword",
    layout: "/forgetPassword",
    exact: true,
    element: <ForgetPassword />,
  },
  {
    path: "login",
    name: "login",
    layout: "/login",
    exact: true,
    element: <Login />,
  },
  {
    path: "chooseCourse",
    name: "chooseCourse",
    layout: "/chooseCourse",
    exact: true,
    element: <ChooseCourse />,
  },
];

export default routes;
