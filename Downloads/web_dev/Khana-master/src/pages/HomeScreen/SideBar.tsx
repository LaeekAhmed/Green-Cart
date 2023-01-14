import { House, BagCheck, CheckCircle, ChatLeftDots } from "react-bootstrap-icons";
import logo from "../../images/logo_icon.png";
import SideIcon from "./SideIcon";
import Dots from "./Dots";
import { getAppFlow } from "../../redux/AppFlow/selectors";
import { useSelector } from "react-redux";
import { PAGE } from "../../redux/AppFlow/types";

const Sidebar = () => {
  const { page } = useSelector(getAppFlow);
  return (
    <div className="side-bar">
      <img src={logo} className="logo-img" alt="Img of company icon" />
      <SideIcon Icon={<House />} label={PAGE.HOME} hovered={true}  />
      <Dots
        classN={
          page === PAGE.CHECKOUT || page === PAGE.COMMUNITYBLOG
            ? "dots dots-colored"
            : "dots"
        }
      />
      <SideIcon
        Icon={<BagCheck size={"2rem"} />}
        label={PAGE.CHECKOUT}
        hovered={page !== PAGE.HOME}
        disabled={false}
      />
      <Dots classN={page === PAGE.DONE ? "dots dots-colored" : "dots"} />

      <SideIcon
        Icon={<CheckCircle size={"2rem"} />}
        label={PAGE.DONE}
        hovered={page === PAGE.DONE}
        disabled={false}
      />
      <Dots classN={page === PAGE.COMMUNITYBLOG ? "dots dots-colored" : "dots"} />
      <SideIcon
        Icon={<ChatLeftDots size={"2rem"} />}
        label={PAGE.COMMUNITYBLOG}
        hovered={page === PAGE.COMMUNITYBLOG}
        disabled={false}
      />
    </div>
  );
};

export default Sidebar;
