import React, { Component } from 'react';
import icon from "./Images/icon.png";
import { withStyles } from "@material-ui/styles";
import { UserContext } from "./Context/UserContext";
import { auth , provider } from "./firebase";
import Button from '@material-ui/core/Button';

const style = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        "& img": {
            width: '200px',
            height: '200px',
            marginBottom : '30px',
        },
        "& h1": {
            marginBottom : '30px'
        }
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }
    static contextType = UserContext;
    login() {
        auth
            .signInWithPopup(provider)
            .then(result => { 
                let dict = {
                    isNewUser: result.additionalUserInfo.isNewUser,
                    name: result.additionalUserInfo.profile.name,
                    picture : result.additionalUserInfo.profile.picture,
                    id : result.additionalUserInfo.profile.id,
                };
                this.context.changeLogin(dict);
            })
            .catch(error => alert(error.message));
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={ classes.container }>
                <img
                    alt="icon"
                    src={icon}
                />
                <h1>Log in to the FriendChat</h1>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={ this.login }
                >
                    Log in with Google
                </Button>
            </div>
        );
    }
}

export default withStyles(style)(Login);
