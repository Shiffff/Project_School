import React from "react";
import NewTheme from "../../components/public/AddTheme";
import ShowTheme from "../../components/public/ShowTheme";

const TSPE = () => {
  return (
    <div className="contentContainer contentTSPE">
      {<NewTheme class={"TSPE"} />}
      {<ShowTheme class={"TSPE"} />}
    </div>
  );
};

export default TSPE;
