/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

// Material UI Components
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

// Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

// Constants
import { courses } from "../../../../constants/courses";

const PracticeQuestions = (props) => {
  const { courseId } = props;

  const [courseSelected, setCourseSelected] = useState({});
  const [expanded, setExpanded] = useState([]);

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

  const handleAccordionClick = (unitId) => {
    if (!expanded.includes(unitId)) {
      const aux = [...expanded];
      aux.push(unitId);
      setExpanded(aux);
    } else {
      const aux = [...expanded.filter((item) => item !== unitId)];
      setExpanded(aux);
    }
  };

  return (
    <div className="practice-questions">
      <div className="practice-questions-title-container">
        <Typography variant="title" color="primary">
          {courseSelected ? courseSelected.name : "Curso"}
        </Typography>
        <Typography classes={{ root: "subtitle" }}>
          Practicar preguntas
        </Typography>
      </div>
      <div className="practice-questions-units-container">
        {courseSelected &&
          courseSelected.units &&
          courseSelected.units.map(({ name, id, questions }) => (
            <div className="practice-questions-accordion">
              <Accordion
                key={id}
                expanded={expanded.includes(id)}
                onChange={() => handleAccordionClick(id)}
              >
                <AccordionSummary id={id}>
                  <div className="accordion-summary-container">
                    <div className="practice-questions-title-accordion-container">
                      <div>
                        <Typography classes={{ root: "question-name-text" }}>
                          {name}
                        </Typography>
                      </div>
                      <div className="practice-questions-total-question-container">
                        <Typography classes={{ root: "subtitle" }}>
                          {questions.length}
                        </Typography>
                        {expanded.includes(id) ? (
                          <KeyboardArrowUpIcon fontSize="small" />
                        ) : (
                          <KeyboardArrowDownIcon fontSize="small" />
                        )}
                      </div>
                      <div className="practice-questions-btn-container">
                        <Button className="practice-questions-all-practice-btn">
                          Practicar todas
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {questions.map((question) => (
                      <div className="practice-questions-list-item-container">
                        <ListItem
                          disablePadding
                          key={question}
                          secondaryAction={
                            <IconButton edge="end" aria-label="play">
                              <PlayCircleIcon fontSize="small" color="green" />
                            </IconButton>
                          }
                        >
                          <ListItemButton>
                            <ListItemIcon>
                              <LibraryBooksIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={question} />
                          </ListItemButton>
                        </ListItem>
                      </div>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PracticeQuestions;
