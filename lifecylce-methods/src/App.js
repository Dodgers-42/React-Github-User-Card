import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './Card';

class App extends React.Component {
  constructor() {
    // console.log("Constructor");
    super();
    this.state = {
      user: [],
      userCard: ""
    };
  }

  componentDidMount() {
    console.log("CDM running");
    axios
      .get("https://api.github.com/users/Dodgers-42")
      .then((res) => {
        this.setState({ user: res.data });
        console.log("got it",this.state);
      })
      .catch((err) => console.log("Damn", err));
  }

  componentDidUpdate(prevState, prevProps) {
    console.log("updating");
    if (prevState.user !== this.state.user) {
      console.log("user have changed!");
    }
    if (prevState.userCard !== this.state.userCard) {
      console.log("State updated, user card:", this.state.userCard);
    }
  }

  fetchUsers = () => {
    axios
      .get(`https://api.github.com/users/Dodgers-42/following`)
      .then((res) => {
        this.setState({ following: res.data });
         console.log(this.state.following) 
      })
      .catch((err) => console.log('following',err));
  };

  // handleChanges = (e) => {
  //   console.log("handleChanges called");
  //   this.setState({
  //     // take the previous state, and just change the userCard text
  //     ...this.state,
  //     userCard: e.target.value
  //   });
  // };

  render() {
    console.log("Render");
    return (
      <div>
        <Card user={this.state.user} following={this.state.following} />
      </div>
      // <h1>Name List</h1>
      
    );
  }
}
  export default App;

