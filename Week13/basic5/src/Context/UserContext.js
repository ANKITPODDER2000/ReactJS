import React, { createContext, Component } from "react";
import { withRouter } from "react-router-dom";

export const UserContext = createContext();

class UserContextTheme extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userLogin : false
        }
        this.changeLogin = this.changeLogin.bind(this);
    }
    changeLogin(userDetails) {
        console.log(userDetails);
        this.setState({ userLogin: true });
        this.props.history.push("/");
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