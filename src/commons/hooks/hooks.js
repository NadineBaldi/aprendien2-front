import { useState } from "react";

// Api
import { getStudentInfo, updateStudentInfo } from "../../api/student";

const useFetchCommon = () => {
  const [studentInfo, setStudentInfo] = useState({});
  const [snackbar, setSnackbar] = useState({ open: false });

  const loadStudentInfo = async () => {
    try {
      const { data } = await getStudentInfo();
      if (data)
        setStudentInfo({
          ...data,
          city: data.city.id,
          university: data.university.id,
          provinceSelected: data.city.province.id,
          email: data.username,
        });
    } catch (e) {
      console.log(e);
    }
  };

  const updateStudent = async (data) => {
    try {
      await updateStudentInfo(data);
      await loadStudentInfo();
      setSnackbar({ open: true, message: "Datos guardados correctamente" });
    } catch (e) {
      setSnackbar({
        open: true,
        message: "Ocurrió un error, intente nuevamente",
      });
      console.log(e);
    }
  };

  return {
    loadStudentInfo,
    studentInfo,
    snackbar,
    setSnackbar,
    updateStudent,
  };
};

export default useFetchCommon;
