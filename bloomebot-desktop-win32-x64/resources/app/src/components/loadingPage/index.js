import React from 'react';
import { LinearProgress } from '@material-ui/core';

import useStyles from './style';

export default function LoadingPage() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <LinearProgress className={classes.spinner} />
    </div>
  );
}
