import axios from 'axios';
import qs from 'qs';

export const API_URL = 'http://localhost:3000';

export const createApiAction = ({ DEFINE }) => {
  const action = payload => ({
    type: DEFINE,
    payload,
  });
  return action;
};

export const generateApiAction = define => ({
  DEFINE: define,
  PENDING: `${define}_PENDING`,
  REJECTED: `${define}_REJECTED`,
  FULFILLED: `${define}_FULFILLED`,
});



// export const Stripe = axios.create({
//   baseURL: 'https://api.stripe.com/v1',
//   headers: {
//     Accept: 'application/json',
//     Authorization: `Bearer ${STRIPE_TOKEN}`,
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   transformRequest: [data => qs.stringify(data)],
// });

export const PlaceAutoComplete = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/autocomplete',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [data => qs.stringify(data)],
});

export const Geocode = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [data => qs.stringify(data)],
});


export default axios.create({
  baseURL: `${API_URL}/api/`,
});
