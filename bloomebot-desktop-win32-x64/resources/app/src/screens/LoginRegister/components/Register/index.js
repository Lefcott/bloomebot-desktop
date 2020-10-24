import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DialogTitle, FormControl, Link, Button, TextField, LinearProgress } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { createValidation, validateAll, hookConstants } from 'utils/hooks';
import { checkEmail, checkName, checkPassword, checkEquals } from 'validators';
import { register } from 'services/register';
import LanguageSelector from 'components/LanguageSelector';

import useStyles from '../commons/style';

import { SCREENS } from '../../../../constants';
import getLang from './lang';
import { FIELDS, REGISTER_STATUSES } from './constants';
import { setScreen } from '../../../../actions/screen';

export default function Register(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lang = getLang(useSelector(state => state.language));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(REGISTER_STATUSES.WAITING_USER);
  if (!props.visible) return <div />;

  createValidation(hookConstants.REGISTER_FORM, FIELDS.EMAIL, email, checkEmail);
  createValidation(hookConstants.REGISTER_FORM, FIELDS.PASSWORD, password, checkPassword);
  createValidation(
    hookConstants.REGISTER_FORM,
    FIELDS.CONFIRM_PASSWORD,
    confirmPassword,
    checkEquals,
    password
  );
  createValidation(hookConstants.REGISTER_FORM, FIELDS.NAME, name, checkName);
  createValidation(hookConstants.REGISTER_FORM, FIELDS.SURNAME, surname, checkName);

  const handleRegister = async () => {
    const validation = validateAll(hookConstants.REGISTER_FORM);
    const {
      [FIELDS.EMAIL]: _emailError,
      [FIELDS.PASSWORD]: _passwordError,
      [FIELDS.CONFIRM_PASSWORD]: _confirmPasswordError,
      [FIELDS.NAME]: _nameError,
      [FIELDS.SURNAME]: _surnameError
    } = validation;

    if (_emailError !== emailError) setEmailError(_emailError);
    if (_passwordError !== passwordError) setPasswordError(_passwordError);
    if (_confirmPasswordError !== confirmPasswordError) setConfirmPasswordError(_confirmPasswordError);
    if (_nameError !== nameError) setNameError(_nameError);
    if (_surnameError !== surnameError) setSurnameError(_surnameError);
    if (Object.keys(validation).filter(key => validation[key]).length) return;

    setRegisterStatus(REGISTER_STATUSES.WAITING_API);
    const response = await register(email, password, name, surname);
    if (!response || ![200, 409].includes(response.status)) return setRegisterStatus(REGISTER_STATUSES.ERROR);
    if (response.status === 409) return setRegisterStatus(REGISTER_STATUSES.EMAIL_ALREADY_EXISTS);
    setRegisterStatus(REGISTER_STATUSES.REGISTERED);
    dispatch(setScreen(SCREENS.DASHBOARD));
  };
  const handleEnter = ({ key }) => {
    if (key !== 'Enter') return;
    handleRegister();
  };

  return (
    <div>
      <LanguageSelector />
      <LinearProgress
        className={registerStatus === REGISTER_STATUSES.WAITING_API ? undefined : classes.hidden}
      />
      <Alert
        severity="error"
        style={registerStatus === REGISTER_STATUSES.ERROR ? {} : { display: 'none' }}
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => setRegisterStatus(REGISTER_STATUSES.WAITING_USER)}
          >
            OK
          </Button>
        }
      >
        <AlertTitle>Error</AlertTitle>
        {lang.errors.general_1} <strong>{lang.errors.general_2}</strong>
      </Alert>
      <Alert
        severity="error"
        style={registerStatus === REGISTER_STATUSES.EMAIL_ALREADY_EXISTS ? {} : { display: 'none' }}
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => setRegisterStatus(REGISTER_STATUSES.WAITING_USER)}
          >
            OK
          </Button>
        }
      >
        <AlertTitle>Error</AlertTitle>
        {lang.emailAlreadyExists}
      </Alert>
      <Alert
        severity="success"
        style={registerStatus === REGISTER_STATUSES.REGISTERED ? {} : { display: 'none' }}
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => setRegisterStatus(REGISTER_STATUSES.WAITING_USER)}
          >
            OK
          </Button>
        }
      >
        <AlertTitle>{lang.userCreatedTitle}</AlertTitle>
        {lang.userCreatedMessage}
      </Alert>
      <DialogTitle>{lang.register}</DialogTitle>
      <FormControl className={classes.formControl}>
        <TextField
          autoFocus
          value={email}
          error={emailError}
          id="outlined-error-helper-text"
          label={lang.email}
          helperText={emailError && lang.errors.badEmailFormat}
          variant="outlined"
          onChange={({ target }) => setEmail(target.value)}
          onKeyPress={handleEnter}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          value={name}
          error={nameError}
          id="outlined-error-helper-text"
          label={lang.name}
          helperText={nameError && lang.errors.emptyName}
          variant="outlined"
          onChange={({ target }) => setName(target.value)}
          onKeyPress={handleEnter}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          value={surname}
          error={surnameError}
          id="outlined-error-helper-text"
          label={lang.surname}
          helperText={surnameError && lang.errors.emptySurname}
          variant="outlined"
          onChange={({ target }) => setSurname(target.value)}
          onKeyPress={handleEnter}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          value={password}
          error={passwordError}
          id="outlined-error-helper-text"
          label={lang.password}
          type="password"
          helperText={passwordError && lang.errors.passwordLen}
          variant="outlined"
          onChange={({ target }) => setPassword(target.value)}
          onKeyPress={handleEnter}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          value={confirmPassword}
          error={confirmPasswordError}
          id="outlined-error-helper-text"
          label={lang.confirmPassword}
          type="password"
          helperText={confirmPasswordError && lang.errors.passwordsMustMatch}
          variant="outlined"
          onChange={({ target }) => setConfirmPassword(target.value)}
          onKeyPress={handleEnter}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        {lang.alreadyHaveAnAccount}{' '}
        <Link className={classes.link} onClick={() => props.onSwitch()}>
          {lang.login}
        </Link>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button className={classes.button} onClick={() => handleEnter({ key: 'Enter' })}>
          {lang.createAccount}
        </Button>
      </FormControl>
    </div>
  );
}

Register.propTypes = {
  visible: PropTypes.bool,
  onSwitch: PropTypes.func.isRequired
};
Register.defaultProps = {
  visible: true
};
