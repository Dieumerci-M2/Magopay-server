import jwt from 'jsonwebtoken'

const token = (id) => jwt.sign({ id }, "USER_TOKEN_FOR_LOGIN_ACCOUNT_IN_MAGOPAY_APPLICATION", { expiresIn : "24h"})


export default token;




