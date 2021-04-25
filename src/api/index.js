/* eslint-disable func-names */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-extend-native */
import axios from 'axios';
import { config } from '../constants';

const methods = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
};

axios.defaults.baseURL = config.API_BASE_URL;

// For GET and DELETE
const apiCall = async (
  url,
  method = methods.GET,
  auth = {},
  headers = { 'Content-Type': 'application/json' }
) => {
  let _headers = headers;
  if (auth.idToken) {
    _headers = { 'Authorization': 'Bearer ' + auth.idToken, ...headers };
  }
  const result = await axios({
    url,
    method,
    headers: _headers,
  });
  return result;
};

// For POST and PUT
const apiCallWithData = async (
  url,
  method = methods.POST,
  auth = {},
  data = {},
  headers = { 'Content-Type': 'application/json' }
) => {
  let _headers = headers;
  if (auth.idToken) {
    _headers = { 'Authorization': 'Bearer ' + auth.idToken, ...headers };
  }
  const result = await axios({
    url,
    method,
    data,
    headers: _headers,
  });
  return result;
};

String.prototype.format = function () {
  const args = [].slice.call(arguments);
  return this.replace(/(\{\d+\})/g, (a) => args[+a.substr(1, a.length - 2) || 0]);
};

export { methods, apiCall, apiCallWithData };
