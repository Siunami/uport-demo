import React, { Component } from 'react'
import { $ } from './../../util/connectors.js'
import IssueButtonContainer from '../../user/ui/issueToken/issueContainer'
import SignButtonContainer from '../../user/ui/signingbutton/signContainer'
import { POINT_CONVERSION_UNCOMPRESSED } from 'constants';
import './home.css'
import { fire } from './firebase'



class Home extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      users: []
    };
  }

  componentDidMount(){
    var that = this;
    var reference = fire.database().ref('users')
    console.log(reference);
    reference.on("child_added",function(snapshot){
      var users = snapshot.val();
      var list = that.state.users
      list.push(users)
      var sortedList = list.sort(function(a, b){
        return b.Score-a.Score
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
        return b.Score-a.Score
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
  render() {
    const { users } = this.state;
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Good to Go!</h1>
            <IssueButtonContainer />
            <SignButtonContainer />
            <table>
              <tbody>
                <tr>
                  <th>Position</th>
                  <th>Name</th>
                  <th>Score</th>
                  <th>Tokens Collected</th>
                  <th>Tokens Redeemed</th>
                </tr>
                {users.map(user => (
                  <tr key={user.name}>
                    <td>1</td>
                    <td>{user.name}</td>
                    <td>{user.Score}</td>
                    <td>0</td>
                    <td>0</td>
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
