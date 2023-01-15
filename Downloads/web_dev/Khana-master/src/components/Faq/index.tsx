import FaqPill from "./FaqPill";

function Faq() {
  return (
    <div>
      <h1>
        Freqeuntly Asked Questions{" "}
        <p>Learn more about Green Cart and our services</p>
      </h1>
      <div className="faq">
        <div className="Question_Buttons">
          <div className="Surrond">
            <FaqPill
              headerText="What to do if there is an issue with the food, or delivery?"
              listChildren={
                <>
                  <li>
                    If there is an issue with delievery you can give a call, to
                    our 24/7 helpline.
                  </li>
                  <li>Or you can contact us in whatsapp, or email.</li>
                  <li>
                    We will respond as soon as possible, and resolve your issue.
                  </li>
                  <li>
                    We will contact the delievery driver, and make sure your
                    delicous meals reaches you.
                  </li>
                </>
              }
            />
            <br />

            <FaqPill
              headerText="If the food quality of quantity was not as expected what should
              I do?"
              listChildren={
                <>
                  <li>
                    If the food quality is not as expected or the amount of food
                    is less than listed.
                  </li>
                  <li>
                    Simply, take a picture of the food, and send it to us
                    through whatsapp.
                  </li>
                  <li>
                    We will resolve the conflict ASAP. If there is an issue, you
                    will recieve credit/refund for your next order.
                  </li>
                </>
              }
            />
            <br />
            <FaqPill
              headerText="Who should I contact for issues with this service?"
              listChildren={
                <>
                  <li>You can contact Green Cart through multiple mediums,</li>
                  <li>
                    For urgent issues you can contact us through whatsapp, and
                    mobile
                  </li>
                  <li>
                    Otherwise we also handle more procedial issues through
                    email, so email us at GreenCart.limited@gmail.com.
                  </li>
                </>
              }
            />
            <br />
            <FaqPill
              headerText="I can't find my listed issue?"
              listChildren={
                <>
                  <li>If you can't find your listed issue, don't worry.</li>
                  <li>Our customer service team is available 24/7.</li>
                  <li>
                    We will address any issue you have, and will make sure you
                    needs are met
                  </li>
                  <li>
                    For us at Green Cart, customer experience is the most vital part
                    of our team.
                  </li>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
