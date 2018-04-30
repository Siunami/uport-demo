import React, { Component } from 'react'
import AttestButtonContainer from '../../ui/attestbutton/attestContainer'
import SignButtonContainer from '../../ui/signingbutton/signContainer'
import IssueButtonContainer from '../../ui/issueToken/issueContainer'

class Profile extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }    
  componentDidMount () {
    console.log(this.props.authData);
  }
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Profile</h1>
            <p>Change these details in UPort to see them reflected here.</p>
            <p>
              <strong>Name</strong><br />
              {this.props.authData.name}
            </p>
            <p id="accountData"></p>
            <AttestButtonContainer />
            <SignButtonContainer />
            <IssueButtonContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
