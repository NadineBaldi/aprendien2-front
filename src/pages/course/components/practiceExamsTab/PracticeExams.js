import React from "react";

// Material UI Components
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";


const PracticeExams = (props) => {
  const { courseSelected, setSelectedExam, setSelectedQuestions, exams, setExamStartDate } = props;

  const handleTitle = (duration, questionList = []) => {
    return (
      <Typography classes={{ root: "time-quantity-text" }}>
        {duration !== null
          ? `${duration} MINUTOS DISPONIBLES. ${questionList.length} PREGUNTAS.`
          : `SIN LÍMITE DE TIEMPO. ${questionList.length} PREGUNTAS.`}
      </Typography>
    );
  };

  const handleOnClickContinueBtn = (exam) => {
    setExamStartDate(new Date());
    setSelectedExam(exam);
    setSelectedQuestions(exam.questionList);
  };

  return (
    <div className="practice-exams">
      <div className="practice-exams-title-container">
        <Typography variant="title" color="primary">
          {courseSelected ? courseSelected.name : "Curso"}
        </Typography>
        <Typography classes={{ root: "subtitle" }}>
          Practicar exámenes
        </Typography>
      </div>
      <div className="practice-exams-container">
        <div className="practice-exams-exams-available-text-container">
          <Typography classes={{ root: "exams-available-text" }}>
            Exámenes disponibles
          </Typography>
        </div>
        {exams.map(({ duration, questionList, description, ...others }) => (
          <div className="practice-exams-card-container">
            <Card sx={{ minWidth: 660, height: 80, borderRadius: 5 }}>
              <div className="practice-exams-card-info-container">
                <div className="practice-exams-card-texts-container">
                  {handleTitle(duration, questionList)}
                  <Typography classes={{ root: "description-text" }}>
                    {description}
                  </Typography>
                </div>
                <div className="practice-exams-button-container">
                  <Button
                    variant="contained"
                    className="practice-exams-button"
                    onClick={() => handleOnClickContinueBtn({ duration, questionList, description, ...others })}
                  >
                    Comenzar
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeExams;
