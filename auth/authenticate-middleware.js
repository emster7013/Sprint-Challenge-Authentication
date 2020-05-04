const jwt = require('jsonwebtoken')
const secrets = require('../config/secret')

/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (toke) {
    jwt.verify(token, secrets.jwtSecret,(error, decodedToken) =>{
      if (error){
        console.log(error)
        res.status(401).json({ you: 'shall not pass!' })
      } else {
        req.decodedToken = decodedToken
        next()
      }
    })
  } else {
    res.status(500).json({message: 'You are not logged in, please try logging in', err})
  }
};
