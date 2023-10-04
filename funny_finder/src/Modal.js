import * as React from 'react';
import ReactDom from 'react-dom'

export default function Modal({open, currentDate, setCurrentDate, onClose}) {
    if (!open) return null

    return ReactDom.createPortal(
        <div zIndex='10'>
            Modal
            <button onClick={onClose}> Close Me </button>
        </div>,
        document.getElementById('portal')
    )
}