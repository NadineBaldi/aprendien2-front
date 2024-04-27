import React, { useState } from "react";

// Material UI Components
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

// Constants
import { courses } from "../../constants/courses";

const ChooseCourse = () => {
  const [courseSelected, setCourseSelected] = useState("");

  const handleChangeCourseSelected = (event) => {
    setCourseSelected(event.target.value);
  };

  const handleOnClickContinueBtn = () => {
    // window.location.href = "http://localhost:3000/courses";
    // TODO: reemplazar por url de pantalla de practicar preguntas cuando exista
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
              value={courseSelected}
              onChange={handleChangeCourseSelected}
            >
              {courses.map(({ name }) => (
                <FormControlLabel
                  value={name}
                  control={<Radio />}
                  label={name}
                  className={
                    courseSelected === name
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
