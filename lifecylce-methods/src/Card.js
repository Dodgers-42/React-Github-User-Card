import React from 'react'

class Card extends React.Component {
    constructor(){
        super();
        this.state = {
            user: [],
        };
    }
    componentDidMount() {
        console.log(this.props) //gives user and follower, but both are empty
    }
    render(){
        console.log("this is it",this.props);
        return(
            <div>
            {this.props.following.map(user => (
      <div className="card" key={user.id} >
          <img src={user.avatar_url} alt='profile avatar' />
          <div className="card-info">
              <h3 className="name">{user.name}</h3>
              <p className="username">{user.login}</p>
              <p>Location: {user.location}</p>
              <p>Profile:
                  <a href={user.url}>{user.url}</a>
              </p>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
              <p>Bio: {user.bio}</p>
          </div>
      </div>
      
    ))}
    <div className="card" key={this.props.user.id} >
          <img src={this.props.user.avatar_url} alt='profile avatar' />
          <div className="card-info">
              <h3 className="name">{this.props.user.name}</h3>
              <p className="username">{this.props.user.login}</p>
              <p>Location: {this.props.user.location}</p>
              <p>Profile:
                  <a href={this.props.user.url}>{this.props.user.url}</a>
              </p>
              <p>Followers: {this.props.user.followers}</p>
              <p>Following: {this.props.user.following}</p>
              <p>Bio: {this.props.user.bio}</p>
          </div>
      </div>
    </div>
    
        )
    }
}


export default Card;