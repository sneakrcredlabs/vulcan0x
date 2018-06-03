import { db as config } from '../config';

const pgp = require('pg-promise')()
const path = require('path')

const db = pgp(config);

function sql(file) {
  const fullPath = path.join(__dirname, '../'+file+'.sql');
  return new pgp.QueryFile(fullPath, { minify: true });
}

export { db, sql }