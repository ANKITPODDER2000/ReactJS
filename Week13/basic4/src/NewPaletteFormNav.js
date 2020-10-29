import React, { Component } from "react";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import PaletteNameForm from "./PaletteNameForm";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

class NewPaletteFormNav extends Component {
    render() {
        const { open ,classes , handleDrawerOpen , savePalette , paletteName,handleChange} = this.props;
        return (
            <div style={{background:'red'}} className="Container">
                <CssBaseline />
                <AppBar
                color="default"
                position='fixed'
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open
                })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                        color='inherit'
                        aria-label='Open drawer'
                        onClick={handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                        >
                        <ChevronRightIcon />
                        </IconButton>
                        <Typography variant='h6' color='inherit' noWrap>
                            Create Your Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.formContainer}>
                        {/*<ValidatorForm
                            className={classes.form}
                            onSubmit={savePalette}
                            ref="form"
                        >
                            <TextValidator
                                value={paletteName}
                                style={{ margin: "0 15px 0 20px" }}
                                placeholder="Palette Name"
                                name="paletteName"
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={[
                                    'This field is required!',
                                    'Palette name already exist!'
                                ]}
                                onChange={handleChange}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                style={{maxHeight:'36px'}}
                            >
                                SAVE PALETTE
                            </Button>
                        </ValidatorForm>*/}
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{ marginRight: "15px" }}
                            onClick={() => this.props.history.goBack()}
                        >Go Back</Button>
                        <PaletteNameForm
                            classes={classes}
                            savePalette={savePalette}
                            paletteName={paletteName}
                            handleChange={handleChange}
                        />
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(NewPaletteFormNav);
