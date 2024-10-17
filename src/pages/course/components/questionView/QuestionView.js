import React, { useState } from "react";

// Material UI Components
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

// Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const QuestionView = (props) => {
  const {
    selectedQuestion,
    questions,
    selectedExam,
    handleCompleteExam,
    handleBackBtn,
    handleSaveAnswers,
  } = props;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions
    ? questions[currentQuestionIndex]
    : selectedQuestion;

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [reviewMessage, setReviewMessage] = useState("");

  const handleOnChangeCheckbox = (id) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(id)) {
        return prevSelectedOptions.filter((optionId) => optionId !== id);
      } else {
        return [...prevSelectedOptions, id];
      }
    });
  };

  const handleShowBtn = () => {
    if (
      (reviewMessage &&
        questions &&
        currentQuestionIndex < questions.length - 1) ||
      (selectedExam && questions && currentQuestionIndex < questions.length - 1)
    ) {
      return (
        <Button
          variant="contained"
          className="question-view__send-btn"
          onClick={handleNextQuestion}
          disabled={
            selectedQuestion || currentQuestionIndex > questions.length - 1
          }
        >
          Siguiente pregunta
        </Button>
      );
    } else if (
      selectedExam &&
      questions &&
      currentQuestionIndex === questions.length - 1
    ) {
      return (
        <Button
          variant="contained"
          className="question-view__send-btn"
          onClick={() => handleCompleteExam(selectedOptions)}
        >
          Finalizar exámen
        </Button>
      );
    } else {
      return (
        <Button
          variant="contained"
          className="question-view__send-btn"
          onClick={handleSendAnswer}
        >
          Enviar respuesta
        </Button>
      );
    }
  };

  const handleNextQuestion = () => {
    handleSaveAnswers(selectedOptions);
    setReviewMessage("");
    setSelectedOptions([]);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSendAnswer = () => {
    const totalCorrectOptions = currentQuestion.answers.filter(
      (option) => option.correct
    ).length;

    const totalcorrectOptionsSelected = selectedOptions.filter(
      (optionId) =>
        currentQuestion.answers.find((option) => option.id === optionId)
          ?.correct
    ).length;

    setReviewMessage(
      `Marcaste ${totalcorrectOptionsSelected} de ${totalCorrectOptions} respuestas correctas!`
    );
  };


  return (
    <div className="question-view">
      {currentQuestion && (
        <>
          <div className="question-view__header">
            <div className="question-view__back-button-container">
              <Button
                className="question-view__back-button"
                startIcon={<ArrowBackIcon />}
                onClick={handleBackBtn}
              >
                Volver atrás
              </Button>
            </div>
            <div className="question-view__header-title">
              <Typography classes={{ root: "question-view__title" }}>
                {selectedExam
                  ? "Practicando exámenes..."
                  : "Practicando preguntas..."}
              </Typography>
            </div>
          </div>
          <div className="question-view__body">
            <div className="question-view__body-left">
              <div className="question-view__question-title-container">
                <Typography classes={{ root: "question-view__question-title" }}>
                  {currentQuestion.question}
                </Typography>
              </div>
            </div>
            <div className="question-view__body-right">
              <div className="question-view__list-container">
                <List>
                  <div className="question-view__options-list">
                    {currentQuestion.answers.map(({ id, answer }) => (
                      <ListItem key={id} disablePadding>
                        <ListItemButton role={undefined} dense>
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={selectedOptions.includes(id)}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{
                                "aria-labelledby": `checkbox-list-label-${answer}`,
                              }}
                              onChange={(event) => handleOnChangeCheckbox(id)}
                            />
                          </ListItemIcon>
                          <ListItemText primary={answer} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </div>
                </List>
              </div>
              <div className="question-view__send-btn-container">
                {handleShowBtn()}
              </div>
              <div className="question-view__review-message-container">
                {reviewMessage !== "" && (
                  <Typography
                    classes={{ root: "question-view__review-message" }}
                  >
                    {reviewMessage}
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionView;
