import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DialogTitle, FormControl, Link, TextField, Button, LinearProgress } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { PropTypes } from 'prop-types';
import { createValidation, validateAll, hookConstants } from '../../../../utils/hooks';
import { checkEmail, checkPassword } from '../../../../validators';
import { login } from '../../../../services/login';
import LanguageSelector from '../../../../components/LanguageSelector';

import useStyles from '../commons/style';

import { SCREENS } from '../../../../constants';
import { LOGIN_STATUSES, FIELDS } from './constants';
import getLang from './lang';
import { setScreen } from '../../../../actions/screen';

export default function Login(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lang = getLang(useSelector(state => state.language));
  const [loginStatus, setLoginStatus] = useState(LOGIN_STATUSES.WAITING_USER);
  const [email, setEmail] = useState('lefcottdev@hotmail.com'); // TODO remove some day
  const [password, setPassword] = useState('hola'); // TODO remove some day
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  if (!props.visible) return <div />;

  createValidation(hookConstants.LOGIN_FORM, FIELDS.EMAIL, email, checkEmail);
  createValidation(hookConstants.LOGIN_FORM, FIELDS.PASSWORD, password, checkPassword);

  const handleLogin = async () => {
    const validation = validateAll(hookConstants.LOGIN_FORM);
    const { [FIELDS.EMAIL]: _emailError, [FIELDS.PASSWORD]: _passwordError } = validation;

    if (_emailError !== emailError) setEmailError(_emailError);
    if (_passwordError !== passwordError) setPasswordError(_passwordError);
    if (Object.keys(validation).filter(key => validation[key]).length) return;
    setLoginStatus(LOGIN_STATUSES.WAITING_API);
    const response = await login(email, password);
    if (!response || ![200, 403].includes(response.status)) return setLoginStatus(LOGIN_STATUSES.ERROR);
    if (response.status === 403) return setLoginStatus(LOGIN_STATUSES.INVALID_CREDENTIALS);
    setLoginStatus(LOGIN_STATUSES.LOGGED_IN);
    dispatch(setScreen(SCREENS.DASHBOARD));
  };
  const handleEnter = ({ key }) => {
    if (key !== 'Enter') return;
    handleLogin();
  };
  return (
    <div>
      <LanguageSelector />
      <LinearProgress className={loginStatus === LOGIN_STATUSES.WAITING_API ? undefined : classes.hidden} />
      <Alert
        severity="error"
        style={loginStatus === LOGIN_STATUSES.ERROR ? {} : { display: 'none' }}
        action={
          <Button color="inherit" size="small" onClick={() => setLoginStatus(LOGIN_STATUSES.WAITING_USER)}>
            OK
          </Button>
        }
      >
        <AlertTitle>Error</AlertTitle>
        {lang.errors.general_1} <strong>{lang.errors.general_2}</strong>
      </Alert>
      <Alert
        severity="error"
        style={loginStatus === LOGIN_STATUSES.INVALID_CREDENTIALS ? {} : { display: 'none' }}
        action={
          <Button color="inherit" size="small" onClick={() => setLoginStatus(LOGIN_STATUSES.WAITING_USER)}>
            OK
          </Button>
        }
      >
        <AlertTitle>Error</AlertTitle>
        {lang.errors.invalidCredentials}
      </Alert>
      <Alert
        severity="success"
        style={loginStatus === LOGIN_STATUSES.LOGGED_IN ? {} : { display: 'none' }}
        action={
          <Button color="inherit" size="small" onClick={() => setLoginStatus(LOGIN_STATUSES.WAITING_USER)}>
            OK
          </Button>
        }
      >
        <AlertTitle>Login OK</AlertTitle>
        {lang.loggingIn}
      </Alert>
      <DialogTitle>{lang.login}</DialogTitle>
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
          type="password"
          value={password}
          error={passwordError}
          id="outlined-error-helper-text"
          label={lang.password}
          helperText={passwordError && lang.errors.passwordLen}
          variant="outlined"
          onChange={({ target }) => setPassword(target.value)}
          onKeyPress={handleEnter}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        {lang.dontHaveAnAccount}{' '}
        <Link className={classes.link} onClick={() => props.onSwitch()}>
          {lang.register}
        </Link>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button className={classes.button} onClick={handleLogin}>
          {lang.access}
        </Button>
      </FormControl>
    </div>
  );
}

Login.propTypes = {
  visible: PropTypes.bool,
  onSwitch: PropTypes.func.isRequired
};
Login.defaultProps = {
  visible: true
};
