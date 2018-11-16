// import CoinMarketCap from 'coinmarketcap-api';
//
// import {
//   REQUEST_LOGO,
//   RECEIVE_LOGO,
//   ERROR_LOGO,
//   ERROR_STATS
// } from '../constants';
//
// const apiKey = 'b120973f-2787-4115-9e4f-504eebccdf6a';
//
// const client = new CoinMarketCap(apiKey);
//
// const requestLogo = () => {
//   return {
//     type: REQUEST_LOGO
//   };
// };
//
// const receivedLogo = json => {
//   return {
//     type: RECEIVE_LOGO,
//     payload: json
//   };
// };
//
// const errorMessage = error => {
//   return { type: ERROR_STATS, payload: error };
// };
//
// // export const getLogo = id => {
// //   return dispatch => {
// //     dispatch(requestLogo());
// //     return client
// //       .getMetadata({id: id})
// //       .then(json => dispatch(receivedLogo(json.data)))
// //       .catch(error => console.log(error));
// //   };
// // };
//
// export const getLogo = (count = { start: 1, limit: 100 }) => {
//   return dispatch => {
//     dispatch(requestLogo());
//     return client
//       .getTickers(count)
//       .then(json => json.data)
//       .then(result => {
//         return result.map(el => {
//           return el.id;
//         });
//       })
//       .then(res =>
//         client
//           .getMetadata({ id: res })
//           .then(res => dispatch(receivedLogo(res.data)))
//       )
//       .catch(error => dispatch(errorMessage(error)));
//   };
// };
