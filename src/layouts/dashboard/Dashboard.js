import React, { Component } from 'react'

function test(){
  console.log("hi");
}

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }
  
  render() {
    test();
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Congratulations {this.props.authData.name}!</strong> If you're seeing this page, you've logged in with UPort successfully.</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard
