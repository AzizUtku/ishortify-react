import { apiCall, apiCallWithData, methods } from '..';

const endpoints = {
  EP_API: '/api/',
  EP_ANALYTICS: '/api/analytics/',
};

export const apiGetApiKey = (auth) =>
  apiCall(endpoints.EP_API, methods.GET, auth);

export const apiCreateApiKey = (auth) =>
  apiCallWithData(endpoints.EP_API, methods.POST, auth);

export const apiDeleteApiKey = (auth) =>
  apiCall(endpoints.EP_API, methods.DELETE, auth);

export const apiFetchAnalytics = (auth) =>
  apiCall(endpoints.EP_ANALYTICS, methods.GET, auth);

