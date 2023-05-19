import { Fragment } from "react";
import { createPortal } from "react-dom";

import classes from './Modal.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const Overlay = (props) => {
    return <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {createPortal(<Overlay>{props.children}</Overlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
