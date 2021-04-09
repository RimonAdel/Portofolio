import React from "react";
import './Popup.css'
function Popup(props) {
  const {file_name} = props;
  return (props.trigger ? (<div className="popup">
  <div className="popup__inner">
    <iframe
      id="pdf-js-viewer"
      src={`lib/web/viewer.html?file=../../Certificates/${file_name}.pdf`}
      title="webviewer"
      frameBorder="0"
      width="100%"
      height="100%"
    ></iframe>
    <button className="close__btn" onClick={props.setTrigger}> close</button>
  </div>
</div>):''
    
  );
}

export default Popup;