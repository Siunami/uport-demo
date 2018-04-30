import { uport } from './../../../util/connectors.js'
import { browserHistory } from 'react-router'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  }
}

export function loginUser() {
  return function(dispatch) {
    // UPort and its web3 instance are defined in ./../../../util/wrappers.
    // Request uPort persona of account passed via QR
    uport.requestCredentials({
      requested: ['name', 'email', 'phone', 'country', 'avatar'],
      notifications:true
    }).then((credentials) => {
      dispatch(userLoggedIn(credentials))

      // Used a manual redirect here as opposed to a wrapper.
      // This way, once logged in a user can still access the home page.
      var currentLocation = browserHistory.getCurrentLocation()

      if ('redirect' in currentLocation.query)
      {
        return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
      }

      return browserHistory.push('/dashboard')
    })
  }
}


/* FOR REFERENCE
Object
@context:"http://schema.org"
@type:"Person"
address:"2ox6o78LryxwQh1RAVZSLLHNJZTbN4T6Hhs"
avatar:{uri: "https://ipfs.infura.io/ipfs/Qme1UXoVtnSpY4SNMibWUtAs7LUpkgGTdTZdFW9iJtsjgN"}
country:"Vancouver"
name:""
networkAddress:"2ox6o78LryxwQh1RAVZSLLHNJZTbN4T6Hhs"
phone:"+17786817883"
publicEncKey:"hd56P4HZc4lfpXTG/zGbxObbcqe+V9TTQfplMycjYGY="
publicKey:"0x0458ea772ed7fd4e7172b99735f14e6e2f7d9b62111b54515f449c4178168557109a590afe2ad0e812444492deacd3773cfe3ee89ecc5fea69e1b565e592984b18"
pushToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpc3MiOiIyb3g2bzc4THJ5eHdRaDFSQVZaU0xMSE5KWlRiTjRUNkhocyIsImlhdCI6MTUyMjI1ODUxOCwiYXVkIjoiMm9vUUsyN2JCNUNLNTFoUVZqUlNjRU1Sb0h2d003NFVqNWEiLCJ0eXBlIjoibm90aWZpY2F0aW9ucyIsInZhbHVlIjoiYXJuOmF3czpzbnM6dXMtd2VzdC0yOjExMzE5NjIxNjU1ODplbmRwb2ludC9BUE5TL3VQb3J0L2YxZDlmYzUxLWY3MjUtMzAwYy1hYzYyLTI4ZDk4ZGYxZmI5MyIsImV4cCI6MTUyMzU1NDUxOH0.XGY5lntDYJVP01CBYNhYlD7Pi1tg8Xh331E78UlX4gXJ4lMi84sktgH89WUcLxhg534vAa73SoaVog2TZB538A"
__proto__:
Object
*/