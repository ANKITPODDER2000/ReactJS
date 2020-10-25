import React , {Component} from 'react';
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import style from "./stylesheet/MiniPalette";

class MiniPalette extends Component{
    render() {
        const { classes , paletteName , emoji , colors , id} = this.props;
        return (
            <div
                className={classes.container}
                onClick={() => this.props.history.push(`/palette/${id}`)}
            >
                <div className={classes.colorContainer}>
                    {colors.map(color => 
                        <div className={classes.smallColorContainer} style={{background : color.color}}></div>    
                    )}
                </div>
                <div className={classes.details}>
                    <h5>{paletteName}</h5>
                    <span>{emoji}</span>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(withRouter(MiniPalette));
