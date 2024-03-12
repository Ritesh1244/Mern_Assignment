const { Admin } = require("../db/index");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const username = req.headers.username;
  const password = req.headers.password;
  // by using Await
  //   async function findAdmin(username, password, next) {
  //     const admin = await Admin.findOne({ username, password });
  //     if (admin) {
  //       next();
  //     }
  //   }

  Admin.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({
        mssg: "Admin Dosen't exist",
      });
    }
  });
}

module.exports = adminMiddleware;
