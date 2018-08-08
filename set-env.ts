const writeFile = require('fs').writeFile;

const env = {
  production: true,
  rest_end_point: process.env.rest_end_point,
  auth_end_point:  process.env.auth_end_point,
  resume_rest_end_point: process.env.resume_rest_end_point,
  default_resume: process.env.default_resume,
  app_id: process.env.app_id,
  base_title: 'Jules LAURENT',
};

const toWrite = 'export const environment = ' + JSON.stringify(env, null, '  ').replace(/\"([^(\")"]+)\":/g, '$1:') + ';';

writeFile('./src/environments/environment.prod.ts', toWrite, (err => {
  if (err) {
    console.log(err);
  }
}));
