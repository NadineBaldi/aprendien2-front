import React from "react";

// Material UI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";

// Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const GradesView = (props) => {
  const { handleBackBtn, examResult } = props;
  const { result, studentAnswersList = [] } = examResult;
  const calification = (result / studentAnswersList.length) * 100;

  const StyledRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
      color: theme.palette.action.disabled,
    },
  }));

  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: "Very Dissatisfied",
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: "Dissatisfied",
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: "Neutral",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: "Satisfied",
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: "Very Satisfied",
    },
  };

  return (
    <div className="grades-view">
      <div className="grades-view__header">
        <div className="grades-view__back-button-container">
          <Button
            className="grades-view__back-button"
            startIcon={<ArrowBackIcon />}
            onClick={handleBackBtn}
          >
            Volver al curso
          </Button>
        </div>
        <div className="grades-view__header-title">
          <Typography classes={{ root: "grades-view__title" }}>
            Calificación final
          </Typography>
        </div>
      </div>
      <div className="grades-view__body">
        <div className="grades-view__text-container">
          <div className="grades-view__congrats-text-container">
            <Typography classes={{ root: "grades-view__congrats-text" }}>
              Felicitaciones!
            </Typography>
            <Typography classes={{ root: "grades-view__text" }}>
              Has finalizado el exámen.
            </Typography>
          </div>
          <Typography classes={{ root: "grades-view__text" }}>
            Tu calificación final es:
          </Typography>
        </div>
        <div className="grades-view__grade-container">
          <Box position="relative" display="inline-flex">
            <CircularProgress
              variant="determinate"
              value={100}
              sx={{
                color: "#F2F2F2",
              }}
            />
            <CircularProgress
              variant="determinate"
              value={calification}
              sx={{
                color: "primary.main",
                position: "absolute",
                zIndex: 2,
              }}
            />
            <Box
              sx={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "primary.main",
                zIndex: 3,
              }}
            >
              <Typography variant="caption" component="div" color="inherit">
                {`${calification}%`}
              </Typography>
            </Box>
          </Box>
        </div>
        <div className="grades-view__feedback-text-container">
          <Typography classes={{ root: "grades-view__feedback-text" }}>
            ¿Cómo calificarías tu experiencia al resolver este exámen?
          </Typography>
        </div>
        <div className="grades-view__feedback-icons-container">
          <StyledRating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
          />
        </div>
      </div>
    </div>
  );
};

export default GradesView;
