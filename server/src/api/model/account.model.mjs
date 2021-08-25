import client from './index.mjs'


export default  { 
  async hasUser(login) {
    const data = await client.query({
      text: 'SELECT EXISTS (SELECT * FROM account WHERE login=$1)',
      values: [login],
    })
    const isExist = data.rows[0].exists
    if (isExist === true) return true
    else if (isExist === false) return false
  },
  
  
  async createUser (values) {
    console.log(values)
    const data = await client.query({
      text: 'INSERT INTO account (login, password, public_name) VALUES ($1, $2, $3) RETURNING *',
      values,
    })

    console.log({data})
    return data.rows[0]
  },


  async getUser (values) {
    const data = await client.query({
      text: 'SELECT * from account WHERE login=$1',
      values
    })
  return data.rows[0]
  },


  async deleteAccount (values) {
    await client.query({
      text: 'DELETE FROM account WHERE id=$1 AND login=$2',
      values
    })
  }

} 
