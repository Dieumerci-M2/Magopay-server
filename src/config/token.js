import jwt from 'jsonwebtoken'

const token = (id) => jwt.sign({ id }, process.env.USER_TOKEN, { expiresIn : "24h"})


export default token;




