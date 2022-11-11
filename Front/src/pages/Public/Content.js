import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useLocation, useParams } from "react-router-dom";
import { contentService } from "../../services/content.service";

const Content = () => {
  const { id } = useParams();
  const location = useLocation();
  const themmeID = location.state.themeId;
  const contentData = {
    chapterId: location.state.chapterId,
    lessonId: id,
  };
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    contentService
      .getOneLesson(themmeID, contentData)
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  return (
    <div className="App">
      <Document file={data.picture} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height="600" pageNumber={pageNumber} />
      </Document>
      <p>
        {" "}
        Page {pageNumber} of {numPages}
      </p>
      {pageNumber > 1 && (
        <button onClick={changePageBack}>Previous Page</button>
      )}
      {pageNumber < numPages && (
        <button onClick={changePageNext}>Next Page</button>
      )}
      <div></div>
    </div>
  );
};

export default Content;
