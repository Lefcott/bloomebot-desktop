import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { CircularProgress, Snackbar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { getHackOrder } from '../../../../services/payments';
import BuyModal from '../commons/components/BuyModal';
import HackCard from '../commons/components/HackCard';
import { getHacks } from '../../../../services/hacks';
import { setHacks } from '../../../../actions/hacks';
import { getPriceLabel } from './utils';
import useStyle from './style';
import getLang from './lang';

export default function Panel() {
  const dispatch = useDispatch();
  const classes = useStyle();
  const lang = getLang(useSelector(({ language }) => language));
  const hacks = useSelector(store => store.hacks);
  const [selectedHack, setSelectedHack] = useState(null);
  const [licenceID, setLicenceID] = useState(null);
  const [hackError, setHackError] = useState(false);
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    let mounted = true;
    getHacks().then(response => {
      if (!mounted) return;
      setWaiting(false);
      if (!response || response.status !== 200) return setHackError(true);
      setHackError(false);
      dispatch(setHacks(response.body.hacks));
    });
    return function cleanup() {
      mounted = false;
    };
  }, [dispatch]);

  const handleBuy = (hack, _licenceID) => {
    setSelectedHack(hack);
    setLicenceID(_licenceID);
  };
  return (
    <div className={classes.root}>
      {waiting && <CircularProgress className={classes.spinner} key={0} />}
      {hackError && (
        <Snackbar open>
          <Alert severity="error" key={1}>
            <AlertTitle>{lang.errors.errorGettingHacksTitle}</AlertTitle>
            {lang.errors.errorGettingHacks}
          </Alert>
        </Snackbar>
      )}
      {Object.entries(hacks).map(([, hack], i) => (
        <HackCard hack={hack} onBuy={_licenceID => handleBuy(hack, _licenceID)} key={i + 2} />
      ))}
      {selectedHack && (
        <BuyModal
          onClose={() => setSelectedHack(null)}
          getOrder={platform => getHackOrder(platform, selectedHack, licenceID)}
          hack={selectedHack}
          data={{
            [lang.fields.game]: selectedHack.name,
            [lang.fields.description]: lang.hackDescriptions[selectedHack.code],
            [lang.fields.price]: getPriceLabel(selectedHack.licences[licenceID].price, 'USD'),
            [lang.fields.duration]: lang.hackDuration(selectedHack.licences[licenceID])
          }}
        />
      )}
    </div>
  );
}
