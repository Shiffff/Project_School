import React from "react";
import { isEmpty } from "../../utils/utils";
import { useSelector } from "react-redux";
import Card from "./CardTheme";

const ShowTheme = () => {
  const contentData = useSelector((state) => state.content.content);

  return (
    <div className="ShowTheme">
      <ul>
        {!isEmpty(contentData[0]) &&
          contentData.map((theme) => {
            return <Card theme={theme} key={theme.themeTitle} />;
          })}
      </ul>
    </div>
  );
};

export default ShowTheme;
