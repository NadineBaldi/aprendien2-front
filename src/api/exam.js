import axios from "axios";
import { API_URL } from "../constants/environment";
import { TOKEN } from "../constants/util";
import { getCookie } from '../commons/helpers/cookies';

// Token
const token = getCookie(TOKEN);

const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};

export function getExamsBySubjectId(subjectId) {
  return axios.get(`${API_URL}/exam/find/subject/${subjectId}`, config);
}

export function finishExam(data) {
  return axios.post(`${API_URL}/student-exam/finish`, data, config);
}

