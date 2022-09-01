import instance from './api';
export const appList = (params) =>
  instance.get('/app', { params, loading: true });
