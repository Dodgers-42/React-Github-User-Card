import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    // console.log("Constructor");
    super();
    this.state = {
      user: [],
      userCard: ""
    };
  }

  // componentDidMount() {
  //   // console.log("CDM running");
  //   axios
  //     .get("https://api.github.com/users/Dodgers-42")
  //     .then((res) => {
  //       this.setState({ user: res.data });
  //       // console.log(this.state);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // componentDidUpdate(prevState, prevProps) {
  //   if (prevState.doggos !== this.state.doggos) {
  //     console.log("doggos have changed!");
  //   }
  //   if (prevState.dogBreed !== this.state.dogBreed) {
  //     console.log("State updated, dog breed:", this.state.dogBreed);
  //   }
  // }

  fetchUsers = () => {
    axios
      .get(`https://api.github.com/users/Dodgers-42`)
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => console.log(err));
  };

  handleChanges = (e) => {
    console.log("handleChanges called");
    this.setState({
      // take the previous state, and just change the dogBreed text
      ...this.state,
      dogBreed: e.target.value
    });
  };

  render() {
    console.log("Render");
    return (
      
    );
  }
}
  export default App;

// function App() {
//   // make App class component like the lecture
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
