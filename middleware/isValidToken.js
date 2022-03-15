
const jwt = require('jsonwebtoken');
require('dotenv').config();

const isValidToken = (req, res, next) => {
    const token = req.cookies["token"]
  
    if (token) {
      jwt.verify(
        token,
        process.env.SECRET_KEY,
        function(err, decoded){
          if (decoded){
            console.log("this is my payload with my token", decoded)
            // res.json(decoded)
            next()
          } else {
            res.redirect('/error');
          }
        }
  
      )
    } else {
      res.redirect('/error');
    }
  
  }

  module.exports = isValidToken;