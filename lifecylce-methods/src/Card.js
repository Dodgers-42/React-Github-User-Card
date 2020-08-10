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
export default Card;