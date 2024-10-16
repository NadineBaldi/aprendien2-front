import React, { useState, useEffect } from "react";

// Components
import Step1 from "./components/signUpStep1/SignUpStep1View";
import Step2 from "./components/signUpStep2/SignUpStep2View";
import Step3 from "./components/signUpStep3/SignUpStep3View";

//hook
import useFetchCommon from "./hooks";

import { getCookie } from "../../commons/helpers/cookies";

// Utils
import { TOKEN } from "../../constants/util";

const SignUp = () => {
  // Use states
  const [currentStep, setCurrentStep] = useState(1);

  // variable for textFields values
  const [values, setValues] = useState({
    email: "",
    password: "",
    duplicatedPass: "",
    name: "",
    lastName: "",
    dateOfBirth: "",
    dni: "",
    provinceSelected: "",
    city: "",
    address: "",
    phoneNumber: "",
    universityProvince: "",
    universityCity: "",
    docketNumber: "",
    university: "",
    active: true,
  });

  // variable for handle error messages
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
    duplicatedPass: "",
    name: "",
    lastName: "",
    dateOfBirth: "",
    dni: "",
    provinceSelected: "",
    city: "",
    address: "",
    phoneNumber: "",
    universityProvince: "",
    universityCity: "",
    docketNumber: "",
    university: "",
  });

  const { loadProvinces, provinces } = useFetchCommon();
  const token = getCookie(TOKEN);

  useEffect(() => {
    if (token) {
      window.location.href = "http://localhost:3000/chooseCourse";
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    loadProvinces();
  }, []);

  const handleFieldChange = (fieldName, value) => {
    setValues({
      ...values,
      [fieldName]: value,
    });

    // Clean message error
    setErrorMessages({
      ...errorMessages,
      [fieldName]: "",
    });
  };

  const handleDisplaySteps = () => {
    switch (currentStep) {
      case 1:
      default:
        return (
          <Step1
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            values={values}
            setValues={setValues}
            errorMessages={errorMessages}
            setErrorMessages={setErrorMessages}
            handleFieldChange={handleFieldChange}
          />
        );
      case 2:
        return (
          <Step2
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            values={values}
            setValues={setValues}
            errorMessages={errorMessages}
            setErrorMessages={setErrorMessages}
            handleFieldChange={handleFieldChange}
            provinces={provinces}
          />
        );
      case 3:
        return (
          <Step3
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            values={values}
            setValues={setValues}
            errorMessages={errorMessages}
            setErrorMessages={setErrorMessages}
            handleFieldChange={handleFieldChange}
            provinces={provinces}
          />
        );
    }
  };

  return (
    <div className="signUp">
      <div className="signUp-container">{handleDisplaySteps()}</div>
    </div>
  );
};

export default SignUp;
