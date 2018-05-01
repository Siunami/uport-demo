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

// // Callback handler for whether it was mined or not
// const waitForMined = (txHash, response, pendingCB, successCB) => {
//   if (response.blockNumber) {
//     successCB()
//   } else {
//     pendingCB()
//       pollingLoop(txHash, response, pendingCB, successCB)
//   }
// }

// // Recursive polling to do continuous checks for when the transaction was mined
// const pollingLoop = (txHash, response, pendingCB, successCB) => {
//   setTimeout(function () {
//     web3.eth.getTransaction(txHash, (error, response) => {
//       if (error) { throw error }
//         if (response === null) {
//           response = { blockNumber: null }
//         } // Some ETH nodes do not return pending tx
//         waitForMined(txHash, response, pendingCB, successCB)
//     })
//   }, 1000) // check again in one sec.
// }

// function MyContractSetup () {
//   var myContractABI = [{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
//   var myContractAddress = "0x631f00B99A2eDF601b84E733ff7658Decb8dEA73";
//   let MyContractABI = uport.contract(myContractABI)
//   let MyContractObj = MyContractABI.at(myContractAddress)
//   return MyContractObj
// }

// export function signUser() {
//   return function(dispatch) {
//     const MyContract = MyContractSetup()
//     MyContract.transfer.call('0xd2de3673e37503d263eb72c875902d44d64a0e3b',100, (error, response) => {
//       console.log(error);
//       console.log(response);
//       if (error) { throw error }
//       console.log(response)
//     });
//   }
// }
function MyContractSetup () {
  var myContractABI = [{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
  var myContractAddress = "0x631f00B99A2eDF601b84E733ff7658Decb8dEA73";
  let MyContractABI = web3.eth.contract(myContractABI)
  let MyContractObj = MyContractABI.at(myContractAddress)
  return MyContractObj
}

export function signUser() {
  return function(dispatch) {
    const MyContract = MyContractSetup()
    MyContract.balanceOf('0xd2de3673e37503d263eb72c875902d44d64a0e3b', (error, response) => {
      console.log(error);
      console.log(response);
      if (error) { throw error }
      $('#registeredUsers').text(response);
      console.log(response)
    });
  }
}
//     console.log(MyContract);
//     uport.requestCredentials().then((userProfile) => {
//       const userAddress = MNID.decode(userProfile.address);
//       const specificNetworkAddress = userAddress.address
//       // console.log(userAddress)
//       console.log(specificNetworkAddress);
      
//       // $.ajax({
//       //   url: "https://us-central1-buidlbox-dev.cloudfunctions.net/checkUserBalance" + "?userAddress=" + specificNetworkAddress,
//       // }).done(function(data){
//       //   if (data){
//       //     console.log(data);
//       //     // TODO: Data structure not as expected. Fix on firebase
//       //     console.log("User has " + data.numTokens + " tokens");
//       //     // TODO uport sign txn to send token back to holding address
//       //   } else {
//       //     console.log("User does not have enough tokens");
//       //   }
//       // })

//       MyContract.transfer.call('0x3d36252840042d0b84adc99a8c7ecf1f10a19e6a', 100, (error, response) => {
//           if (error) { throw error }
//           console.log(response)
//           // waitForMined(txHash, { blockNumber: null }, // see next area
//           //   function pendingCB () {
//           //     // Signal to the user you're still waiting
//           //     // for a block confirmation
//           //   },
//           //   function successCB (data) {
//           //     // Great Success!
//           //     // Likely you'll call some eventPublisherMethod(txHash, data)
//           //     console.log(data);
//           //   }
//           // )
//       })

//     })
    



//     $.ajax({
//       headers: { "Accept": "application/json"},
//       type: 'GET',
//       url:'https://us-central1-buidlbox-dev.cloudfunctions.net/transferToken',
//       crossDomain: true
//     }).then(function(data){
//       console.log(data);
//       if (data.status == "success"){
//         console.log("Worked!");
//         $('#accountData').html("some data");
//       } else {
//         console.log("failed");
//       }
//     })



//     return browserHistory.push('/profile')
//   }
// }
