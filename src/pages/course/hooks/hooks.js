import { useState } from "react";

// Api
import { getSubjectById } from "../../../api/subject";

const useFetchCourseInfo = (courseId) => {
  const [selectedCourseDetails, setSelectedCourseDetails] = useState({});

  const getSelectedCourseDetails = async () => {
    try {
      const { data } = await getSubjectById(courseId);

      setSelectedCourseDetails(data);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getSelectedCourseDetails,
    selectedCourseDetails,
  };
};

export default useFetchCourseInfo;
