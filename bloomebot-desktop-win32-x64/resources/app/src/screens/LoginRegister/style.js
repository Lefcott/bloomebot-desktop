import { makeStyles } from '@material-ui/core/styles';

import background from './img/background.jpg';

export default makeStyles({
  root: {
    background: `url('${background}')`,
    width: '100%',
    height: '100%',
    overflowY: 'auto'
  },
  pageTitle: {
    margin: '0 0 0 7px',
    fontSize: 24,
    color: 'white',
    textShadow: '0 0 5px'
  },
  paper: {
    width: '70%',
    marginLeft: '15%',
    marginTop: '30px',
    alignContent: 'center'
  },
  paperTitle: {
    fontSize: 18
  }
});
