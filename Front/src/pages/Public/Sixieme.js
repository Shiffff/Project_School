import React from "react";
import NewTheme from "../../components/public/AddTheme";
import ShowTheme from "../../components/public/ShowTheme";

const Sixieme = () => {
  return (
    <div className="contentContainer contentsixieme">
      {<NewTheme class={"6°"} />}
      {<ShowTheme class={"6°"} />}
    </div>
  );
};

export default Sixieme;
