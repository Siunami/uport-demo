import React from 'react'

// Images
import uPortLogo from '../../../img/uport-logo.svg'

const SignButton = ({ onSigningClick }) => {
  return(
      <a href="#" className="pure-menu-link" onClick={(event) => onSigningClick(event)}>Redeem a token</a>
  )
}

export default SignButton
