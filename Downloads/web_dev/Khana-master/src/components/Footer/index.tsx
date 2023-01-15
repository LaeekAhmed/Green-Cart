import { Instagram, Envelope, Whatsapp } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://instagram.com/app.khana?igshid=YmMyMTA2M2Y="> <Instagram /> </a> 
        <a href="mailto:GreenCart.limited@gmail.com"> <Envelope /> </a>
        <a href="https://wa.me/message/RH6IWVGO4FX6L1"> <Whatsapp/> </a>
      </div>

      <p className="icons logo">Green Cart ltd.</p>
      <p className="icons" style={{ width: "200px" }}>
        2022 Green Cart App. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
