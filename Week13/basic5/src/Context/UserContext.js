import React, { createContext, Component } from "react";
import { withRouter } from "react-router-dom";

export const UserContext = createContext();

class UserContextTheme extends Component{
    constructor(props) {
        super(props);
        let userDetails_storage = JSON.parse(window.localStorage.getItem('userDetails'));
        let userLogin, name, picture, id;
        if (userDetails_storage) {
            userLogin = userDetails_storage.userLogin;
            name = userDetails_storage.name;
            picture = userDetails_storage.picture;
            id = userDetails_storage.id
        } else {
            userLogin = null;
            name = null;
            picture = null;
            id = null;
        }
        this.state = {
            userLogin: userLogin,
            name:  name,
            picture: picture,
            id :  id
        }
        this.changeLogin = this.changeLogin.bind(this);
        this.changeStateDone = this.changeStateDone.bind(this);
    }
    changeStateDone() {
        //console.log(this.state)
        window.localStorage.setItem('userDetails',
            JSON.stringify(this.state)
        );
        this.props.history.push(`/${this.state.id}`);
    }
    changeLogin(userDetails) {
        let new_state = {
            userLogin: true,
            name: userDetails.name,
            picture: userDetails.picture,
            id : userDetails.id,
        }
        this.setState(new_state, 
            this.changeStateDone
        );
    }
    render() {
        return (
            <UserContext.Provider
                value={
                    {
                        ...this.state,
                        changeLogin: this.changeLogin
                    }
                }
            >
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
export default withRouter(UserContextTheme);