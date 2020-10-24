import React from 'react';
import { useSelector } from 'react-redux';

import LoginRegister from './screens/LoginRegister';
import Dashboard from './screens/Dashboard';
import { SCREENS } from './constants';

export default function Routes() {
  const screen = useSelector(store => store.screen);

  if (screen === SCREENS.DASHBOARD) return <Dashboard />;
  if (screen === SCREENS.LOGIN) return <LoginRegister />;
}
