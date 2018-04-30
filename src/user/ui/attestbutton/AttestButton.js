import React from 'react'

// Images
import uPortLogo from '../../../img/uport-logo.svg'

const AttestButton = ({ onAttestUserClick }) => {
  return(
      <a href="#" className="pure-menu-link" onClick={(event) => onAttestUserClick(event)}>Attest with UPort</a>
  )
}

export default AttestButton
