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
                107
              </div>
              <p className="KW_area">in the GTHA!</p>
            </div>
          </div>
          <div className="top bottom">
            <p className="serving">Guranteed,</p>

            <div className="In_KW_Merged">
              <div className="In">NO</div>
              <p className="KW_area">Preservatives, Dyes, or Chemicals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
