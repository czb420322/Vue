// module.exports = (req, res, next) => {
//   if (req.method == "POST" && req.path === "/login") {
//     if (req.body.username === "李三" && req.body.password == "123") {
//       return res.status(200).json({
//         user: {
//           token: "123",
//         },
//       });
//     } else {
//       return res.status(400).json({
//         message: "账号或密码错误",
//       });
//     }
//   }
//   next();
// };
module.exports = (req, res, next) => {

    if (req.method === "POST" && req.path === "/login") {
  
      if (req.body.username === "乔治" && req.body.password === "123") {
  
        return res.status(200).json({
  
          user: {
  
            token: "123",
  
          },
  
        });
  
      } else {
  
        return res.status(404).json({
  
          message: "账户或者密码错误",
  
        });
  
      }
  
    }
  
    next();
  
  };
  