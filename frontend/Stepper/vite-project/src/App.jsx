import "./index.css";
import CheckoutStepper from "./components/CheckoutStepper";
const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    component: () => <div>Provide your shipping address.</div>,
  },
  {
    name: "Payment",
    component: () => <div>Complete your payment.</div>,
  },
  {
    name: "Delivered",
    component: () => <div>Your Order has bee Delivered.</div>,
  },
];
function App() {
  <div>
    <h2>Checkout</h2>
    <CheckoutStepper stepConfig={CHECKOUT_STEPS} />
  </div>;
}

export default App