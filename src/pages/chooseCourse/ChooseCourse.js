import React, { useState, useEffect } from "react";

// Material UI Components
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

// Hooks
import useFetchStudentSubjects from "./hooks/hooks";

const ChooseCourse = () => {
  const [courseSelected, setCourseSelected] = useState({ id: null, name: "" });
  const { id: courseSelectedId } = courseSelected;

  // Hooks
  const { getStudentSubjects, subjects } = useFetchStudentSubjects();

  useEffect(() => {
    getStudentSubjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeCourseSelected = (event) => {
    const courseId = event.target.value;
    const courseName = event.target.getAttribute("data-name");
    setCourseSelected({ id: courseId, name: courseName });
  };

  const handleOnClickContinueBtn = () => {
    window.location.href = `http://localhost:3000/course/${courseSelectedId}`;
  };

  return (
    <div className="choose-course">
      <div className="choose-course-container">
        <div className="choose-course-title-container">
          <Typography variant="title" color="primary">
            Elegí una materia
          </Typography>
          <div className="choose-course-subtitle-container">
            <Typography variant="subtitle">
              Múltiples materias están disponibles.
            </Typography>
            <Typography variant="subtitle">
              Seleccioná una para comenzar a estudiar.
            </Typography>
          </div>
        </div>
        <div className="choose-course-courses-container">
          <FormControl>
            <RadioGroup
              aria-labelledby="radio-buttons-group-label"
              name="radio-buttons-group"
              value={courseSelectedId}
              onChange={handleChangeCourseSelected}
            >
              {subjects?.map(({ name, id }) => (
                <FormControlLabel
                  key={id}
                  value={id}
                  control={<Radio />}
                  label={name}
                  data-name={name}
                  className={
                    courseSelectedId === id
                      ? "choose-course-option-selected"
                      : "choose-course-option-container"
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
        <div className="choose-course-continue-btn-container">
          <Button
            variant="contained"
            className="choose-course-continue-btn"
            onClick={() => handleOnClickContinueBtn()}
          >
            Comenzar a estudiar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChooseCourse;
