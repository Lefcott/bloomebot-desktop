import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  buyModal: {
    overflowY: 'auto'
  },
  modalContainer: {
    width: '50%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    alignSelf: 'center',
    margin: '20px 25% 0 25%',
    lineHeight: 1.5,
    padding: 20,
    overflowY: 'auto',
    boxShadow: '0 0 4px 3px #fff',
    '&:focus': {
      outlineWidth: 0
    }
  },
  title: {
    fontWeight: 'bolder',
    textAlign: 'center'
  },
  paypalButton: {
    margin: 10,
    backgroundColor: 'rgba(30, 200, 30, 0.7)',
    '&:hover': {
      backgroundColor: 'rgba(30, 200, 30, 0.3)'
    }
  },
  paypalStrong: {
    color: '#44F',
    textShadow: '0 0 1px 1px'
  }
});
