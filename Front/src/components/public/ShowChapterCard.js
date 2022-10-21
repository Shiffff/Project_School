import React from "react";
import { isEmpty } from "../../utils/utils";
import CardChapter from "./CardChapter";
import AddChapter from "./AddChapter";

const ShowChapter = ({ theme }) => {
  return (
    <div className="ShowTheme">
      <ul>
        <AddChapter theme={theme} />
        {!isEmpty(theme.chapter[0]) &&
          theme.chapter.map((chapter) => {
            return (
              <CardChapter theme={theme} chapter={chapter} key={chapter._id} />
            );
          })}
      </ul>
    </div>
  );
};

export default ShowChapter;
