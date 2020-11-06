import React, { Component } from 'react';
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import ChatList from "./ChatList";
import db from "./firebase";
import { withStyles } from "@material-ui/styles";

const style = {
    sidebar : {
        position: 'relative',
        width: '350px',
        height: '100%',
        background: '#3F4448', //#3F4448
    }
}

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : "" ,
            chats : []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        db.collection('chats').onSnapshot(snapshot => (
            this.setState({chats  : snapshot.docs.map(doc => ({id: doc.id,data : doc.data()}))})
        ))
    }
    handleChange(e) {
        this.setState({
            value : e.target.value
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sidebar}>
                {/*This component is used to show the header of the sidebar*/}
                <SidebarHeader />
                {/*This component is used to show the sidebarsearch of the sidebar*/}
                <SidebarSearch
                    value={this.state.value}
                    handleChange={this.handleChange}
                />
                {/*All about chat list*/}
                <ChatList
                    chats = {this.state.chats}
                />
            </div>
        );
    }
}

export default withStyles(style)(Sidebar);
