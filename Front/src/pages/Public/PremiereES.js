import React from "react";
import NewTheme from "../../components/public/AddTheme";
import ShowTheme from "../../components/public/ShowTheme";

const PremiereES = () => {
  return (
    <div className="contentContainer contentPremiereES">
      {<NewTheme class={"1°es"} />}
      {<ShowTheme class={"1°es"} />}
    </div>
  );
};

export default PremiereES;
