const express = require("express"),
      app = express(),
      path = require("path"),
      bodyParser = require("body-parser"),
      port = process.env.PORT ||3000,
      nodemailer = require("nodemailer");
app.use(express.static(path.join(__dirname, "/public/")));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.post("/", function(req, res){
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "free3test@gmail.com",
      pass: "**********"
    }
  });
  transporter.sendMail({
    from: "free3test@gmail.com",
    to: "free3test@gmail.com",
    subject: req.body.name,
    text: `from: ${req.body.email}
    message: ${req.body.massege}`
  }, function(error){
    console.log(error);
  })
  res.send("success");
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
     console.log(`server is listening on ${port}`)
});
