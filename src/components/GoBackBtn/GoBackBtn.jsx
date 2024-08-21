import { useRef } from "react";
import css from "./GoBackBtn.module.css";
import { Link, useLocation } from "react-router-dom";

function GoBackBtn() {
  const location = useLocation();
  const goBack = useRef(location.state ?? "/");

  return (
    <Link to={goBack.current} className={css.button}>
      Go Back
    </Link>
  );
}

export default GoBackBtn;
