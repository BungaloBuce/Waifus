import React from 'react';
import Feed from './Feed.jsx';
import Profile from './Profile.jsx';
import LogIn from './LogIn.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: false,
      logIn: true,
      user: "Bruce"
    };
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn(user){
    this.setState({user: user})
    console.log(user);
  }

  render() {
    return (
      <div className="main">
        {!this.state.logIn &&
          <>
            {this.state.feed && <Feed />}
            {!this.state.feed && <Profile user={this.state.user} />}
          </>
        }
        {this.state.logIn && <LogIn handLogIn={this.handleLogIn}/>}
      </div>
      );
  }
}

export default App;
