import React, { useState } from "react";
import Popup from "../Popup/Popup";
const Course = ({ id, title, place, file_name,url }) => {
  const [pdfShowState, setPdfShow] = useState(false);
  const triggerPdfState = ()=>{
    setPdfShow(!pdfShowState);
  }
  return (
    // <a href={`/Portofolio/${id}`} target="_blank" rel="noopener noreferrer" className="course">
    <div className={(pdfShowState ? '':'hover')+' course'} onClick={triggerPdfState}>
      <div className="course-data">
        <h4>{title}</h4>
        <h5>from: {place}.</h5>
      </div>
      <Popup trigger={pdfShowState} setTrigger={triggerPdfState} file_name={file_name}/>
    </div>

    // </a>
  );
};

export default Course;
