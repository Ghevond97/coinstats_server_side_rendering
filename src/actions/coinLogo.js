import CoinMarketCap from 'coinmarketcap-api';

import { REQUEST_LOGO, RECEIVE_LOGO, ERROR_LOGO } from '../constants';

const apiKey = 'b120973f-2787-4115-9e4f-504eebccdf6a';

const client = new CoinMarketCap(apiKey);

const requestLogo = () => {
  return {
    type: REQUEST_LOGO
  };
};

const receivedLogo = json => {
  return {
    type: RECEIVE_LOGO,
    payload: json
  };
};

export const getLogo = id => {
  return dispatch => {
    dispatch(requestLogo());
    return client
      .getMetadata({symbol: id})
      .then(json => dispatch(receivedLogo(json.data)))
      .catch(error => console.log(error));
  };
};
