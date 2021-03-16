const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
const app = express();

/* -------------------------------------------------------------------------- */
/*                                   CONFIG                                   */
/* -------------------------------------------------------------------------- */
require("./config/config");
require("dotenv").config();


const stripe = new Stripe(process.env.STRIPE_KEY);

app.use(cors({ origin: "https://stripe-checkout-payment.web.app" }));
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  console.log("in")
  try {
    const { amount, id } = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Macbook air",
      payment_method: id,
      confirm: true,
    });
    res.status(200).json({ok:"true", message: "pago exitoso" });
    console.log(payment);
  } catch (error) {
    console.log(error);
    res.status(400).json({ok:"false", message: error.raw.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
