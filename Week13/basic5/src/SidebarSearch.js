import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from "@material-ui/styles";
import style from "./styles/SidebarSearch";

class SidebarSearch extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sidebar_search}>
                <div className={classes.sidebar_search_box}>
                    <SearchIcon className={classes.seach_icon}/>
                    <input 
                        placeholder="Search name or message"
                        value={this.props.value}
                        onChange={this.props.handleChange}
                        className={classes.input}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(style)(SidebarSearch);
