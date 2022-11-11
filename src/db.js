import {createPool} from 'mysql2/promise';

// Import createPool 'cause it doesn't need the async await function, it is not a promise like createConnection -> it is a promise

export const conn = createPool({
    user:'root',
    password:'password',
    host:'localhost',
    port:'3306',
    database:'survey'
});