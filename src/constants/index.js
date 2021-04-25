const prod = {
  API_BASE_URL: 'https://k8glfnoq2f.execute-api.eu-central-1.amazonaws.com/Prod',
};
const dev = {
  API_BASE_URL: 'https://k8glfnoq2f.execute-api.eu-central-1.amazonaws.com/Prod',
};

const constants = {};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
export default constants;
