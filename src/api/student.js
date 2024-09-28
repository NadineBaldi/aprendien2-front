import axios from "axios";
import { API_URL } from "../constants/environment";
import { TOKEN, USER_ID } from "../constants/util";
import { getCookie } from "../commons/helpers/cookies";

// Token
const token = getCookie(TOKEN);
const userId = getCookie(USER_ID);

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export function getStudentInfo() {
  return axios.get(`${API_URL}/student/find/id/${userId}`, config);
}
