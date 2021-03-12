import React from "react";
import StripeCheckout from "react-stripe-checkout";

function Payment() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 100,
    description: "Car",
  });

  function handleToken(token) {
    console.log(token);
    console.log("gg");
  }

  return (
    <div>
      <div>
        <h1>{product.name}</h1>
      </div>
      <StripeCheckout
        stripeKey="pk_test_51GuhVYJILFs8StGHjjzZha1VPsLlSzlDyahYHZksGhiDQZ94VIOGLzLOOsZoGwkm9nKgMM3qnVMg8ycODAV2FbWq00z0RR74IN"
        token={handleToken}
        amount={product.price * 100}
        name={product.name}
        currency="INR"
      ></StripeCheckout>
    </div>
  );
}

export default Payment;
