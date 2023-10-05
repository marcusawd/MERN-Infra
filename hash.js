// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const myPlaintextPassword = "s0//P4$$w0rD";
// const someOtherPlaintextPassword = "not_bacon";

// bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
// 	// Store hash in your password DB.
// 	console.log(hash);
// });

var jwt = require("jsonwebtoken");
var token = jwt.sign({ foo: "bar" }, "shhhhh", { expiresIn: "1m" });
console.log(token);
