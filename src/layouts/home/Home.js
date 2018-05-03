import React, { Component } from 'react'
import { $ } from './../../util/connectors.js'
import IssueButtonContainer from '../../user/ui/issueToken/issueContainer'
import SignButtonContainer from '../../user/ui/signingbutton/signContainer'
import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';
import './home.css'
import { fire } from './../../firebase'



class Home extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      users: []
    };
  }

  componentDidMount(){
    // TODO: Needs to update for any score changes as well
    var that = this;
    var reference = fire.database().ref('users')
    console.log(reference);

    reference.on('value',function(snapshot){
      var users = snapshot.val();
      var list = [];
      var keys = Object.keys(users);
      for (var i = 0; i < keys.length; i++){
        console.log(users[keys[i]]);
        list.push(users[keys[i]]);
      }
      var sortedList = list.sort(function(a, b){
        return b.score-a.score
      })
      console.log(sortedList)
      that.setState({users: sortedList})
    });

    reference.on("child_added",function(snapshot){
      var users = snapshot.val();
      var list = that.state.users
      list.push(users)
      var sortedList = list.sort(function(a, b){
        return b.score-a.score
      })
      that.setState({users: sortedList})
    });

    reference.on("child_removed",function(snapshot){
      var users = snapshot.val();
      var list = that.state.users
      var newList = list.filter(function(el) {
        return el.name !== users.name;
      })
      var sortedList = newList.sort(function(a, b){
        return b.score-a.score
      })
      that.setState({users: sortedList})
    });

    
    // $.ajax({
    //   url: "https://us-central1-buidlbox-dev.cloudfunctions.net/getRegisteredUsers",
    // }).done(function(data){
    //   console.log(data)
    //   that.setState({
    //     users:data
    //   })
    // });
  }
  // TODO: Tokens collected and tokens redeemed get actual user values.
  render() {
    const { users } = this.state;
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Treasure Hunt Leaderboard</h1>
            <IssueButtonContainer />
            <SignButtonContainer />
            <div className="kqr"></div>
            <table>
              <tbody>
                <tr>
                  <th>Position</th>
                  <th>User</th>
                  <th>Name</th>
                  <th>Score</th>
                  <th>Tokens Collected</th>
                  <th>Tokens Redeemed</th>
                </tr>
                {users.map(user => (
                  <tr key={user.name}>
                    <td>1</td>
                    <td><img className="avatar" src={user.avatar.uri}/></td>
                    <td><p id="avater-name">{user.name}</p></td>
                    <td>{user.score}</td>
                    <td>{user.tokensCollected}</td>
                    <td>{user.tokensRedeemed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            </div>
        </div>
      </main>
    )
  }
}

export default Home
