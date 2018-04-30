import { uport, $, contract, web3, MNID } from './../../../util/connectors.js'
import { browserHistory } from 'react-router'
export const IDENTITY_ATTESTATION = 'IDENTITY_ATTESTATION'

// For dispatching events to redux state
// function userLoggedIn(attestation) {
//   return {
//     type: IDENTITY_ATTESTATION,
//     payload: attestation
//   }
// }

export function issueToken() {
  function issueToken(userAddress, numTokens){
    console.log("Issued " + userAddress + " " + numTokens + " Token");
    $.ajax({
      url: "https://us-central1-buidlbox-dev.cloudfunctions.net/sendToken?sendAddress=" + userAddress + "&numTokens=" + numTokens,
      headers: { "Accept": "application/json"},
      type: 'GET',
      crossDomain: true
    }).done(function(data){
      console.log(data);
    })
  }

  return function(dispatch) {
    uport.requestCredentials({
      requested: ['name', 'avatar', 'phone', 'country'],
      notifications: true
    }).then((userProfile) => {
      const userAddress = MNID.decode(userProfile.address);
      const specificNetworkAddress = userAddress.address
      // console.log(userAddress)
      console.log(specificNetworkAddress);
      $.ajax({
        url: "https://us-central1-buidlbox-dev.cloudfunctions.net/queryUsers?userAddress=" + specificNetworkAddress,
      }).done(function(data){
        var isRegistered = data;
        if (isRegistered){
          console.log("User is registered");
          issueToken(specificNetworkAddress, 1);
        } else {
          console.log("User is not registered");
          // TODO: Add a notification on UI for not registered.
        }
      })



      // MyContract.transfer.call('0x3d36252840042d0b84adc99a8c7ecf1f10a19e6a', 100, (error, response) => {
      //     if (error) { throw error }
      //     console.log(response)
      //     // waitForMined(txHash, { blockNumber: null }, // see next area
      //     //   function pendingCB () {
      //     //     // Signal to the user you're still waiting
      //     //     // for a block confirmation
      //     //   },
      //     //   function successCB (data) {
      //     //     // Great Success!
      //     //     // Likely you'll call some eventPublisherMethod(txHash, data)
      //     //     console.log(data);
      //     //   }
      //     // )
      // })

    })
    



    // $.ajax({
    //   headers: { "Accept": "application/json"},
    //   type: 'GET',
    //   url:'https://us-central1-buidlbox-dev.cloudfunctions.net/transferToken',
    //   crossDomain: true
    // }).then(function(data){
    //   console.log(data);
    //   if (data.status == "success"){
    //     console.log("Worked!");
    //     $('#accountData').html("some data");
    //   } else {
    //     console.log("failed");
    //   }
    // })



    return browserHistory.push('/profile')
  }
}
