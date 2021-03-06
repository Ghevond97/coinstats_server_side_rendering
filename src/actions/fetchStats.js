import CoinMarketCap from 'coinmarketcap-api';

import { REQUEST_STATS, RECEIVE_STATS, RECEIVE_LOGO } from '../constants';

const apiKey = 'b120973f-2787-4115-9e4f-504eebccdf6a';

const client = new CoinMarketCap(apiKey);

const requestStats = () => {
  return {
    type: REQUEST_STATS
  };
};

const receivedStats = json => {
  return {
    type: RECEIVE_STATS,
    payload: json
  };
};

const receivedLogo = json => {
  return {
    type: RECEIVE_LOGO,
    payload: json
  };
};

export const getStats = (count = { start: 1, limit: 100 }) => {
  return dispatch => {
    dispatch(requestStats());
    return client
      .getTickers(count)
      .then(json => {
        dispatch(receivedStats(json.data));
        return json.data;
      })
      .then(result => {
        return result.map(el => {
          return el.id;
        });
      })
      .then(res =>
        client.getMetadata({ id: res }).then(res => {
          for (let i in res.data) {
            dispatch(
              receivedLogo({ id: res.data[i]['id'], logo: res.data[i]['logo'] })
            );
          }
        })
      )
      .catch(error => console.log(error));
  };
};
