import { createPool } from 'mysql2/promise'

export const pool = createPool({
    DB_HOST: 'localhost',
    DB_PORT: 3306,
    DB_USER: 'root',
    DB_PASS: '1234567890',
    DB_NAME: 'tasksdb'
})


