/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
import PracticeQuestions from "./components/practiceQuestions/PracticeQuestions";
import PracticeExams from "./components/practiceExams/PracticeExams";

// Constants
import { userData } from "../../constants/userData";
import { courses } from "../../constants/courses";

const CourseView = () => {
  const { courseId } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [tabSelected, setTabSelected] = useState("practice-questions");
  const [courseSelected, setCourseSelected] = useState({});

  const handleChange = (event, newValue) => {
    setTabSelected(newValue);
  };

  const userId = 1;

  useEffect(() => {
    if (userData) {
      const filterData = userData.find(({ id }) => id === userId);
      setUserInfo(filterData);
    }
  }, []);

  useEffect(() => {
    if (courseId && courses) {
      const selectedCourse = courses.find(
        ({ id }) => id.toString() === courseId
      );
      if (selectedCourse) {
        setCourseSelected(selectedCourse);
      }
    }
  }, []);

  return (
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
          {userInfo.university}
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
        <Typography classes={{ root: "user-name-text" }}>
          {userInfo.name}
          {userInfo.lastName}
        </Typography>
        <div className="course-view-line-container"></div>
        <Link href="http://localhost:3000/chooseCourse">
          Cambiar de materia
        </Link>
      </div>
      <div className="course-view-body-container">
        <div>
          {tabSelected === "practice-questions" && (
            <PracticeQuestions courseSelected={courseSelected} />
          )}
          {tabSelected === "practice-exams" && (
            <PracticeExams courseSelected={courseSelected} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseView;
