import { makeStyles } from '@material-ui/core/styles';

// import Theme from './theme';
// import { NAVBAR_HEIGHT } from './components/Navbar/constants';

export default makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  pageContent: {},
  sectionContent: {
    overflow: 'auto',
    display: 'inline-block'
  },
  spinner: {},
  section: {
    width: '100%',
    height: '100%'
    // height: `calc(100% - ${NAVBAR_HEIGHT}px)`
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // backgroundImage: `url('${background}')`,
    filter: 'blur(5px) grayscale(10%) invert(75%)',
    opacity: 0.5
  }
});
