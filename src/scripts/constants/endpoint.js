import CONFIG from './config';

const ENDPOINT = {
  ALL: () => `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  ADD_REVIEW: () => `${CONFIG.BASE_URL}/review`,
};

export default ENDPOINT;
