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
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  try {
    const { amount, id } = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Macbook air",
      payment_method: id,
      confirm: true,
    });
    res.send({ message: "pago exitoso" });
    console.log(payment);
  } catch (error) {
    console.log(error);
    res.json({ message: error.raw.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
