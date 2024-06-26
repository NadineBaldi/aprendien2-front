import React, { useState } from "react";

// Material UI Components
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Constants
import {
  EMAIL,
  PASSWORD,
  INVALID_EMAIL_FORMAT,
  INVALID_PASSWORD_FORMAT,
  ERROR_TERMS_AND_CONDITIONS,
  NOT_SAME_PASS,
  ERROR_EMPTY_FIELDS,
  DUPLICATED_PASS,
} from "../../../../constants/util";

const SignUpStep1 = (props) => {
  const {
    setCurrentStep,
    currentStep,
    values,
    errorMessages,
    setErrorMessages,
    handleFieldChange,
  } = props;

  // Use states
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDuplicatedPass, setShowDuplicatedPass] = useState(false);
  const [errorTermsAndConditionsMessage, setErrorTermsAndConditionsMessage] =
    useState("");

  const handleChange = () => {
    setChecked(!checked);
    setErrorTermsAndConditionsMessage("");
  };

  const getEmailErrorMessage = () => {
    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;

    if (values[EMAIL] === "") {
      return ERROR_EMPTY_FIELDS;
    } else if (!regex.test(values[EMAIL])) {
      return INVALID_EMAIL_FORMAT;
    }
    return "";
  };

  const getPasswordErrorMessage = (key) => {
    if (values[key] === "") {
      return ERROR_EMPTY_FIELDS;
    } else if (values[key].length <= 7) {
      return INVALID_PASSWORD_FORMAT;
    } else if (values[PASSWORD] !== values[DUPLICATED_PASS]) {
      return NOT_SAME_PASS;
    }
    return "";
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowDuplicatedPassword = () =>
    setShowDuplicatedPass((show) => !show);

  const showNextStep = () => {
    const newErrorMessages = {
      email: getEmailErrorMessage(),
      password: getPasswordErrorMessage(PASSWORD),
      duplicatedPass: getPasswordErrorMessage(DUPLICATED_PASS),
    };

    if (!checked) {
      setErrorTermsAndConditionsMessage(ERROR_TERMS_AND_CONDITIONS);
    } else {
      setErrorTermsAndConditionsMessage("");
    }

    setErrorMessages(newErrorMessages);

    if (
      newErrorMessages.email === "" &&
      newErrorMessages.password === "" &&
      newErrorMessages.duplicatedPass === "" &&
      values[PASSWORD] === values[DUPLICATED_PASS] &&
      checked
    ) {
      setCurrentStep(2);
    }
  };

  return (
    <div>
      <div className="signUp-title-container">
        <Typography variant="title" color="primary">
          Registro
        </Typography>
        <Typography variant="subtitle">
          Create una cuenta para poder comenzar.
        </Typography>
      </div>
      <div className="text-field-container">
        <TextField
          id={EMAIL}
          value={values.email}
          label="Correo electrónico"
          placeholder="aaaa@gmail.com"
          color="primary"
          focused
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon color="primary" />
              </InputAdornment>
            ),
            className: "text-field",
          }}
          style={{ marginTop: 11 }}
          onChange={(event) => handleFieldChange(EMAIL, event.target.value)}
          error={!!errorMessages.email}
          helperText={errorMessages.email}
        />
      </div>
      <div className="text-field-container">
        <TextField
          id={PASSWORD}
          value={values.password}
          label="Contraseña"
          placeholder="********"
          color="primary"
          type={showPassword ? "text" : "password"}
          focused
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color="primary" />
              </InputAdornment>
            ),
            className: "text-field",
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <Visibility fontSize="small" color="primary" />
                  ) : (
                    <VisibilityOff fontSize="small" color="primary" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          style={{ marginTop: 11 }}
          onChange={(event) => handleFieldChange(PASSWORD, event.target.value)}
          error={!!errorMessages.password}
          helperText={errorMessages.password}
        />
      </div>
      <div className="text-field-container">
        <TextField
          id={DUPLICATED_PASS}
          value={values.duplicatedPass}
          label="Ingrese de nuevo su contraseña"
          placeholder="********"
          color="primary"
          type={showDuplicatedPass ? "text" : "password"}
          focused
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color="primary" />
              </InputAdornment>
            ),
            className: "text-field",
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowDuplicatedPassword}
                  edge="end"
                >
                  {showDuplicatedPass ? (
                    <Visibility fontSize="small" color="primary" />
                  ) : (
                    <VisibilityOff fontSize="small" color="primary" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          style={{ marginTop: 11 }}
          onChange={(event) =>
            handleFieldChange(DUPLICATED_PASS, event.target.value)
          }
          error={!!errorMessages.duplicatedPass}
          helperText={errorMessages.duplicatedPass}
        />
      </div>
      <div className="terms-and-conditions-container-with-error">
        <div className="terms-and-conditions-container">
          <Checkbox checked={checked} onChange={handleChange} size="small" />
          <div className="terms-and-conditions-text">
            <Typography classes={{ root: "text" }}>
              Estoy de acuerdo con los
            </Typography>
            <Link href="#" underline="hover" className="link-terms-and-cond">
              términos y condiciones.
            </Link>
          </div>
        </div>
        {errorTermsAndConditionsMessage && (
          <div className="terms-and-conditions-with-error-text">
            <Typography color="error" variant="caption">
              {errorTermsAndConditionsMessage}
            </Typography>
          </div>
        )}
      </div>
      <div className="next-button-container">
        <Button
          variant="contained"
          className="next-button"
          onClick={() => showNextStep()}
        >
          Siguiente
        </Button>
        <Typography classes={{ root: "step-text" }}>
          Paso {currentStep} de 3
        </Typography>
      </div>
      <div className="log-in-container">
        <Typography variant="subtitle">¿Ya tenes una cuenta?</Typography>
        <Link
          href="http://localhost:3000/login"
          underline="hover"
          className="link-log-in"
        >
          Ingresá acá
        </Link>
      </div>
    </div>
  );
};

export default SignUpStep1;
