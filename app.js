require('dotenv').config()

const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_API);
const app = express();

const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");
const contactRoute = require("./routes/contact")

app.use(express.static('public'));
app.use("/login",loginRoute);
app.use("/signup",signupRoute);
app.use("/contacts",contactRoute);


app.get("/",function(req,res){
    res.sendFile(__dirname + "/src/index.html");
})

app.get("/pricing",function(req,res){
    res.sendFile(__dirname + "/src/pricing.html");
})

app.get("/checkout",function(req,res){
    res.sendFile(__dirname+"/src/checkout.html");
})

app.get("/fail",function(req,res){
    res.send("paymment failed")
})

app.get("/success",function(req,res){
    res.send("Successfull");
})

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1N2ZrFSA6f1HGrBb4j1XYbfl',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/fail',
    });
    res.redirect(303, session.url);
});



app.listen(3000| process.env.PORT,function(err){
    if(err){
        console.log(err);
    } else {
        console.log("server started at port 3000");
    }
})