import client from './index.mjs'


export default  { 
  async addPost (values) {
    let data = await client.query({
      text: 'INSERT INTO post (content, account_id) VALUES ($1, $2) RETURNING *',
      values,
    })

    let data1 = await this.getPost([data.rows[0].id])
    console.log({FIRST_STEP: data.rows[0], SECOND_STEP: data1})

    return data1
  },


  async getAllPosts () {
    const data = await client.query({
      text: 'SELECT post.*, account.public_name FROM post JOIN account ON (post.account_id = account.id) ORDER BY created_at DESC LIMIT 500 '
    })

    return data.rows
  },


  async getPost (values) {
    const data = await client.query({
      text: 'SELECT post.*, account.public_name FROM post JOIN account ON (post.account_id = account_id) AND (post.id = $1)',
      values,
    })

    return data.rows[0]
  },


  async hasPost (values) {
    const data = await client.query({
      text: 'SELECT EXISTS (SELECT * FROM post WHERE id=$1 AND account_id=$2)',
      values,
    })

    return data.rows[0].exists
  },


  async removePost (values) {
    await client.query({
      text: 'DELETE FROM post WHERE id=$1',
      values,
    })

  },


} 

