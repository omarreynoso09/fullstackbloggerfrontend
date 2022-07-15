import React from "react";
import "./Modal.css";

const Modal = (props) => {
  if (!props.show) {
    return <></>;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <h3 className="title">{props.title}</h3>
        </div>
        <div className="body">{props.children}</div>
        <div className="footer">
          <button
            onClick={() => {
              props.putUpdatedBlog();
              props.onClose();
            }}
          >
            Update Blog
          </button>

          <button onClick={props.onClose} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
