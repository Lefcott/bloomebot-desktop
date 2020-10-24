import { makeStyles } from '@material-ui/core/styles';

const titleBlack = 'rgba(0, 0, 0, 0.7)';
export default makeStyles({
  card: {
    margin: 7.7,
    maxWidth: 345,
    flexGrow: 1
  },
  title: {
    position: 'relative',
    top: -60,
    left: 12,
    width: 'fit-content',
    color: '#fff',
    fontSize: 16,
    backgroundColor: titleBlack,
    borderRadius: '20px',
    boxShadow: `0 0 2px 3px ${titleBlack}`,
    padding: '1px 8px 3px 8px',
    textShadow: '0 0 50px'
  },
  secondTitle: {
    fontSize: 14
  },
  cardContent: {
    padding: '5px 20px 0 10px'
  },
  media: {
    height: 140
  },
  button: {
    backgroundColor: 'lightblue',
    boxShadow: '0 0 3px 3px #fff',
    textAlign: 'center',
    cursor: 'pointer',
    width: '90%',
    fontSize: 8,
    padding: 5
  }
});
