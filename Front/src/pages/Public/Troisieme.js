import React from "react";
import NewTheme from "../../components/public/AddTheme";
import ShowTheme from "../../components/public/ShowTheme";

const Troisieme = () => {
  return (
    <div className="contentContainer contentTroisieme">
      {<NewTheme class={"3°"} />}
      {<ShowTheme class={"3°"} />}
    </div>
  );
};

export default Troisieme;
