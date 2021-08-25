import client from './index.mjs'
import userModel from '../model/user.model.mjs';


export default  { 
  async changeAbout (values) {
    let data = await client.query({
      text: 'UPDATE account SET about=$2 WHERE id=$1 RETURNING *',
      values,
    })

    let data1 = await userModel.getMyPage([data.rows[0].id])

    return data1
  },
} 
