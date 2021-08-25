import client from './index.mjs'


export default  { 
  async getAllUsers () {
    const data = await client.query({
      text: 'SELECT id, public_name, image_color, about FROM account'
    })

    return data.rows
  },


  async getUser (values) {
    const data = await client.query({
      text: 'SELECT public_name, image_color, about FROM account WHERE id=$1',
      values,
    })

    return data.rows[0]
  },


  async getMyPage (values) {
    const data = await client.query({
      text: 'SELECT public_name, image_color, about FROM account WHERE id=$1',
      values,
    })

    return data.rows[0]
  },
} 
