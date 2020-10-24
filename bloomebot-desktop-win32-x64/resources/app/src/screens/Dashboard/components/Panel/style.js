import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    width: 230,
    height: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0.23)',
    borderRadius: 23
  },
  languageSelector: {
    marginBottom: 8,
    backgroundColor: 'dimgray',
    borderRadius: 12
  },
  button: {
    backgroundColor: '#fff',
    boxShadow: '0 0 3px 3px #fff',
    textAlign: 'center',
    cursor: 'pointer',
    width: '90%',
    marginLeft: '5%',
    marginBottom: 30
  }
});
