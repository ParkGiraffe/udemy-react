import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: fName,
    isValid: fNameIsValid,
    hasError: fNameHasErr,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = useInput(isNotEmpty);

  const {
    value: lName,
    isValid: lNameIsValid,
    hasError: lNameHasErr,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: lNameReset,
  } = useInput(isNotEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasErr,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(isEmail);

  let formIsValid;

  if (lNameIsValid && fNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!lNameIsValid || !fNameIsValid || !emailIsValid) return;

    lNameReset();
    fNameReset();
    emailReset();
  };

  const lNameInputStyles = lNameHasErr
    ? "form-control invalid"
    : "form-control";

  const fNameInputStyles = fNameHasErr
    ? "form-control invalid"
    : "form-control";

  const emailInputStyles = emailHasErr
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={fNameInputStyles}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="fName"
            onChange={fNameChangeHandler}
            onblur={fNameBlurHandler}
            value={fName}
          />
          {fNameHasErr && (
            <p className="error-text">Please enter a valid value</p>
          )}
        </div>
        <div className={lNameInputStyles}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lName"
            onChange={lNameChangeHandler}
            onblur={lNameBlurHandler}
            value={lName}
          />
        </div>
        {lNameHasErr && (
          <p className="error-text">Please enter a valid value</p>
        )}
      </div>
      <div className={emailInputStyles}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onblur={emailBlurHandler}
          value={email}
        />
        {emailHasErr && (
          <p className="error-text">Please enter a valid value</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
