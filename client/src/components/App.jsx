import React from 'react';
import axios from 'axios';
import Feed from './Feed.jsx';
import Profile from './Profile.jsx';
import LogIn from './LogIn.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: true,
      logIn: false,
      profile: false,
      user: "",
      password: ""
    };
    this.handleLogIn = this.handleLogIn.bind(this);
    this.switchToLogIn = this.switchToLogIn.bind(this);
    this.switchToProfile = this.switchToProfile.bind(this);
    this.switchToFeed = this.switchToFeed.bind(this);
  }

  switchToLogIn() {
    this.setState({logIn: true});
  }

  switchToProfile() {
    this.setState({logIn: false,feed: false, profile: true});
  }

  switchToFeed() {
    this.setState({logIn: false,feed: true, profile: false});
  }

  handleLogIn(user, password){
    this.setState({user, password, logIn: false});
    axios.post('http://localhost:5000/logIn', {user, password})
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="main">
        {!this.state.logIn &&
          <>
            {this.state.feed && <Feed user={this.state.user} switchToProfile={this.switchToProfile} switchToLogIn={this.switchToLogIn}/>}
            {!this.state.feed && <Profile switchToFeed={this.switchToFeed} user={this.state.user} />}
          </>
        }
        {this.state.logIn && <LogIn switchToProfile={this.switchToProfile} switchToFeed={this.switchToFeed} handleLogIn={this.handleLogIn}/>}
      </div>
      );
  }
}

export default App;
