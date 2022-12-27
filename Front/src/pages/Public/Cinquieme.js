import React from "react";
import NewTheme from "../../components/public/AddTheme";
import ShowTheme from "../../components/public/ShowTheme";
const Cinquieme = () => {
  return (
    <div className="contentContainer contentCinquieme">
      {<NewTheme class={"5°"} />}
      {<ShowTheme class={"5°"} />}
    </div>
  );
};

export default Cinquieme;
