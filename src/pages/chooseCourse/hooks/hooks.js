import { useState } from "react";

// Api
import { getSubjectsByStudentId } from "../../../api/subject";

const useFetchStudentSubjects = () => {
  const [subjects, setSubjects] = useState([]);
  
  const getStudentSubjects = async () => {
    try {
      const { data } = await getSubjectsByStudentId();

      setSubjects(data);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    getStudentSubjects,
    subjects
  }
};

export default useFetchStudentSubjects;
