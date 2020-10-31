import React, { Component } from 'react';
import MiniPalette from "./MiniPalette";
import { withRouter , Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import style from "./stylesheet/PaletteList";
import { v4 as uuid } from "uuid";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { CSSTransition , TransitionGroup} from 'react-transition-group';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

class PaletteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tryToDelete : false,
            paletteNametoDelete : ''
        };
        this.deleteColorPaletteConfirm = this.deleteColorPaletteConfirm.bind(this);
        this.cancelDelete              = this.cancelDelete.bind(this);
        this.delelePalette             = this.delelePalette.bind(this);
    }
    deleteColorPaletteConfirm(paletteNametoDelete){
        this.setState({
            tryToDelete : true,
            paletteNametoDelete : paletteNametoDelete
        })
    }
    cancelDelete(){
        this.setState({
            tryToDelete : false
        })
    }
    delelePalette(){
        this.setState({
            tryToDelete : false
        } , () => this.props.delelePalette(this.state.paletteNametoDelete))
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <nav className={classes.nav}>
                    <h1>ReactColors</h1>
                    <Link to="/palette/new">Create New Palette</Link>
                </nav>
                <TransitionGroup className={classes.container}>
                    {this.props.color.map(color => 
                        <CSSTransition key={color.id} classNames="fade" timeout={500}>
                        <MiniPalette
                            key={uuid()}
                            deleteColorPaletteConfirm = {this.deleteColorPaletteConfirm}
                            {...color}
                        />
                        </CSSTransition>
                    )}
                </TransitionGroup>
                <Dialog open={this.state.tryToDelete} aria-labelledby="delete-color-palette">
                    <DialogTitle id="delete-color-palette">Delete this Palette ?</DialogTitle>
                    <List>
                        <ListItem 
                            onClick={this.delelePalette}
                            button
                        > 
                            <ListItemAvatar>
                                <Avatar style={{background : blue[100] , color : blue[600]}}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Delete'/>
                        </ListItem>
                        <ListItem 
                            button
                            onClick={this.cancelDelete}
                        >
                            <ListItemAvatar>
                                <Avatar style={{background : red[100] , color : red[600]}}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Cancel'/>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(style)(withRouter(PaletteList));
