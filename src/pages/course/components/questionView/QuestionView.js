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
  const { selectedQuestion, setSelectedQuestion, questions, setQuestions } =
    props;

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

  const handleNextQuestion = () => {
    setReviewMessage("");
    setSelectedOptions([]);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSendAnswer = () => {
    const totalCorrectOptions = currentQuestion.options.filter(
      (option) => option.correct
    ).length;

    const totalcorrectOptionsSelected = selectedOptions.filter(
      (optionId) =>
        currentQuestion.options.find((option) => option.id === optionId)
          ?.correct
    ).length;

    setReviewMessage(
      `Marcaste ${totalcorrectOptionsSelected} de ${totalCorrectOptions} respuestas correctas!`
    );
  };

  const handleBackBtn = () => {
    setSelectedQuestion(null);
    setQuestions(null);
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
                Practicando preguntas...
              </Typography>
            </div>
          </div>
          <div className="question-view__body">
            <div className="question-view__body-left">
              <div className="question-view__question-title-container">
                <Typography classes={{ root: "question-view__question-title" }}>
                  {currentQuestion.title}
                </Typography>
              </div>
            </div>
            <div className="question-view__body-right">
              <div className="question-view__list-container">
                <List>
                  <div className="question-view__options-list">
                    {currentQuestion.options.map(({ id, title }) => (
                      <ListItem key={id} disablePadding>
                        <ListItemButton role={undefined} dense>
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={selectedOptions.includes(id)}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{
                                "aria-labelledby": `checkbox-list-label-${title}`,
                              }}
                              onChange={(event) => handleOnChangeCheckbox(id)}
                            />
                          </ListItemIcon>
                          <ListItemText primary={title} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </div>
                </List>
              </div>
              <div className="question-view__send-btn-container">
                {reviewMessage &&
                questions &&
                currentQuestionIndex < questions.length - 1 ? (
                  <Button
                    variant="contained"
                    className="question-view__send-btn"
                    onClick={handleNextQuestion}
                    disabled={
                      selectedQuestion ||
                      currentQuestionIndex > questions.length - 1
                    }
                  >
                    Siguiente pregunta
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    className="question-view__send-btn"
                    onClick={handleSendAnswer}
                  >
                    Enviar respuesta
                  </Button>
                )}
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
