import React from "react";
import NewTheme from "../../components/public/AddTheme";
import ShowTheme from "../../components/public/ShowTheme";

const Quatrieme = () => {
  return (
    <div className="contentContainer contentQuatrieme">
      {<NewTheme class={"4°"} />}
      {<ShowTheme class={"4°"} />}
    </div>
  );
};

export default Quatrieme;
