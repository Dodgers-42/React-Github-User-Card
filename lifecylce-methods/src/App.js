import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './Card';

class App extends React.Component {
  constructor() {
    // console.log("Constructor");
    super();
    this.state = {
      
      user: {},
      following: [],
      
    };
  }

  componentDidMount() {
    console.log("CDM running");
    axios
      .get("https://api.github.com/users/Dodgers-42")
      .then((res) => {
        this.setState({ user: res.data });
        // console.log("got it",this.state);
      })
      .catch((err) => console.log("Damn", err));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    console.log("updating");
    if (Object.entries(prevState.user).length === 0) {
      console.log("user have changed!", prevState, this.state);
    this.fetchFallowing();
    }
    if (prevState.following !== this.state.following) {
      console.log("State updated, user card:", this.state.following);
    }
  }

  fetchFallowing = () => {
    console.log("fetching")
    axios
      .get(`https://api.github.com/users/Dodgers-42/followers`)
      .then((res) => {
        console.log(res);
        this.setState({ following: res.data});
  
      })
      .catch((err) => console.log('following',err));
  };

  // handleChanges = (e) => {
  //   console.log("handleChanges called");
  //   this.setState({
  //     // take the previous state, and just change the fallowing text
  //     ...this.state,
  //     following: e.target.value
  //   });
  // };

  render() {
    console.log("Render", this.state);
    return (
      <div className= "App">
        <Card user={this.state.user} following={this.state.following} />
      
       <h1>Name List</h1>

      {/* <input
          type="text"
          value={this.state.following}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchUser}>Fetch User</button>
        <div className="user">
          {this.state.usewr.map((user) => (
            <img width="150" className="dog" key={user} src={user} />
          ))}
          ;
      </div> */}
      </div>
    );
  }
}



  export default App;

