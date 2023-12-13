import React from 'react'

function PopUpClose({handleClose, children}) {
 
  return (
    <div className="popup-close" onClick={handleClose}>
        {children}
    </div>
  )
}

export default PopUpClose