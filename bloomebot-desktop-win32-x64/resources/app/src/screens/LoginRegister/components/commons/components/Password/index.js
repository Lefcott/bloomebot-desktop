import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Input, InputLabel, InputAdornment, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function Password(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);
  return (
    <div>
      <InputLabel htmlFor="standard-adornment-password">{props.label}</InputLabel>
      <Input
        onKeyPress={props.onKeyPress}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment id="standard-adornment-password" position="end">
            <IconButton aria-label="toggle password visibility" onClick={handleTogglePassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
}

Password.propTypes = {
  label: PropTypes.string,
  onKeyPress: PropTypes.func
};
Password.defaultProps = {
  label: 'Password',
  onKeyPress: () => {}
};
