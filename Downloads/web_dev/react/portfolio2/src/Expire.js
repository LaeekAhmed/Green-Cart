import React, { useEffect, useState } from "react";

const Expire = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, props.delay);
  }, [props.delay]);

  return visible ? <div className="about p-5 text-3xl text-center mx-auto">{props.children}</div> : <div />;
};

export default Expire;
