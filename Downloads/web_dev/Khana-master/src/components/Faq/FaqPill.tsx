import { useState } from "react";
import { CaretDownFill, PlusLg } from "react-bootstrap-icons";

type Props = {
  headerText: string;
  listChildren: JSX.Element[] | JSX.Element;
};

const FaqPill = ({ headerText, listChildren }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  return (
    <div>
      <div className="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="header">
          <p>{headerText}</p>
          <CaretDownFill className={isMenuOpen ? "icon rotate" : "icon"} />
        </div>
        <ul className={isMenuOpen ? "list" : "list hidden"}>{listChildren}</ul>
      </div>
    </div>
  );
};

export default FaqPill;
