import React , {Component} from 'react';
import { withStyles } from "@material-ui/styles";

const style = {
    container: {
        position : "relative",
        width : "200px",
        height : "220px",
        background: "#fff",
        margin: "20px calc(calc(100% - 800px) / 8)",
        paddingTop: "10px",
        cursor: 'pointer',
        boxShadow: "5px 5px 10px #0006",
        transition : "0.5s",
        "&:hover": {
            boxShadow: "5px 5px 10px #000"
        }
    },
    colorContainer : {
        position: 'relative',
        width: "180px",
        height: "150px",
        background: "#0005",
        margin: "0px auto",
        display: "block",
        boxShadow: "2px 2px 6px #0007",
        transition : "0.5s",
        "&:hover": {
            boxShadow : "2px 2px 6px #000"
        }
    },
    smallColorContainer: {
        position: 'relative',
        display: "inline-block",
        width: "25%",
        height: "20%",
        margin: "0 auto",
        marginBottom : "-4px"
    },
    details: {
        position: 'relative',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
        padding : "0 10px"
    }

}
class MiniPalette extends Component{
    render() {
        const { classes , paletteName , emoji , colors , id} = this.props;
        return (
            <div className={classes.container}>
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

export default withStyles(style)(MiniPalette);
