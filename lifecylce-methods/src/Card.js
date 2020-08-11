import React from 'react'

class Card extends React.Component {
    constructor(){
        super();
        this.state = {
            users: [],
        };
    }
    componentDidMount() {
        console.log(this.props) //gives user and follower, but both are empty
    }
    render(){
        return(
            <div></div>
        )
    }
}

//{users.map(user => (
    //   <div key={user.id} className="card">
    //       <img src={user.avatar_url} alt='profile avatar' />
    //       <div className="card-info">
    //           <h3 className="name">{user.name}</h3>
    //           <p className="username">{user.login}</p>
    //           <p>Location: {users.location}</p>
    //           <p>Profile:
    //               <a href={user.url}>{user.url}</a>
    //           </p>
    //           <p>Followers: {user.followers}</p>
    //           <p>Following: {users.following}</p>
    //           <p>Bio: {user.bio}</p>
    //       </div>
    //   </div>
    // ))}
export default Card;