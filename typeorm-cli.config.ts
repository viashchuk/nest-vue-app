import {DataSource} from 'typeorm';

export default new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'control-food',
    entities: [],
    migrations: []
})