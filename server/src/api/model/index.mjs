import pg from 'pg'
import { toCamelCase } from '../helpers/model.helpers.mjs'
const Pool = pg.Pool


const pool = new Pool ({
  user: "postgres",
  password: "test",
  database: "socialmedia_alpha",
  host: "localhost",
  port: 5432
})


export default {
  async query(queryConfig) {
    const {text, values} = queryConfig
    console.log({text, values})
    const start = Date.now()
    const data = await pool.query(queryConfig)
    if (data.rows) data.rows = await toCamelCase(data.rows)
    
    const duration = Date.now() - start

    const day = new Date()
    const time = day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds()

    console.log('executed query', { text, values, duration, rows: data.rowCount }, time)

    return data
  },

  
  async insertOne(table, columns, values) { 
    const params = Array.from({length: columns.length}, (_, i) => `$${i+1}`).join(',')
    const text = `INSERT INTO ${table} (${columns.join(',')}) VALUES(${params}) RETURNING *`
    const { rows } = await this.query(text, values)
    return rows
  },
  async getAllFrom(table) {
    const { rows } = await this.query(`SELECT * FROM ${table}`)
    return rows
  },
  async getOneFrom(table, id) {
    const { rows } = await this.query(`SELECT * FROM ${table} WHERE id=$1`, [id])
    return rows
  }, 
  async deleteOneFrom(table, id) {
    const rows = await this.query(`DELETE FROM ${table} WHERE id=$1`, id)
  },

}
