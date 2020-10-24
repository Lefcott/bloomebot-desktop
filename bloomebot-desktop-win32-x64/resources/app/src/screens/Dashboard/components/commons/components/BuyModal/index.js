import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, DialogTitle, Button, CircularProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { activatePayment } from '../../../../../../services/payments';
import PropTypes from 'prop-types';

import { getCurrentUser } from '../../../../../../services/user';
import { setUser } from '../../../../../../actions/user';
import { setScreen } from '../../../../../../actions/screen';
import { ERROR_CODES, SCREENS } from '../../../../../../constants';
import getLang from './lang';
import useStyles from './style';
import { goToLink } from '../../../../../../utils/html';

export default function BuyModal({ data, getOrder, onClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lang = getLang(useSelector(state => state.language));
  const [paypalLink, setPaypalLink] = useState(null);
  const [paypalError, setPaypalError] = useState(false);
  const [waitingPaypalActivation, setWaitingPaypalActivation] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [alreadyPurchased, setAlreadyPurchased] = useState(false);
  const accountActivated = useRef(false);
  const [getPaypalOrder] = useState(() => () => getOrder('paypal'));

  useEffect(() => {
    let mounted = true;
    getPaypalOrder().then(response => {
      if (!mounted) return;
      if (!response) return setPaypalError(true);
      if (response.status !== 200) {
        if (response.body.error_code === ERROR_CODES.ALREADY_PURCHASED) {
          getCurrentUser().then(userResponse => {
            if (!userResponse || userResponse.status !== 200) return dispatch(setScreen(SCREENS.LOGIN));
            dispatch(setUser(userResponse.body.user));
          });
          setAlreadyPurchased(true);
          return setPaypalError(true);
        }
      }
      setPaypalLink(response.body.payment_link);
      setOrderId(response.body.order_id);
    });
    return function cleanup() {
      mounted = false;
    };
  }, [dispatch, getPaypalOrder]);

  const handlePaypalPay = () => {
    if (accountActivated.current) return goToLink(paypalLink);
    setWaitingPaypalActivation(true);
    activatePayment(orderId).then(response => {
      if (!response || response.status !== 200) return onClose();
      setWaitingPaypalActivation(false);
      accountActivated.current = true;
      goToLink(paypalLink);
    });
  };

  return (
    <div>
      {alreadyPurchased && (
        <Snackbar open>
          <Alert onClose={onClose} severity="info">
            {lang.hackAlreadyPurchased}
          </Alert>
        </Snackbar>
      )}
      <Modal open onClose={onClose} className={classes.buyModal}>
        <div className={classes.modalContainer}>
          <DialogTitle className={classes.title}>
            {lang.youreGonnaBuy} {lang.thisHack}
          </DialogTitle>
          {Object.entries(data).map(([key, value], i) => (
            <div key={i}>
              <strong>{key}:</strong>&nbsp;{value}
              <br />
            </div>
          ))}
          <center>
            {paypalError ? (
              <div />
            ) : paypalLink ? (
              <Button
                className={classes.paypalButton}
                onClick={handlePaypalPay}
                disabled={waitingPaypalActivation}
              >
                {lang.buyWith}&nbsp;<strong className={classes.paypalStrong}>PayPal</strong>
              </Button>
            ) : (
              <CircularProgress />
            )}
          </center>
        </div>
      </Modal>
    </div>
  );
}
BuyModal.propTypes = {
  getOrder: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired
};
