/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { differenceInMinutes } from "date-fns";

// Material UI Components
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

// Icons
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";

// Components
import PracticeQuestions from "./components/practiceQuestionsTab/PracticeQuestions";
import PracticeExams from "./components/practiceExamsTab/PracticeExams";
import QuestionView from "./components/questionView/QuestionView";
import GradesView from "./components/gradesView/GradesView";

// Hooks
import useFetchCourseInfo from "./hooks/hooks";
import useFetchCommon from "../../commons/hooks/hooks";

const CourseView = () => {
  const { courseId } = useParams();
  const [tabSelected, setTabSelected] = useState("practice-questions");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedExam, setSelectedExam] = useState(false);
  const [isFinishedExam, setIsFinishedExam] = useState(false);
  const [examStartDate, setExamStartDate] = useState(null);

  // Hooks
  const {
    getSelectedCourseDetails,
    selectedCourseDetails,
    exams,
    getExams,
    completeExam,
    examResult,
  } = useFetchCourseInfo(courseId);
  const { loadStudentInfo, studentInfo } = useFetchCommon();

  const handleChange = (event, newValue) => {
    setTabSelected(newValue);
  };

  useEffect(() => {
    getSelectedCourseDetails();
    loadStudentInfo();
    getExams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnClick = () => {
    window.location.href = `http://localhost:3000/accountData/${courseId}`;
  };

  const handleSaveAnswers = (newAnswers) => {
    setSelectedAnswers([...selectedAnswers, ...newAnswers]);
  }

  const handleCompleteExam = (lastAnwsers) => {
    completeExam({
      examId: selectedExam.id,
      state: "FINISHED",
      finalDuration: differenceInMinutes(examStartDate, new Date ()),
      completionDate: new Date(),
      studentAnswersList: [...selectedAnswers, ...lastAnwsers],
    });
    setIsFinishedExam(true);
    setSelectedQuestions(null);
  };

  const handleBackBtn = () => {
    setSelectedQuestion(null);
    setSelectedQuestions(null);
  };

  return (
    <>
      {selectedQuestion || selectedQuestions ? (
        <QuestionView
          selectedQuestion={selectedQuestion}
          questions={selectedQuestions}
          selectedExam={selectedExam}
          handleCompleteExam={handleCompleteExam}
          handleBackBtn={handleBackBtn}
          handleSaveAnswers={handleSaveAnswers}
        />
      ) : (
        <>
          {isFinishedExam ? (
            <GradesView
            handleBackBtn={() => setIsFinishedExam(false)}
            examResult={examResult}
            />
          ) : (
            <div className="course-view">
              <div className="course-view-banner-container">
                <div className="course-view-avatar-container">
                  <Avatar
                    alt="Remy Sharp"
                    src="../../../assets/images/Background.jpeg"
                    sx={{ width: 120, height: 120 }}
                  />
                </div>
                <Typography classes={{ root: "university-title" }}>
                  {studentInfo &&
                  studentInfo.university &&
                  studentInfo.university.name
                    ? studentInfo.university.name
                    : "Universidad"}
                </Typography>
                <div className="course-view-tabs-container">
                  <Tabs
                    orientation="vertical"
                    value={tabSelected}
                    onChange={handleChange}
                    aria-label="course-tabs"
                  >
                    <Tab
                      icon={<MenuBookIcon />}
                      label="Practicar preguntas"
                      value="practice-questions"
                    />
                    <Tab
                      icon={<LibraryBooksIcon />}
                      label="Practicar exámenes"
                      value="practice-exams"
                    />
                  </Tabs>
                </div>
                <div className="course-view-user-image-container">
                  <Avatar
                    alt="Remy Sharp"
                    src="../../../assets/images/Background.jpeg"
                    sx={{ width: 60, height: 60 }}
                  />
                </div>
                <div
                  onClick={() => handleOnClick()}
                  className="course-view-user-info-container"
                >
                  <Typography classes={{ root: "user-name-text" }}>
                    {studentInfo && studentInfo.name && studentInfo.lastName
                      ? `${studentInfo.name} ${studentInfo.lastName}`
                      : "Usuario"}
                  </Typography>
                </div>
                <div className="course-view-line-container"></div>
                <Link href="http://localhost:3000/chooseCourse">
                  Cambiar de materia
                </Link>
              </div>
              <div className="course-view-body-container">
                <div>
                  {tabSelected === "practice-questions" && (
                    <PracticeQuestions
                      courseSelected={selectedCourseDetails}
                      setSelectedQuestion={setSelectedQuestion}
                      setSelectedQuestions={setSelectedQuestions}
                    />
                  )}
                  {tabSelected === "practice-exams" && (
                    <PracticeExams
                      courseSelected={selectedCourseDetails}
                      setSelectedExam={setSelectedExam}
                      setSelectedQuestions={setSelectedQuestions}
                      exams={exams}
                      setExamStartDate={setExamStartDate}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CourseView;
