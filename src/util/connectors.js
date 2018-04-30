// import { Connect } from 'uport-connect'

// export let uport = new Connect('TruffleBox')

// export const web3 = uport.getWeb3()

import { Connect, SimpleSigner } from 'uport-connect'
import { Credentials } from 'uport'
var $ = require('jquery');
var ethers = require('ethers');
const MNID = require('mnid');

var signer = SimpleSigner('9aad63fa09876675c7d992bba7cb807e3df8d3a3f94e62631e8d5e254eb33238');

let uport = new Connect('Truffle-uport-test', {
    clientId: '2ooQK27bB5CK51hQVjRScEMRoHvwM74Uj5a',
    network: 'rinkeby',
    signer: signer
})

// const cred = {
//     sub: '0xd2de3673E37503d263eB72C875902d44d64a0E3B',
//     claim: {'email': 'hello@uport.me'},
//   }
// uport.attestCredentials(cred);

var infuraProviderKey = '0y5fi37l5SWLCWcFEl8L';
var privateKeyOfSender = '0x4eec0f4cc1278c6633aa2b10423cb2df957f99a5b5384e2d8c33c6d7e3cf2458';
var sendTokenTo = '0x212107C7a1dA9a2a72cb8F7dce3ac3d05678DD89';
var numTokensToSend = 1;

var myContractABI = [{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
var myContractAddress = "0x631f00B99A2eDF601b84E733ff7658Decb8dEA73";

var provider = new ethers.providers.InfuraProvider('rinkeby',infuraProviderKey);
var wallet = new ethers.Wallet(privateKeyOfSender, provider);
var contract = new ethers.Contract(myContractAddress, myContractABI, wallet);

let cred = new Credentials({
    address: '2ooQK27bB5CK51hQVjRScEMRoHvwM74Uj5a',
    signer: signer
});

const web3 = uport.getWeb3()

export { web3, uport, MNID, cred, $, contract }// , credentials }