import { useState } from "react";

// Api
import { getStudentInfo } from "../../api/student";

const useFetchCommon = () => {
  const [studentInfo, setStudentInfo] = useState({});

  const loadStudentInfo = async () => {
    try {
      const { data } = await getStudentInfo();
      if (data) setStudentInfo(data);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    loadStudentInfo,
    studentInfo,
  };
};

export default useFetchCommon;
