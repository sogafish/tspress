import { createConnection } from "typeorm";
import { User } from '../entities/User';

export const connection = async() => await createConnection({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'tspress',
  entities: [
    User,
  ],
});
