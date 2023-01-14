import { useDispatch } from "react-redux";
import { APP_FLOW_ACTIONS } from "../../redux/AppFlow";
import { PAGE } from "../../redux/AppFlow/types";

type Props = {
  Icon: any;
  label: PAGE;
  hovered: boolean;
  disabled?: boolean;
};
const SideIcon = ({ Icon, label, hovered, disabled = false }: Props) => {
  const dispatch = useDispatch();

  return (
    <div
      className={hovered ? "hovered side-icon" : "side-icon"}
      onClick={() => {
        if (!disabled) {
          dispatch(APP_FLOW_ACTIONS.update(label));
        }
      }}
    >
      {Icon}
      <p>{label}</p>
    </div>
  );
};

export default SideIcon;
