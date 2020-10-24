import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  hidden: {
    display: 'none'
  },
  formControl: {
    width: '70%',
    margin: '0 0 10px 42px'
  },
  link: {
    width: 'fit-content',
    cursor: 'pointer'
  },
  button: {
    backgroundColor: '#ccc',
    '&:hover': {
      backgroundColor: '#bbb'
    }
  }
});
