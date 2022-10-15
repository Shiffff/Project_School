import React from "react";
import { isEmpty } from "../../utils/utils";
import { useSelector } from "react-redux";
import Card from "./CardTheme";

const ShowTheme = (props) => {
  const contentData = useSelector((state) => state.content.content);

  const contentDataClass = contentData.filter(
    (contentone) => contentone.class === props.class
  );

  return (
    <div className="ShowTheme">
      <ul>
        {!isEmpty(contentData[0]) &&
          contentDataClass.map((theme) => {
            return <Card theme={theme} key={theme.themeTitle} />;
          })}
      </ul>
    </div>
  );
};

export default ShowTheme;
