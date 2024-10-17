import { useState } from "react";

// Api
import { getSubjectById } from "../../../api/subject";

import { getCookie } from "../../../commons/helpers/cookies";
import { USER_ID } from "../../../constants/util";

import {
  getExamsBySubjectId,
  finishExam,
} from "../../../api/exam";

const userId = getCookie(USER_ID);

const useFetchCourseInfo = (courseId) => {
  const [selectedCourseDetails, setSelectedCourseDetails] = useState({});
  const [exams, setExams] = useState([]);
  const [examResult, setExamResult] = useState({});

  const getSelectedCourseDetails = async () => {
    try {
      const { data } = await getSubjectById(courseId);

      setSelectedCourseDetails(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getExams = async () => {
    try {
      const { data } = await getExamsBySubjectId(courseId);
      
      setExams(data);
    } catch (e) {
      console.log(e);
    }
  }

  const completeExam = async (data) => {
    try {
      const { data: response } = await finishExam({ ...data, studentId: userId });
      setExamResult(response);
    } catch (e) {
      console.log(e);
    }
  }


  return {
    getSelectedCourseDetails,
    selectedCourseDetails,
    getExams,
    exams,
    completeExam,
    examResult,
  };
};

export default useFetchCourseInfo;
