import React from "react";
import NewTheme from "../../components/public/AddTheme";
import ShowTheme from "../../components/public/ShowTheme";

const PremiereSPE = () => {
  return (
    <div className="contentContainer contentPremiereSPE">
      {<NewTheme class={"1°spe"} />}
      {<ShowTheme class={"1°spe"} />}
    </div>
  );
};

export default PremiereSPE;
