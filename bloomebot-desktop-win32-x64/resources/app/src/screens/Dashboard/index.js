import { SECTIONS } from '../../constants';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCurrentUser } from '../../services/user';
import { setUser } from '../../actions/user';
import { setScreen } from '../../actions/screen';
import { socket } from '../../utils/socketIo';
import LoadingPage from '../../components/loadingPage';
import Panel from './components/Panel';
import AvailableHacks from './components/AvailableHacks';
import { IO_EVENTS } from './constants';
import useStyle from './style';
import { SCREENS } from '../../constants';

export default function Dashboard() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const section = useSelector(store => store.section);
  const user = useSelector(store => store.user);

  useEffect(() => {
    let mounted = true;
    const _setUser = _user => dispatch(setUser(_user));
    getCurrentUser().then(response => {
      if (!mounted) return;
      if (!response || response.status !== 200) return dispatch(setScreen(SCREENS.LOGIN));
      const responseUser = response.body.user;
      _setUser(responseUser);
      socket.emit(IO_EVENTS.emit.I_AM_X, responseUser._id);
    });
    socket.on(IO_EVENTS.receive.USER_UPDATED, _setUser);
    return function cleanup() {
      mounted = false;
      socket.removeEventListener(IO_EVENTS.receive.USER_UPDATED, _setUser);
    };
  }, [dispatch]);

  return user ? (
    <div className={classes.root}>
      <div className={classes.pageContent}>
        <Panel />
      </div>
      <div className={classes.sectionContent}>{section === SECTIONS.HACK_LIST && <AvailableHacks />}</div>
    </div>
  ) : (
    <LoadingPage />
  );
}
