
import classes from "./Modal.module.css"
import { Fragment } from "react"

import  ReactDOM from "react-dom"
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}


const portal=document.getElementById("over-lays")
const Modal = props => {
    return (
        <Fragment>
            { ReactDOM.createPortal( <Backdrop onClick={props.onClick}/>,portal)}
            { ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portal)}
          
            
        </Fragment>

    );
}

export default Modal;

