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

export function getSubjectsByStudentId() {
  return axios.get(`${API_URL}/subject/student/${userId}`, config);
}

export function getSubjectById(courseId) {
  return axios.get(`${API_URL}/subject/find/${courseId}`, config);
}
