const AWS = require('aws-sdk');
const fs = require('fs');
const ssm = new AWS.SSM({ region: 'us-east-1' });

const params = {
  Name: '/default/aws/cognito/web',
  WithDecryption: false,
};

ssm.getParameter(params, (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log(data.Parameter.Value);

  fs.writeFile(
    __dirname + '/util/output.json',
    data.Parameter.Value,
    'utf8',
    function (err) {
      if (err) {
        console.log('An error occured while writing JSON Object to File.');
        return console.log(err);
      }

      console.log('JSON file has been saved.');
    }
  );
});
