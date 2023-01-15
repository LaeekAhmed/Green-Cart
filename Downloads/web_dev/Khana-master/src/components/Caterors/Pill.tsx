import { CaretDownFill } from "react-bootstrap-icons";
import Option from "./Option";
import { OptionType } from "../../types/Types";

type Props = {
  isSel: boolean;
  header: string;
  deliveryDate: Date;
  price: string;
  imgSrc: any;
  onClickCaret: (arg?: Number) => void;
  options: OptionType[];
};

const Pill = ({
  isSel,
  header,
  deliveryDate,
  price,
  imgSrc,
  onClickCaret,
  options,
}: Props) => {
  return (
    <div className="food-pill">
      <div className="top" onClick={() => onClickCaret(isSel ? 0 : undefined)}>
        <img src={imgSrc} alt="" className="pic" />
        <div className="info">
          <p className="header">{header}</p>
          <p className="sub-header">
            Price : $ {price}
          </p>
        </div>
        <div className={isSel ? "caret caret-sel" : "caret"}>
          <CaretDownFill />
        </div>
      </div>
      <div className={isSel ? "bottom-banner" : "bottom-banner hidden"}>
        {options.map((option) => (
          <Option
            caterorName={header}
            header={option.header}
            offerings={option.offerings}
            price={option.price}
            deliveryDate={deliveryDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Pill;
