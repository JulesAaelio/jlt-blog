const writeFile = require('fs').writeFile;

const env = {
  production: false,
  rest_end_point: 'http://api.blog.perso.local',
  auth_end_point: 'http://api.perso.local',
  resume_rest_end_point: 'http://api.perso.local',
  default_resume: 'FIRST',
  app_id: process.env.app_id,
  base_title: 'Jules LAURENT',
};

const toWrite = 'export const environment = ' + JSON.stringify(env, null, '\t') + ';';

writeFile('./src/environments/environment.prod.ts', toWrite, (err => {
  console.log(err);
}));
