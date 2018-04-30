import { uport } from './../../../util/connectors.js'
import { browserHistory } from 'react-router'
export const IDENTITY_ATTESTATION = 'IDENTITY_ATTESTATION'
function userLoggedIn(attestation) {
  return {
    type: IDENTITY_ATTESTATION,
    payload: attestation
  }
}

export function identityAttesation() {
  return function(dispatch) {
    console.log("identity attestation function called");

    const credential = {
        "Complex Claim":{
          "from":"truffle-test",
          "reward":"discount"
        }
    }
    uport.attestCredentials({
      sub: uport.address,
      claim: credential,
    }).then((credentials) => {
      console.log(credentials);
    });

    return browserHistory.push('/profile')
  }
}
