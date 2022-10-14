import React from "react";
import NewTheme from "../../components/public/AddTheme";
import ShowTheme from "../../components/public/ShowTheme";

const Seconde = () => {
  return (
    <div className="contentContainer contentSeconde">
      {<NewTheme class={"2°"} />}
      {<ShowTheme class={"2°"} />}
    </div>
  );
};

export default Seconde;
