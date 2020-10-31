import React, { Component } from 'react';
import MiniPalette from "./MiniPalette";
import { withRouter , Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import style from "./stylesheet/PaletteList";
import { v4 as uuid } from "uuid";
import { CSSTransition , TransitionGroup} from 'react-transition-group';

class PaletteList extends Component {
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
                            delelePalette = {this.props.delelePalette}
                            {...color}
                        />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        );
    }
}

export default withStyles(style)(withRouter(PaletteList));
