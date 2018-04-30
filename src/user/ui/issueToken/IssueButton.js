import React from 'react'

// Images
import uPortLogo from '../../../img/uport-logo.svg'

const IssueButton = ({ onIssueClick }) => {
  return(
      <a href="#" className="pure-menu-link" onClick={(event) => onIssueClick(event)}>Issue a Token</a>
  )
}

export default IssueButton
