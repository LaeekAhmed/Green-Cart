import React, { useState } from "react";
import { PAGE } from "../../redux/AppFlow/types";
import { useDispatch, useSelector } from "react-redux";
import { getAppFlow } from "../../redux/AppFlow/selectors";
import { getCart } from "../../redux/Cart/selectors";
import visamaster from "../../images/visamaster.png";
import etransfer from "../../images/etransfer.png";
import paypal from "../../images/paypal.svg.png";
import { APP_FLOW_ACTIONS } from "../../redux/AppFlow";
import Items from "./Items";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { PayPalScriptOptions } from "@paypal/paypal-js/types/script-options";
import { PayPalButtonsComponent } from "@paypal/paypal-js/types/components/buttons";





function CheckoutForm() {
  const { page } = useSelector(getAppFlow);
  const dispatch = useDispatch();
  const { cart, cartTotal } = useSelector(getCart);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
  });
  
  function validateEmails(): void {
    const email_input = (document.getElementById("email") as HTMLInputElement)
      .value;
    const confirm_email = document.getElementById(
      "confirm_email"
    ) as HTMLInputElement;
    if (email_input !== confirm_email.value) {
      confirm_email.setCustomValidity("Emails don't match");
    } else {
      confirm_email.setCustomValidity("");
    }
  }
  const date = new Date();
  function roundDollarValue(value: number, decimalPlaces: number): number {
    if (value < 2) {
      return 2.0;
    } else if (value > 5) {
      return 5.0;
    } else {
      return Number(value.toFixed(decimalPlaces));
    }
  }
  const ordertotaldollars0 = (cartTotal + roundDollarValue(cartTotal * 0.05, 2));
  const ordertotaldollars = ordertotaldollars0.toFixed(2);
  

  const paypalScriptOptions: PayPalScriptOptions = {
    "client-id":
      "ASU6loEOQG4mtjS4Gq3DkLICjb6RFjTLnZE9gyfPgrCIgY9XytTL1J7RJRlWL7lYa0_ZKsTgBAhz-x1s",
    currency: "CAD"
  };

  function Button(){
    return (
      <PayPalButtons
        style={{ color: "gold",
        shape: "pill",
        layout: "horizontal",
        height: 45, }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: ordertotaldollars,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return Promise.resolve().then(() => {
            if (actions.order) {
              // click the checkout button to save the details to the google sheet
              document.getElementById("submit")?.click();
              // redirect to the done page
              dispatch(APP_FLOW_ACTIONS.update(PAGE.DONE));

            }
          });
        }}
        

        


        
      />
    );
  }

  function validateFormthenSubmit(){
    const form = document.getElementById("my-form") as HTMLFormElement;
    if (form.checkValidity()) {
      // click the checkout button to save the details to the google sheet
      document.getElementById("submit")?.click();
      // redirect to the done page
      dispatch(APP_FLOW_ACTIONS.update(PAGE.DONE));
    } else {
      form.reportValidity();
    }
  }
  const btn = document.getElementById("submit") as HTMLButtonElement;
  btn?.addEventListener("click", validateFormthenSubmit);




  return (
    <div
      className={
        page === PAGE.CHECKOUT
          ? "PaymentDetails"
          : "PaymentDetails hidden-screen"
      }
    >
      <form
        action="https://script.google.com/macros/s/AKfycbx85x05eKSrPEXq3NOs_qt4gTATioKOXVBPXL5XYJVq/dev"
        method="POST"
        target="_blank"
        id="my-form"
      >
        <div className="Title">
          <h1>
            Payment Details
            <p>Complete your purchase by providing your payment details.</p>
          </h1>
        </div>
        <br></br>
        <div className="pmtmethodsOrderdtls">
          <div className="deliverydetails">
            <h3>Payment Method</h3>
            <div className="payment-methods">
              <label className="payment-method paypal">
                <input
                  type="radio"
                  name="Payment Method"
                  value="paypal"
                  required
                />
                <img src={paypal} alt="PayPal logo" />
              </label>
              <label className="payment-method interac">
                <input
                  type="radio"
                  name="Payment Method"
                  value="interac"
                  required
                />
                <img src={etransfer} alt="Interac logo" />
              </label>
              <label className="payment-method visa-mastercard-amex">
                <input
                  type="radio"
                  name="Payment Method"
                  value="visa-mastercard-amex"
                  required
                />
                <img
                  src={visamaster}
                  alt="American Express, Mastercard And Visa Logos - Visa@nicepng.com"
                ></img>
              </label>
            </div>
            <h3>Delivery Details</h3>
            <div className="delivery-details">
              <label>
                <input type="hidden" name="Date" value={date.toDateString()} />
              </label>
              <label>
                <p>First Name:</p>
                <input
                  name="First Name"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </label>
              <label>
                <p>Last Name:</p>
                <input
                  name="Last Name"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </label>
              <label>
                <p>Email Address:</p>
                <input
                  name="Email Address"
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  onKeyUp={validateEmails}
                  required
                />
              </label>
              <label>
                <p>Confirm Email Address:</p>
                <input
                  name="Confirm Email Address"
                  type="email"
                  placeholder="Confirm Email Address"
                  id="confirm_email"
                  onKeyUp={validateEmails}
                  required
                />
              </label>

              <label>
                <p>Phone Number:</p>
                <input
                  name="Phone Number"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </label>
              <label>
                <p>Street Address:</p>
                <input
                  name="Street Address"
                  type="text"
                  placeholder="Street Address"
                  required
                />
              </label>
              <label>
                <p>City:</p>
                <input
                  name="City"
                  type="text"
                  placeholder="City"
                  required
                />
              </label>
              <label>
                <p>Province:</p>
                <input
                  type="text"
                  name="Province1"
                  id="Province1"
                  value="Ontario"
                  disabled
                  required
                ></input>
                <input
                  type="text"
                  name="Province"
                  id="Province"
                  value="Ontario"
                  required
                  hidden
                ></input>
                <input
                  type="text"
                  name="Country"
                  id="Country"
                  value="Canada"
                  required
                  hidden
                ></input>
                <input
                  type="text"
                  name="Total"
                  id="Total"
                  value={cartTotal}
                  required
                  hidden
                ></input>
                <input
                  type="text"
                  name="Items"
                  id="Items"
                  value={JSON.stringify(Items)}
                  hidden
                />
              </label>
              <label>
                <p>Postal Code:</p>
                <input
                  name="Postal Code"
                  type="text"
                  placeholder="Postal Code"
                  required
                />
              </label>
            </div>
          </div>
          <br></br>
          <div className="ordertotal" style={{ padding: "10px 30px" }}>
            <div className="order-total0">
              <div className="order-total" style={{ width: "100%" }}>
                <h3 id="total" className="values">
                  Total:
                  <h3>${cartTotal + roundDollarValue(cartTotal * 0.05, 2)}</h3>
                </h3>
                <span className="values">
                  Discount:
                  <p>$0.00</p>
                </span>
                <br></br>
                <span className="values">
                  <div>
                    Service Fee:{" "}
                    <div className="tooltip">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        className="bi bi-info-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                      </svg>{" "}
                      <span className="tooltiptext">
                        5% of your order before discounts and other fees ($2
                        min, $5 max)
                      </span>
                    </div>
                  </div>
                  <p>${roundDollarValue(cartTotal * 0.05, 2)}</p>
                </span>
                <br></br>
                <span className="values">
                  Delivery Fee:
                  <p>$0.00</p>
                </span>
                <br></br>
                <Items />
              </div>
              {/* <div className="order-total2">
                <span>$0.00</span>
                <span>${roundDollarValue(cartTotal * 0.05, 2)}</span>
                <span>$0.00</span>
              </div> */}
            </div>

            <br></br>
            <PayPalScriptProvider options={paypalScriptOptions}>
              <Button />
            </PayPalScriptProvider>              
            <button
              
              className="submit"
              type="submit"
              id = "submit"
              value = "submit"

            >
              Checkout
            </button>

            <span id="TOS" className="TOS">
              By clicking the button, you agree to our{" "}
              <a
                href="../../files/TERMS_OF_SERVICE.pdf"
                download="TERMS_OF_SERVICE.pdf"
              >
                Terms of Service
              </a>
              . You also consent to receiving marketing emails from us, but you
              can opt-out at any time.
            </span>

            <div className="securetext">
              <span>🔒 Payments are secure and encrypted</span>
            </div>
          </div>
        </div>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default CheckoutForm;
