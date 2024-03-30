import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            count : 0,
            count2 : 0
        };

    }

    componentDidMount(){
        console.log("child component has been mounted");
    }

    render(){
        const {count} = this.state;
        const {name, location} = this.props;
        console.log('batching of render');
        return(
            <div className="user">
                <h2>UserName: {name}</h2>
                <h2>Location: {location}</h2>
                <p>Count: {count}</p>
                <button className="update-btn" onClick={
                    () =>{
                    this.setState({
                        count: this.state.count + 2
                    })
                }
                }>Update</button>
            </div>
        )
    }
}

export default User;