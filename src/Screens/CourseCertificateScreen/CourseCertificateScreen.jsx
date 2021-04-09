import React from "react";
import './CourseCertificateScreen.css'

function CourseCertificateScreen() {
  // const {id} = props.match.params.id;
  return (
<div className="certficate__pdf__viwer">
      <iframe
        id="pdf-js-viewer"
        src="lib/web/viewer.html?file=../../sample.pdf"
        title="webviewer"
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}

export default CourseCertificateScreen;
