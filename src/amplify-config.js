import jsonData from '../src/util/output.json';

console.log(jsonData);

const amplifyConfig = {
  aws_project_region: jsonData.region,
  aws_cognito_region: jsonData.region,
  aws_user_pools_id: jsonData.userPoolID,
  aws_user_pools_web_client_id: jsonData.clientId,
};

export default amplifyConfig;
