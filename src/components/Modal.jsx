import React, { useRef, useState } from 'react';
import '../styles/Modal.css';
import { FaRegTimesCircle } from "react-icons/fa";

function ModalView({ src, setView }) {
    return(
        <div class="modalContainer">
        <div class="imageContainer">
            <div><img src={src} /></div>
            <div class="icon"  onClick={() => { setView(false); }}><span>x</span></div>
        </div>
        </div>
    )
}
export default ModalView;