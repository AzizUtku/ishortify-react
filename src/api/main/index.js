import { apiCall, apiCallWithData, methods } from '..';

const endpoints = {
  EP_API_SHORTEN: '/api/shorten/',
  EP_API: '/api/',
};

export const apiShortenUrl = (data) =>
  apiCallWithData(endpoints.EP_API_SHORTEN, methods.POST, {}, data);

export const apiFetchOriginalUrl = (key) =>
  apiCall(endpoints.EP_API + key, methods.GET);
