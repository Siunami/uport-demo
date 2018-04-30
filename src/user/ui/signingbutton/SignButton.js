import React from 'react'

// Images
import uPortLogo from '../../../img/uport-logo.svg'

const SignButton = ({ onSigningClick }) => {
  return(
      <a href="#" className="pure-menu-link" onClick={(event) => onSigningClick(event)}>Sign with UPort</a>
  )
}

export default SignButton
