import { useState } from "react";
//Api
import {
  login
} from "../../api/login";

import { setCookie, deleteCookie } from '../../commons/helpers/cookies';

import { TOKEN } from "../../constants/util";

const useFetchLogin = () => {
  const [error, setError] = useState(false);

  const loginStudent = async (username, password) => {
    try {
      const { data: { token } } = await login({username, password});
      setCookie(TOKEN, token);
      window.location.href = "http://localhost:3000/chooseCourse";
    } catch (e) {
      deleteCookie(TOKEN);
      console.log(e);
      setError(true);
    }
  };

  return {
    error,
    loginStudent,
  };
};

export default useFetchLogin;
