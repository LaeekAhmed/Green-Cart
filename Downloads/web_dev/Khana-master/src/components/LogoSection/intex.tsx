import { ArrowRight } from "react-bootstrap-icons";
function LogoSection() {
  return (
    <div>
      <h1>
        Welcome!
        <p>{new Date().toDateString()}</p>
      </h1>
      <div className="Main_Picture">
        <div className="Background">
          <div className="LogoColor">
            <div className="logo-text">
              <div className="logo">
                <img src="green_cart.png" className="LogoIcon" alt="" />
                <div className="Name">
                  Green Cart
                  <br />
                  <b>Keen to make you go green!</b>
                </div>
              </div>
              <div className="Slogan"></div>
              <a className="Sidenote" href="#place-order">
                Create Grocery List <ArrowRight />
              </a>
            </div>
            <img src="cow.png" className="Food" alt="" />
          </div>
        </div>
        <div className="right_section">
          <div className="top">
            <p className="serving">Orders shipped today:</p>
            <div className="In_KW_Merged">
              <div className="In">
                100
              </div>
              <p className="KW_area">in the GTA!</p>
            </div>
          </div>
          <div className="top bottom">
            <p className="serving">Including,</p>

            <div className="In_KW_Merged">
              <div className="In">4</div>
              <p className="KW_area">Exceptional Halal / Veg Options</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
